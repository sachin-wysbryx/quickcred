# QuickCred Admin Dashboard

A modern, high-performance fintech admin dashboard built for loan management, customer tracking, and automated repayment scheduling.


## 🚀 Overview

QuickCred is a comprehensive solution for micro-finance and credit management. It provides a real-time interface for administrators to manage the entire loan lifecycle—from customer onboarding and loan issuance to automated repayment tracking and portfolio analytics.

### Key Features

-   **Dashboard:** High-level metrics for active loans, total customers, pending payments, and expected profit.
-   **Customer Management:** Full CRM for managing borrower profiles, contact details, and account status (active/deactivated).
-   **Loan Issuance:** Streamlined workflow to create new loans with automated 12-week repayment schedules.
-   **Collection Queue:** Intelligent tracking of weekly installments with clear "Upcoming", "Overdue", and "Collected" status indicators.
-   **Advanced Repayments:** Support for standard settlements and custom partial payments with automatic liability adjustment.
-   **Portfolio Analytics:** Detailed reporting on volume disbursed, net profit generated, and customer-specific ROI.
-   **Secure Authentication:** Restricted admin access using OTP-based verification and JWT session management.
-   **Modern UI/UX:** Fully responsive design with optimized light/dark modes and premium aesthetics.

---

## 🏗️ Architecture & Folder Structure

The project is architected as a **monorepo** using **pnpm workspaces** for maximum modularity and code sharing.

```text
quickcred/
├── apps/
│   └── web/                # Next.js 15 (App Router) Frontend
│       ├── src/app/        # App Router pages and layouts
│       ├── src/components/ # Client & Server components
│       ├── src/lib/        # Internal logic: Server Actions, API, Auth
│       └── middleware.ts   # JWT-based Route protection
│
├── packages/
│   ├── db/                 # Shared Database Layer
│   │   ├── prisma/         # Prisma Schema (MongoDB)
│   │   └── src/            # Generated Prisma Client and helpers
│   ├── ui/                 # Shared Design System
│   │   └── src/            # Core UI blocks: Card, Table, Button
│   └── utils/              # Shared logic & helpers
│       └── src/            # Loan math, Formatting, OTP, Emails
│
├── scripts/                # Development & Maintenance scripts
└── pnpm-workspace.yaml     # Workspace configuration
```

---

## 🛠️ Technology Stack

-   **Core:** [Next.js 15+](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Database:** [MongoDB](https://www.mongodb.com/) with [Prisma ORM](https://www.prisma.io/)
-   **Auth:** JWT via [Jose](https://github.com/panva/jose)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)

---

## 🏁 Getting Started

### Prerequisites

-   Node.js (v20+)
-   pnpm (v10+)
-   MongoDB Instance (Local or Atlas)

### Installation

1.  **Clone and install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Environment Setup:** Create a `.env` file in `packages/db` and `apps/web`:
    ```env
    DATABASE_URL="your_mongodb_connection_string"
    SESSION_SECRET="your_secure_random_key"
    ```

3.  **Synchronize Database:**
    ```bash
    pnpm db:push
    pnpm db:generate
    ```

4.  **Launch Dashboard:**
    ```bash
    pnpm dev
    ```

---

## 🔀 Core Workflows

### 1. Issue a New Loan
-   Select an active customer.
-   Define Principal, Interest Rate, and Start Date.
-   The system **automatically generates** 12 weekly `Repayment` records on submission.

### 2. Collection Management
-   **Settle:** Mark a specific week's installment as fully paid.
-   **Custom Payment:** Apply a custom amount. The system will intelligently reduce the remaining liability starting from the current pending week.

### 3. Customer Lifecycle
-   Customers can be deactivated to prevent new loan issuance.
-   Issuing a new loan to an inactive customer will automatically reactivate them.

---

## 🔧 Maintenance Scripts

-   `pnpm dev`: Start the development server.
-   `pnpm build`: Create a production-ready build of the entire monorepo.
-   `pnpm reset:data`: **CAUTION:** Clears and resets the database (runs `scripts/resetDatabase.ts`).
-   `pnpm db:generate`: Regenerates the Prisma Client.

---

## 📄 License
ISC License
