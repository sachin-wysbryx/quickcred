export const formatCurrency = (amount: number) => {
    return `₹${Number(amount ?? 0).toFixed(2)}`;
};

export const formatDate = (date: Date | string) => {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(date));
};

export const calculateLoanInstallment = (totalAmount: number, weeks: number = 12) => {
    return totalAmount / weeks;
};

export const generateRepaymentSchedule = (loanId: string, totalRepayment: number, durationWeeks: number = 12) => {
    const weeklyAmount = totalRepayment / durationWeeks;
    const repayments = [];

    for (let i = 1; i <= durationWeeks; i++) {
        repayments.push({
            loanId,
            weekNumber: i,
            amount: weeklyAmount,
            paidAmount: 0,
            paid: false,
        });
    }


    return repayments;
};

export function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// export * from "./email/send-otp"; - Removed to prevent build errors in client components due to nodemailer
export * from "./loan/applyCustomPayment";
export * from "./currency";
