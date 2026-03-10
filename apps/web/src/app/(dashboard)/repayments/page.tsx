import { db } from "@/lib/db";
import { Customer, Loan, Repayment } from "@repo/db";
import { Table, Button, Card } from "@repo/ui";
import Link from "next/link";
import { formatCurrency, formatDate } from "@repo/utils";
import { markRepaymentPaid } from "@/lib/actions/repayments/markPaid";
import { CustomerFilter } from "@/components/repayments/CustomerFilter";
import { CustomPaymentButton } from "@/components/repayments/CustomPaymentButton";
import { RepaymentStatusFilter } from "@/components/repayments/RepaymentStatusFilter";
import {
    Phone,
    CheckCircle2,
    Clock,
    Wallet,
    History,
    Search,
    ChevronRight,
    User,
    AlertCircle,
    CalendarDays
} from "lucide-react";

interface RepaymentsPageProps {
    searchParams: Promise<{
        customerId?: string;
        status?: string;
    }>;
}

export default async function RepaymentsPage({ searchParams }: RepaymentsPageProps) {
    const { customerId, status } = await searchParams;

    const [allRepayments, customers] = await Promise.all([
        db.repayment.findMany({
            where: customerId ? {
                loan: {
                    customerId: customerId
                }
            } : {},
            orderBy: [{ weekNumber: "asc" }],
            include: {
                loan: {
                    include: {
                        customer: true,
                        repayments: true
                    }
                }
            }
        }),
        db.customer.findMany({
            orderBy: { name: 'asc' },
            select: { id: true, name: true }
        })
    ]);

    const now = new Date();

    const repaymentsWithStatus = allRepayments.map((r: Repayment & { loan: Loan & { customer: Customer, repayments: Repayment[] } }) => {
        const dueDate = new Date(r.loan.startDate);
        dueDate.setDate(dueDate.getDate() + (r.weekNumber * 7));

        const isOverdue = !r.paid && dueDate < now;
        const daysDiff = Math.floor((now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));

        return {
            ...r,
            dueDate,
            isOverdue,
            daysDiff: Math.abs(daysDiff)
        };
    });

    const filteredRepayments = repaymentsWithStatus.filter((r: Repayment & { loan: Loan & { customer: Customer, repayments: Repayment[] }, dueDate: Date, isOverdue: boolean, daysDiff: number }) => {
        if (status === "OVERDUE") return r.isOverdue;
        if (status === "COLLECTED") return r.paid;
        if (status === "ALL" || !status) return !r.paid; // Default to showing pending queue
        return true;
    });

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-foreground tracking-tight">Collection Queue</h1>
                    <p className="text-muted-foreground font-medium mt-1">Real-time recovery and weekly repayment tracking</p>
                </div>
                <div className="flex items-center gap-3 bg-card px-5 py-3 rounded-2xl border border-border shadow-soft">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Today: {formatDate(now)}</span>
                </div>
            </div>

            <div className="bg-card p-6 rounded-3xl border border-border shadow-premium flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-1 w-full flex flex-col md:flex-row gap-6">
                    <RepaymentStatusFilter />
                    <div className="flex-1">
                        <CustomerFilter customers={customers} />
                    </div>
                </div>
            </div>

            {/* Desktop and Mobile use Card Based Layout for Repayments as per Stitch design */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRepayments.map((r: Repayment & { loan: Loan & { customer: Customer, repayments: Repayment[] }, dueDate: Date, isOverdue: boolean, daysDiff: number }) => {
                    const installment = Number(r.amount ?? 0);
                    const isPaid = r.paid;
                    const allLoanRepayments = r.loan.repayments;
                    const totalRepayment = Number(r.loan.totalRepayment ?? 0);
                    const totalPaidSoFar = allLoanRepayments.reduce((sum: number, rep: Repayment) => sum + Number(rep.paidAmount ?? 0), 0);
                    const remainingLoanBalance = totalRepayment - totalPaidSoFar;

                    return (
                        <Card key={r.id} className={`relative overflow-hidden group transition-all hover:scale-[1.01] ${isPaid ? 'opacity-80' : ''}`}>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    {r.isOverdue ? (
                                        <div className="flex items-center gap-1.5 text-destructive animate-pulse">
                                            <AlertCircle className="w-3 h-3" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Overdue ({r.daysDiff} days)</span>
                                        </div>
                                    ) : isPaid ? (
                                        <div className="flex items-center gap-1.5 text-green-600">
                                            <CheckCircle2 className="w-3 h-3" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Collected</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-primary">
                                            <Clock className="w-3 h-3" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Upcoming (Due in {r.daysDiff} days)</span>
                                        </div>
                                    )}
                                </div>
                                <span className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest">#W{r.weekNumber}</span>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center font-black text-lg text-primary shadow-inner">
                                    {r.loan.customer.name.split(' ').map((n: string) => n[0]).join('')}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-black text-xl tracking-tight text-foreground truncate">{r.loan.customer.name}</h3>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">
                                        <span>Week {r.weekNumber} / 12</span>
                                        <span>•</span>
                                        <span>{formatCurrency(installment)}</span>
                                    </div>
                                </div>
                                <a
                                    href={`tel:${r.loan.customer.phone}`}
                                    className="p-4 text-white bg-green-500 rounded-2xl hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 active:scale-95 flex items-center gap-2 group/btn"
                                >
                                    <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                                    <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Call</span>
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Remaining Balance</span>
                                    <span className="text-lg font-black text-foreground tracking-tighter tabular-nums">{formatCurrency(remainingLoanBalance)}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    {!isPaid && (
                                        <>
                                            <form action={markRepaymentPaid.bind(null, r.id)}>
                                                <Button size="sm" className="rounded-xl font-black text-[10px] uppercase tracking-widest bg-muted text-foreground hover:bg-primary hover:text-white transition-all">
                                                    Settle
                                                </Button>
                                            </form>
                                            <CustomPaymentButton
                                                loanId={r.loanId}
                                                customerName={r.loan.customer.name}
                                                totalRepayment={totalRepayment}
                                                totalPaid={totalPaidSoFar}
                                                remainingBalance={remainingLoanBalance}
                                            />
                                        </>
                                    )}
                                    <Link href={`/loans/${r.loanId}`}>
                                        <div className="p-2 rounded-xl bg-muted text-muted-foreground hover:text-primary transition-colors">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {filteredRepayments.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                    <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-12 h-12 text-muted-foreground/30" />
                    </div>
                    <h3 className="text-2xl font-black text-foreground tracking-tight">Queue Clear!</h3>
                    <p className="text-muted-foreground font-medium max-w-sm mx-auto mt-2">No pending repayments found for the selected filter. Great work on collections!</p>
                </div>
            )}
        </div>
    );
}
