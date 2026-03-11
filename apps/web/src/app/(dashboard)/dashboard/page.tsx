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
    Rocket,
    ArrowUpRight,
    CircleDollarSign
} from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
    // Parallel data fetching
    const [totalCustomers, activeLoans, completedLoans, pendingPayments, loans, recentRepayments] = await Promise.all([
        db.customer.count(),
        db.loan.count({ where: { status: "ACTIVE" } }),
        db.loan.count({ where: { status: "COMPLETED" } }),
        db.repayment.count({ where: { paid: false } }),
        db.loan.findMany({ select: { interest: true } }),
        db.repayment.findMany({
            where: { paid: true },
            orderBy: { paidDate: "desc" },
            take: 5,
            include: {
                loan: {
                    include: {
                        customer: true
                    }
                }
            }
        })
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
                <Card className="p-0 overflow-hidden border-white/5 bg-white/[0.02] backdrop-blur-xl">
                    <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-black text-foreground tracking-tight">Recent Repayments</h3>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Live Transaction Stream</p>
                        </div>
                        <div className="p-2 bg-primary/10 rounded-xl">
                            <CircleDollarSign className="w-5 h-5 text-primary" />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="group">
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 border-b border-white/5">Customer</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 border-b border-white/5">Loan Amount</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 border-b border-white/5">Week</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 border-b border-white/5">Paid Amount</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 border-b border-white/5">Paid Date</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 border-b border-white/5">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentRepayments.length > 0 ? (
                                    recentRepayments.map((repayment) => (
                                        <tr key={repayment.id} className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary/20 to-purple-500/20 flex items-center justify-center font-black text-xs text-primary">
                                                        {repayment.loan.customer.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-sm text-foreground">{repayment.loan.customer.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 font-bold text-sm tabular-nums text-muted-foreground">
                                                {formatCurrency(repayment.loan.loanAmount)}
                                            </td>
                                            <td className="px-8 py-5 font-black text-[10px] uppercase tracking-widest text-primary/80">
                                                Week {repayment.weekNumber}
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-black tabular-nums">
                                                    +{formatCurrency(repayment.paidAmount)}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-medium text-muted-foreground">
                                                {repayment.paidDate ? new Date(repayment.paidDate).toLocaleDateString('en-IN', {
                                                    day: '2-digit',
                                                    month: 'short'
                                                }) : 'N/A'}
                                            </td>
                                            <td className="px-8 py-5">
                                                <Link href={`/loans/${repayment.loanId}`} className="p-2 hover:bg-white/5 rounded-lg transition-colors inline-block">
                                                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <Rocket className="w-8 h-8 text-muted-foreground/20" />
                                                <p className="text-sm font-bold text-muted-foreground">No repayments recorded yet.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 border-t border-white/5 bg-white/[0.01]">
                        <Link 
                            href="/repayments" 
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-black uppercase tracking-[0.2em] text-foreground transition-all"
                        >
                            View All Repayments
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
}
