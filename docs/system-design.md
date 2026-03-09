# QuickCred System Design

QuickCred is a monorepo-based fintech admin system designed for small lending businesses.

## Architecture
The system follows a monorepo architecture using pnpm workspaces:
- `apps/web`: Next.js admin dashboard.
- `packages/db`: Shared Prisma client and database schema.
- `packages/ui`: Shared React components.
- `packages/utils`: Shared helper functions.

## Features
- **Admin Dashboard**: Overview of business metrics.
- **Customer Management**: CRUD operations for customers.
- **Loan Issuance**: Generate loans and repayment schedules.
- **Installment Tracking**: Monitor weekly payments over 12 weeks.
- **Status Monitoring**: Track loan health (Active, Completed, Overdue).
