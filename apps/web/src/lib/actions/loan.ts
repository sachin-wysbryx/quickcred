"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";
import { generateRepaymentSchedule } from "@repo/utils";

export async function createLoan(formData: FormData): Promise<string> {
    const customerId = formData.get("customerId") as string;
    const loanAmount = parseFloat(formData.get("loanAmount") as string);
    const interestRate = parseFloat(formData.get("interest") as string);
    const startDate = new Date(formData.get("startDate") as string);
    let description = formData.get("description") as string;

    if (!customerId || isNaN(loanAmount) || isNaN(interestRate) || !startDate) {
        throw new Error("Invalid loan data");
    }

    // Feature 3: Loan Description
    const loanCount = await db.loan.count({
        where: { customerId }
    });

    if (!description || description.trim() === "") {
        description = `Loan ${loanCount + 1}`;
    }

    const durationWeeks = 12;
    const interest = (loanAmount * interestRate) / 100;
    const amountGiven = loanAmount;
    const totalRepayment = loanAmount + interest;
    const weeklyInstallment = totalRepayment / durationWeeks;

    // Feature 6: Customer Reactivation
    await db.customer.update({
        where: { id: customerId },
        data: { isActive: true }
    });

    const loan = await db.loan.create({
        data: {
            customerId,
            loanAmount,
            interest,
            amountGiven,
            totalRepayment,
            weeklyInstallment,
            durationWeeks,
            description,
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

    return loan.id;
}

