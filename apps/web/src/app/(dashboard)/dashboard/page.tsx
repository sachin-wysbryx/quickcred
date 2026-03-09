import React from "react";
import { db } from "@/lib/db";
import { Card } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

export default async function DashboardPage() {
    // Parallel data fetching
    const [totalCustomers, activeLoans, completedLoans, pendingPayments, loans] = await Promise.all([
        db.customer.count(),
        db.loan.count({ where: { status: "ACTIVE" } }),
        db.loan.count({ where: { status: "COMPLETED" } }),
        db.repayment.count({ where: { paid: false } }),
        db.loan.findMany({ select: { interest: true } }),
    ]);

    const totalProfit = loans.reduce((acc, loan) => acc + loan.interest, 0);

    const stats = [
        { title: "Total Customers", value: totalCustomers, icon: "👥" },
        { title: "Active Loans", value: activeLoans, icon: "💳" },
        { title: "Completed Loans", value: completedLoans, icon: "✅" },
        { title: "Pending Payments", value: pendingPayments, icon: "⏱" },
        { title: "Expected Profit", value: formatCurrency(totalProfit), icon: "💰" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">System Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} title={stat.title}>
                        <div className="flex items-center space-x-4">
                            <span className="text-4xl">{stat.icon}</span>
                            <span className="text-3xl font-extrabold text-gray-800 tracking-tight">{stat.value}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
