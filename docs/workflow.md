# QuickCred Workflows

## Loan Creation Workflow
1. **Customer Selection**: Admin selects an existing customer or creates a new one.
2. **Loan Entry**: Admin enters the loan amount and interest.
3. **Calculation**: System calculates the total repayment amount and weekly installment (12 weeks).
4. **Generation**: System generates a Loan record and 12 Repayment (installment) records.
5. **Disbursement**: Loan status is set to `ACTIVE`.

## Repayment Process
1. **Tracking**: Admin views pending installments for the current week.
2. **Recording**: Admin marks an installment as `PAID` when the customer pays.
3. **Status Update**: If all 12 installments are paid, the Loan status is updated to `COMPLETED`.
4. **Overdue Detection**: Any installment past its `dueDate` without a `paidDate` is marked `OVERDUE`.

## Installment Generation Logic
- `Installment Amount = Total Repayment Amount / 12`
- `Due Date = Start Date + (Week Number * 7 Days)`
