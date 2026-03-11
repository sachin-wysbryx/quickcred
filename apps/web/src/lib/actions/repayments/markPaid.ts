"use server";

import { db } from "../../db";
import { revalidatePath } from "next/cache";

export async function markRepaymentPaid(repaymentId: string) {
    if (!repaymentId) {
        throw new Error("repaymentId is required");
    }

    const repayment = await db.repayment.findUnique({
        where: { id: repaymentId }
    });

    if (!repayment) {
        throw new Error("Repayment not found");
    }

    const updatedRepayment = await db.repayment.update({
        where: { id: repaymentId },
        data: {
            paid: true,
            paidDate: new Date(),
            paidAmount: repayment.amount, // Set paidAmount to full amount
        },
        include: { loan: { include: { repayments: true } } },
    });

    const loanId = updatedRepayment.loanId;
    const loan = updatedRepayment.loan;

    // FIX 4: Auto Update Loan Status based on remaining balance
    const totalPaid = loan.repayments.reduce((sum: number, r: any) => sum + Number(r.paidAmount ?? 0), 0);
    const remainingBalance = loan.totalRepayment - totalPaid;

    await db.loan.update({
        where: { id: loanId },
        data: {
            status: remainingBalance <= 0 ? "COMPLETED" : "ACTIVE"
        },
    });

    revalidatePath("/repayments");
    revalidatePath("/loans");
    revalidatePath("/dashboard");
    revalidatePath(`/loans/${loanId}`);
    revalidatePath("/reports");
}
