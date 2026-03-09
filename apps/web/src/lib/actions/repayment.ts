"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";

export async function markRepaymentPaid(repaymentId: string) {
    if (!repaymentId) {
        throw new Error("repaymentId is required");
    }

    const repayment = await db.repayment.update({
        where: { id: repaymentId },
        data: {
            paid: true,
            paidDate: new Date(),
        },
        include: { loan: { include: { repayments: true } } },
    });

    const loanId = repayment.loanId;
    const loan = repayment.loan;

    // Check if all repayments are paid
    const allPaid = loan.repayments.every((r) => r.paid);

    if (allPaid) {
        await db.loan.update({
            where: { id: loanId },
            data: { status: "COMPLETED" },
        });
    }

    revalidatePath("/repayments");
    revalidatePath("/loans");
    revalidatePath("/dashboard");
    revalidatePath(`/loans/${loanId}`);
}
