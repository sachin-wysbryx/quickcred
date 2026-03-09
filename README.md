# QuickCred – Fintech Admin System

QuickCred is a **Loan Management System** for small lending businesses. It allows administrators to manage customers, issue loans, and track 12-week installment repayments.

## 🏗 Project Architecture

This project is organized as a **pnpm workspace** monorepo:

- `apps/web`: Next.js admin dashboard (App Router, TailwindCSS, TypeScript).
- `packages/db`: Prisma ORM and database schema shared across the monorepo.
- `packages/ui`: Shared UI components (React).
- `packages/utils`: Shared helper functions and business logic.

## 📂 Folder Structure

```
quickcred/
│
├── apps/
│   └── web/                # Next.js Application
│
├── packages/
│   ├── db/                 # Prisma & Database Client
│   ├── ui/                 # Shared UI Components
│   └── utils/              # Shared Helper Functions
│
├── docs/                   # System & Database Documentation
│
├── .github/                # CI/CD Workflows
│
├── package.json            # Root configuration
├── pnpm-workspace.yaml     # Workspace definition
└── tsconfig.json           # Root TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (v10+)
- MongoDB Atlas (or local MongoDB instance)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd quickcred
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Setup environment variables:
   Create a `.env` file in the root with your MongoDB connection string:
   ```env
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/quickcred"
   ```

4. Push the database schema:
   ```bash
   pnpm db:push
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

## 🛠 Project Scripts

- `pnpm dev`: Start the web app in development mode.
- `pnpm build`: Build the web app for production.
- `pnpm start`: Start the production server.
- `pnpm lint`: Run ESLint across the workspace.

## 📑 Documentation

Refer to the `docs` folder for detailed design and workflow information:
- [System Design](./docs/system-design.md)
- [Database Design](./docs/database-design.md)
- [Workflow](./docs/workflow.md)
