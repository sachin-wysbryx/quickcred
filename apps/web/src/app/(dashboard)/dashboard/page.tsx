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
        <div className="space-y-8 pb-10">
            <div>
                <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">System Overview</h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium">Real-time performance metrics for QuickCred</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} title={stat.title} className="hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex flex-col items-start space-y-2">
                            <span className="text-3xl p-3 bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-inner">{stat.icon}</span>
                            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter tabular-nums truncate w-full">
                                {stat.value}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Placeholder for future charts or activity feed */}
                <Card title="Quick Recovery Queue" className="md:col-span-2">
                    <div className="py-10 text-center space-y-2">
                        <div className="text-4xl">🚀</div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ready for Action</h3>
                        <p className="text-sm text-gray-500 max-w-xs mx-auto">All systems are operational. Recent repayments will appear here as they are processed.</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
