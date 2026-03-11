import { db } from "@/lib/db";
import { Card, Table, Button } from "@repo/ui";
import { formatCurrency, formatDate } from "@repo/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { markRepaymentPaid } from "@/lib/actions/repayments/markPaid";
import {
    ChevronLeft,
    User,
    PieChart,
    IndianRupee,
    Calendar,
    ArrowRight,
    CheckCircle2,
    Clock,
    AlertCircle,
    TrendingUp,
    Shield
} from "lucide-react";

export default async function LoanDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: loanId } = await params;

    const loan = await db.loan.findUnique({
        where: { id: loanId },
        include: {
            customer: true,
            repayments: {
                orderBy: { weekNumber: "asc" }
            }
        }
    });

    if (!loan) {
        notFound();
    }

    const { customer, repayments } = loan;

    const totalPaid = repayments.reduce((sum: number, r: any) => sum + Number(r.paidAmount ?? 0), 0);
    const remainingBalance = loan.totalRepayment - totalPaid;
    const progressPercent = Math.round((totalPaid / loan.totalRepayment) * 100);

    return (
        <div className="space-y-8 pb-10">
            {/* Navigation & Status Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-6">
                    <Link href="/loans" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Loans
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-primary/10 rounded-3xl">
                            <Shield className="w-10 h-10 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-foreground tracking-tight">Loan Management</h1>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{loan.description}</span>
                                <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                                <span className="text-muted-foreground text-xs font-bold font-mono">#{loan.id.slice(-8)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-2xl border shadow-sm ${loan.status === "ACTIVE"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : (loan.status === "COMPLETED" ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-destructive/10 text-destructive border-destructive/20")
                        }`}>
                        Status: {loan.status}
                    </span>
                </div>
            </div>

            {/* Progress Card */}
            <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-card to-muted/30">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-end">
                            <h3 className="text-2xl font-black text-foreground tracking-tight">Repayment Progress</h3>
                            <span className="text-4xl font-black text-primary font-mono">{progressPercent}%</span>
                        </div>
                        <div className="w-full h-4 bg-muted rounded-full overflow-hidden shadow-inner">
                            <div
                                className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground/70">
                            <span>Initial Principal</span>
                            <span>Remaining Balance</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-8 py-6 bg-green-500/10 rounded-3xl border border-green-500/10 text-center shadow-premium">
                            <p className="text-[10px] font-black uppercase text-green-600 tracking-widest leading-none mb-2">Total Paid</p>
                            <p className="text-3xl font-black text-green-600 font-mono leading-none">{formatCurrency(totalPaid)}</p>
                        </div>
                        <div className="px-8 py-6 bg-destructive/10 rounded-3xl border border-destructive/10 text-center shadow-premium">
                            <p className="text-[10px] font-black uppercase text-destructive tracking-widest leading-none mb-2">Balance</p>
                            <p className="text-3xl font-black text-destructive font-mono leading-none">{formatCurrency(remainingBalance)}</p>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Customer Snapshot */}
                <Card title="Customer Snapshot" icon={User}>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center font-black text-sm text-muted-foreground">
                                {customer.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h4 className="font-black text-lg text-foreground leading-none">{customer.name}</h4>
                                <Link href={`/customers/${customer.id}`} className="text-xs font-bold text-primary hover:underline mt-1 block tracking-tight">
                                    View Detailed Profile &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-2 border-t border-border/50">
                            <div>
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-2">Phone</p>
                                <p className="text-sm font-bold text-foreground">{customer.phone}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-2">Address</p>
                                <p className="text-sm font-bold text-foreground max-w-[200px] truncate">{customer.address || "N/A"}</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Financial Engineering */}
                <Card title="Loan Summary" icon={TrendingUp}>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-2">Principal</p>
                            <p className="text-xl font-black text-foreground">{formatCurrency(loan.loanAmount)}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-2">Interest</p>
                            <p className="text-xl font-black text-foreground">{formatCurrency(loan.interest)}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-primary tracking-widest leading-none mb-2">Total Expected</p>
                            <p className="text-xl font-black text-primary">{formatCurrency(loan.totalRepayment)}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-2">Weekly EMI</p>
                            <p className="text-xl font-black text-foreground">{formatCurrency(loan.weeklyInstallment)}</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Repayment Schedule */}
            <div className="space-y-6 pt-4">
                <div className="flex items-center justify-between px-2">
                    <h2 className="text-2xl font-black text-foreground tracking-tight">Repayment Schedule</h2>
                    <span className="px-3 py-1 bg-muted rounded-xl text-[10px] font-black uppercase tracking-widest text-muted-foreground border">
                        {loan.durationWeeks} Weeks Term
                    </span>
                </div>
                <Table
                    headers={["Period", "Installment", "Paid Amount", "Remaining", "Status", "Action"]}
                    data={repayments}
                    renderRow={(r: any) => {
                        const installment = Number(r.amount ?? 0);
                        const paid = Number(r.paidAmount ?? 0);
                        const remaining = Math.max(0, installment - paid);
                        const isPaid = r.paid;

                        return (
                            <tr key={r.id} className={`hover:bg-muted/50 transition-colors group ${isPaid ? 'opacity-60' : ''}`}>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="font-black text-foreground">Week {r.weekNumber}</span>
                                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Installment</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="text-base font-black text-foreground tracking-tight">{formatCurrency(installment)}</span>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`text-base font-black tracking-tight ${paid > 0 ? 'text-green-600' : 'text-muted-foreground'}`}>
                                        {formatCurrency(paid)}
                                    </span>
                                </td>
                                <td className="px-8 py-6 font-black text-destructive tracking-tight">
                                    {remaining > 0 ? formatCurrency(remaining) : "-"}
                                </td>
                                <td className="px-8 py-6">
                                    {isPaid ? (
                                        <div className="flex items-center gap-2 text-green-600 font-black text-[10px] uppercase tracking-widest bg-green-500/10 px-3 py-1.5 rounded-xl border border-green-500/20 w-fit">
                                            <CheckCircle2 className="w-3 h-3" />
                                            Fully Paid
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 w-fit">
                                            <Clock className="w-3 h-3" />
                                            Pending
                                        </div>
                                    )}
                                </td>
                                <td className="px-8 py-6">
                                    {!isPaid && (
                                        <form action={markRepaymentPaid.bind(null, r.id)}>
                                            <Button variant="secondary" size="sm" className="rounded-xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                                Mark as Paid
                                            </Button>
                                        </form>
                                    )}
                                </td>
                            </tr>
                        );
                    }}
                />
            </div>
        </div>
    );
}
