# 💳 QuickCred Admin Dashboard

[![System Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Next.js%2015-black.svg)]()
[![Database](https://img.shields.io/badge/Database-MongoDB%20%2B%20Prisma-blue.svg)]()
[![License](https://img.shields.io/badge/License-ISC-orange.svg)]()

QuickCred is a powerful, high-performance fintech admin ecosystem designed for micro-finance institutions. It streamlines the entire loan lifecycle—from customer onboarding and automated repayment scheduling to portfolio-wide analytics and secure collection management.

---

## 🚀 Key Capabilities

-   **Intelligent Dashboard:** real-time KPIs for active capital, projected profit, and collection efficiency.
-   **Automated Loan Engine:** Instant creation of 12-week repayment schedules with custom interest logic.
-   **Dynamic Collection Queue:** Smart tracking of "Upcoming", "Overdue", and "Collected" installments.
-   **Flexible Repayments:** Support for standard settlements and partial payments with automatic liability adjustment.
-   **Portfolio Intelligence:** Advanced reporting on disbursed volume, net ROI, and customer performance metrics.
-   **Secure Admin Access:** Secure OTP-based verification flow with JWT-encrypted session management.
-   **Premium UI/UX:** Built with Tailwind CSS v4, featuring high-fidelity dark/light modes and fluid responsiveness.

---

## 🏗️ Architecture & Ecosystem

The project follows a **Modular Monorepo** architecture powered by **pnpm workspaces**, ensuring strict separation of concerns and maximum code reusability.

```text
quickcred/
├── 📱 apps/
│   └── web/                # Next.js 15 (App Router) - Core Admin Interface
│       ├── src/app/        # Optimized Server Components & Actions
│       ├── src/components/ # Shared UI Logic & Layouts
│       └── middleware.ts   # JWT-encrypted Route Protection
│
├── 📦 packages/
│   ├── db/                 # Shared Data Layer (Prisma + MongoDB)
│   ├── ui/                 # Centralized Design System (Tailwind v4)
│   └── utils/              # FinTech Business Logic & Math Utilities
│
├── 🧪 testing/
│   └── e2e/                # Playwright End-to-End Test Suite
│
├── 📜 scripts/              # Automation & Database Management
└── ⚙️ pnpm-workspace.yaml   # Monorepo Configuration
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15+](https://nextjs.org/), [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) via [Prisma ORM](https://www.prisma.io/) |
| **Auth** | [Jose](https://github.com/panva/jose) (JWT), OTP-based Verification |
| **Testing** | [Vitest](https://vitest.dev/) (Unit), [Playwright](https://playwright.dev/) (E2E) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 🏁 Getting Started

### Prerequisites

-   **Node.js** (v20 or higher)
-   **pnpm** (v10 or higher)
-   **MongoDB Instance** (Local or Atlas)

### 1. Installation

Clone the repository and install the workspace dependencies:

```bash
pnpm install
```

### 2. Environment Configuration

Define your environment variables in `.env` files within both `packages/db` and `apps/web`:

```env
DATABASE_URL="your_mongodb_connection_string"
SESSION_SECRET="your_32_character_hex_secret"
```

### 3. Database Initialization

Synchronize your schema and generate the Prisma Client:

```bash
pnpm db:push
pnpm db:generate
```

### 4. Launch Development Environment

```bash
pnpm dev
```

---

## 🚦 Core Workflows & Logic

### 🔘 Loan Issuance Flow
When a loan is issued, the system automatically calculates a **12-week amortization schedule**. Each week is stored as a unique `Repayment` record linked to the loan and customer.

### 🔘 Payment Processing
- **Full Settlement:** Marks a specific installment as paid.
- **Partial Payment:** Reduces the total liability. The system intelligently applies these funds to the current pending week, reducing the `amount` of subsequent installments if necessary.

### 🔘 Testing Strategy
We maintain high reliability through dual-layered testing:
- **Unit Testing:** Run `pnpm test` to validate business logic in `packages/utils`.
- **E2E Testing:** Run `pnpm test:e2e` to simulate real user flows across the entire stack.

---

## 🔧 Maintenance & CLI

- `pnpm build`: Production-ready build (triggers Prisma generation automatically).
- `pnpm lint`: Run static analysis check.
- `pnpm reset:data`: **DANGER:** Clears all database collections for a fresh start.
- `pnpm db:generate`: Regenerates types for the internal database package.

---

## 📄 License

Distributed under the **ISC License**. See `LICENSE` for more information.

