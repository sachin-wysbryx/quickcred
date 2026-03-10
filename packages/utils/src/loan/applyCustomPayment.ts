export interface RepaymentUpdate {
    id: string;
    paidAmount: number;
    paid: boolean;
    paidDate?: Date;
}

export function applyCustomPayment(
    pendingRepayments: { id: string; amount: number; paidAmount: number; weekNumber: number }[],
    paymentAmount: number
): RepaymentUpdate[] {
    let remainingPayment = paymentAmount;
    const updates: RepaymentUpdate[] = [];

    // Sort by week number to ensure we pay in order
    const sortedRepayments = [...pendingRepayments].sort((a, b) => a.weekNumber - b.weekNumber);

    for (const repayment of sortedRepayments) {
        if (remainingPayment <= 0) break;

        const remainingToPayForItem = repayment.amount - repayment.paidAmount;

        if (remainingPayment >= remainingToPayForItem) {
            // payment covers this installment completely
            updates.push({
                id: repayment.id,
                paidAmount: repayment.amount, // Set to full amount
                paid: true,
                paidDate: new Date()
            });
            remainingPayment -= remainingToPayForItem;
        } else {
            // partial payment
            updates.push({
                id: repayment.id,
                paidAmount: repayment.paidAmount + remainingPayment,
                paid: false
            });
            remainingPayment = 0;
        }
    }

    return updates;
}
