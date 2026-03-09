# QuickCred – Loan & Installment Management System

QuickCred is a web-based **Loan and Installment Management System** designed for small lending businesses.
It allows administrators to manage customers, issue loans, track weekly repayments, and monitor overall business performance through a centralized dashboard.

The system is built with modern web technologies to ensure scalability, maintainability, and efficient financial tracking.

---

## 🚀 Features

* **Admin Authentication**

  * Secure login system for the administrator.

* **Customer Management**

  * Add new customers
  * Edit customer information
  * View customer details

* **Loan Management**

  * Create loans for customers
  * Automatically calculate loan interest
  * Generate repayment schedules

* **Weekly Installment Tracking**

  * 12-week installment system
  * Record weekly payments
  * Track pending payments

* **Loan Status Monitoring**

  * Active Loans
  * Completed Loans
  * Overdue Loans

* **Dashboard Analytics**

  * Total Customers
  * Active Loans
  * Completed Loans
  * Pending Payments
  * Total Profit

---

## 💰 Example Loan Model

| Field                    | Value    |
| ------------------------ | -------- |
| Loan Amount              | ₹10,000  |
| Interest                 | ₹1,500   |
| Amount Given to Customer | ₹8,500   |
| Total Repayment          | ₹10,000  |
| Duration                 | 12 Weeks |
| Weekly Installment       | ₹833.33  |

---

## 🏗 Tech Stack

**Frontend**

* Next.js
* React
* TypeScript
* Tailwind CSS

**Backend**

* Next.js API Routes / Node.js

**Database**

* PostgreSQL

**ORM**

* Prisma

**Hosting**

* Vercel (Frontend + APIs)
* Neon / Supabase PostgreSQL

---

## 📂 Project Structure

```
quickcred/
│
├── apps
│   └── web                # Next.js application
│
├── packages
│   └── db                 # Prisma schema and database client
│
├── prisma
│   └── schema.prisma
│
├── public
│
├── src
│   ├── components
│   ├── modules
│   ├── services
│   └── utils
│
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/quickcred.git
cd quickcred
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

---

## 🗄 Database Setup

1. Create a PostgreSQL database (Neon / Supabase recommended)
2. Add the connection string in `.env`

```
DATABASE_URL="postgresql://user:password@host:port/database"
```

Run migrations:

```bash
pnpm prisma migrate dev
```

Generate Prisma client:

```bash
pnpm prisma generate
```

---

## 📊 System Workflow

1. Admin logs into the system
2. Admin adds a new customer
3. Admin creates a loan for the customer
4. System automatically generates **12 weekly installments**
5. Admin records weekly payments
6. Loan status changes to **Completed** once all installments are paid

---

## 📅 Development Roadmap

| Phase                | Estimated Time |
| -------------------- | -------------- |
| Planning             | 1 Day          |
| Database Setup       | 1 Day          |
| Backend Development  | 3 Days         |
| Frontend Development | 4 Days         |
| Testing & Fixes      | 2 Days         |

---

## 🔐 User Roles

Currently the system supports:

* **Admin** – Full control over customers, loans, repayments, and dashboard analytics.

---

## 📈 Future Improvements

* Payment integration (UPI / Razorpay)
* Customer portal
* Automated payment reminders
* Financial reports and exports
* Multi-admin support

---

## 📜 License

This project is created for internal business usage.
You may modify and extend it according to your needs.
