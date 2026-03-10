# QuickCred Database Design

The database uses MongoDB with Prisma ORM.

## Entity Relationship Model

### Admin
- `id`: ObjectId (@map("_id"))
- `email`: Login email (Unique)
- `password`: Hashed password
- `createdAt`: Timestamp

### Customer
- `id`: ObjectId (@map("_id"))
- `name`: Full name
- `phone`: Contact number (Unique)
- `address`: Optional address
- `createdAt`: Timestamp
- `loans`: Relation to Loan[]

### Loan
- `id`: ObjectId (@map("_id"))
- `customerId`: Relation to Customer (ObjectId)
- `loanAmount`: Total amount to be repaid
- `amountGiven`: Principal disbursed to the customer
- `interest`: Interest charged
- `totalRepayment`: Total expected repayment
- `weeklyInstallment`: Weekly amount due
- `durationWeeks`: Usually 12
- `status`: ACTIVE, COMPLETED, OVERDUE
- `startDate`: Loan start date
- `createdAt`, `updatedAt`: Timestamps
- `repayments`: Relation to Repayment[]

### Repayment (Installment)
- `id`: ObjectId (@map("_id"))
- `loanId`: Relation to Loan (ObjectId)
- `amount`: Amount for this installment
- `weekNumber`: 1 to 12
- `paid`: Boolean (default: false)
- `paidDate`: When the payment was actually made
- `createdAt`, `updatedAt`: Timestamps
