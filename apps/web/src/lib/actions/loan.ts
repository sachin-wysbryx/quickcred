"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";
import { generateRepaymentSchedule } from "@repo/utils";

export async function createLoan(formData: FormData) {
    const customerId = formData.get("customerId") as string;
    const loanAmount = parseFloat(formData.get("loanAmount") as string);
    const interestRate = parseFloat(formData.get("interest") as string);
    const startDate = new Date(formData.get("startDate") as string);

    if (!customerId || isNaN(loanAmount) || isNaN(interestRate) || !startDate) {
        throw new Error("Invalid loan data");
    }

    const durationWeeks = 12;
    const interest = (loanAmount * interestRate) / 100;
    const amountGiven = loanAmount;
    const totalRepayment = loanAmount + interest;
    const weeklyInstallment = totalRepayment / durationWeeks;

    const loan = await db.loan.create({
        data: {
            customerId,
            loanAmount,
            interest,
            amountGiven,
            totalRepayment,
            weeklyInstallment,
            durationWeeks,
            startDate,
            status: "ACTIVE",
        },
    });

    // Generate repayments
    const schedule = generateRepaymentSchedule(loan.id, totalRepayment, durationWeeks);

    // Create all repayment records
    await db.repayment.createMany({
        data: schedule,
    });

    revalidatePath("/loans");
    revalidatePath("/repayments");
    revalidatePath("/dashboard");
}
