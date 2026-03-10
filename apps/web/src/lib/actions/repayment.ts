"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";
import { applyCustomPayment } from "@repo/utils";


export async function processCustomPayment(loanId: string, formData: FormData) {
    const rawAmount = formData.get("amount") as string;
    const amount = parseFloat(rawAmount);
    const dateStr = formData.get("date") as string;
    const paymentDate = dateStr ? new Date(dateStr) : new Date();

    if (!rawAmount || isNaN(amount) || amount <= 0) {
        throw new Error("Invalid payment amount");
    }

    const loan = await db.loan.findUnique({
        where: { id: loanId },
        include: { repayments: true }
    });

    if (!loan) {
        throw new Error("Loan not found");
    }

    const pendingRepayments = loan.repayments
        .filter(r => !r.paid)
        .map(r => ({
            id: r.id,
            amount: r.amount,
            paidAmount: Number(r.paidAmount ?? 0),
            weekNumber: r.weekNumber
        }));

    if (pendingRepayments.length === 0) {
        throw new Error("No pending installments for this loan");
    }

    const updates = applyCustomPayment(pendingRepayments, amount);

    // Apply updates sequentially (Prisma doesn't support bulk update with different data easily)
    for (const update of updates) {
        await db.repayment.update({
            where: { id: update.id },
            data: {
                paidAmount: update.paidAmount,
                paid: update.paid,
                paidDate: update.paidDate || null
            }
        });
    }

    // Refresh loan to check completion status - FIX 4: Update status based on remaining balance
    const updatedLoan = await db.loan.findUnique({
        where: { id: loanId },
        include: { repayments: true }
    });

    if (updatedLoan) {
        const totalPaidSoFar = updatedLoan.repayments.reduce((sum, r) => sum + Number(r.paidAmount ?? 0), 0);
        const remainingLoanBalance = updatedLoan.totalRepayment - totalPaidSoFar;

        await db.loan.update({
            where: { id: loanId },
            data: {
                status: remainingLoanBalance <= 0 ? "COMPLETED" : "ACTIVE"
            }
        });
    }

    revalidatePath("/repayments");
    revalidatePath("/loans");
    revalidatePath(`/loans/${loanId}`);
    revalidatePath("/dashboard");
    revalidatePath("/reports");
}
