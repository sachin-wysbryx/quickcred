import React from "react";
import { db } from "@/lib/db";
import { Card } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import {
    Users,
    CreditCard,
    CheckCircle2,
    Clock,
    TrendingUp,
    Search,
    Rocket
} from "lucide-react";

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
        { title: "Total Customers", value: totalCustomers.toLocaleString(), icon: Users, trend: "+12%" },
        { title: "Active Loans", value: activeLoans.toLocaleString(), icon: CreditCard, trend: "+5%" },
        { title: "Completed Loans", value: completedLoans.toLocaleString(), icon: CheckCircle2, trend: "+8%" },
        { title: "Pending Payments", value: pendingPayments.toLocaleString(), icon: Clock, trend: "-2%" },
        { title: "Expected Profit", value: formatCurrency(totalProfit), icon: TrendingUp, trend: "+15%" },
    ];

    return (
        <div className="space-y-10 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-foreground tracking-tight">Welcome back,</h1>
                    <p className="text-xl font-bold text-primary mt-1">Administrator</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} gradient className="relative overflow-hidden group">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2.5 bg-white/20 rounded-xl">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-black text-white/60 uppercase tracking-widest">{stat.trend}</span>
                            </div>
                            <div>
                                <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">{stat.title}</p>
                                <h3 className="text-2xl font-black text-white tracking-tighter tabular-nums">
                                    {stat.value}
                                </h3>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-8">
                <Card className="min-h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="space-y-6 max-w-md mx-auto">
                        <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping"></div>
                            <div className="relative w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center shadow-inner">
                                <Search className="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-foreground tracking-tight">Ready for Action</h3>
                            <p className="text-muted-foreground font-medium">
                                No pending recovery tasks at the moment. Your portfolio is looking healthy!
                            </p>
                        </div>
                        <div className="pt-4">
                            <button className="px-8 py-3 bg-muted hover:bg-muted/80 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                                Refresh Queue
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
