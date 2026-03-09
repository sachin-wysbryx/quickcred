export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(amount);
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
            paid: false,
        });
    }


    return repayments;
};

export * from "./email/send-otp";
