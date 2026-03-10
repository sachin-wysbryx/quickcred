import { db } from "@/lib/db";
import { Table, Card } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import {
    BarChart3,
    TrendingUp,
    CheckCircle2,
    Users,
    IndianRupee,
    ArrowUpRight,
    Search,
    ChevronRight,
    LineChart as LineChartIcon
} from "lucide-react";

export default async function ReportsPage() {
    const closedLoans = await db.loan.findMany({
        where: {
            status: "COMPLETED"
        },
        include: {
            customer: true,
            repayments: true
        }
    });

    const reportData = closedLoans.map(loan => {
        const totalRepaid = loan.repayments
            .reduce((sum, r) => sum + Number(r.paidAmount ?? 0), 0);

        const profit = loan.totalRepayment - loan.amountGiven;

        return {
            id: loan.id,
            customerName: loan.customer.name,
            phone: loan.customer.phone,
            loanAmount: loan.loanAmount,
            totalRepaid: totalRepaid,
            profit: profit
        };
    });

    const totals = reportData.reduce((acc, current) => ({
        profit: acc.profit + current.profit,
        totalLent: acc.totalLent + current.loanAmount,
        loansCount: acc.loansCount + 1
    }), { profit: 0, totalLent: 0, loansCount: 0 });

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-foreground tracking-tight">Portfolio Analytics</h1>
                    <p className="text-muted-foreground font-medium mt-1">Lifecycle performance and interest revenue tracking</p>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-2xl border border-primary/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Data</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card title="Net Profit Generated" icon={TrendingUp}>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-4xl font-black text-green-600 tracking-tighter">{formatCurrency(totals.profit)}</span>
                            <div className="flex items-center gap-1 mt-1">
                                <ArrowUpRight className="w-3 h-3 text-green-600" />
                                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">+12.5%</span>
                            </div>
                        </div>
                        <div className="p-3 bg-green-500/10 rounded-2xl">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </Card>

                <Card title="Loans Completed" icon={CheckCircle2}>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-4xl font-black text-primary tracking-tighter">{totals.loansCount}</span>
                            <div className="flex items-center gap-1 mt-1">
                                <ArrowUpRight className="w-3 h-3 text-primary" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">+8.2%</span>
                            </div>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-2xl">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                </Card>

                <Card title="Volume Disbursed" icon={BarChart3} className="md:hidden lg:block">
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-black text-foreground tracking-tighter">{formatCurrency(totals.totalLent)}</span>
                        <div className="p-3 bg-muted rounded-2xl border border-border/50">
                            <IndianRupee className="w-6 h-6 text-muted-foreground" />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Mock Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-[#1A1A1E] border-none shadow-2xl relative overflow-hidden group h-[240px]">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-white font-black tracking-tight">Loan Profit</h3>
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Monthly Yield</p>
                        </div>
                        <LineChartIcon className="text-primary w-5 h-5" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-32 px-4 pb-4">
                        <div className="w-full h-full flex items-end justify-between gap-1">
                            {[40, 60, 45, 80, 55, 90, 70, 100].map((h, i) => (
                                <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-t-lg transition-all duration-500 group-hover:opacity-80"
                                />
                            ))}
                        </div>
                    </div>
                </Card>

                <Card className="bg-[#1A1A1E] border-none shadow-2xl relative overflow-hidden group h-[240px]">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-white font-black tracking-tight">Repayment Trend</h3>
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Collection Flux</p>
                        </div>
                        <BarChart3 className="text-purple-500 w-5 h-5" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-32 px-2 pb-2">
                        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,10"
                                fill="none"
                                stroke="#8b5cf6"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <path
                                d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,10 V100 H0 Z"
                                fill="url(#gradient)"
                            />
                        </svg>
                    </div>
                </Card>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                    <h2 className="text-2xl font-black text-foreground tracking-tight">Profit Earned by Customer</h2>
                    <span className="px-3 py-1 bg-muted rounded-xl text-[10px] font-black uppercase tracking-widest text-muted-foreground border border-border/50">
                        {reportData.length} Closures
                    </span>
                </div>

                <div className="bg-card rounded-[40px] border border-border shadow-premium overflow-hidden">
                    {reportData.length > 0 ? (
                        <div className="divide-y divide-border/50">
                            {reportData.map((row) => (
                                <div key={row.id} className="flex items-center justify-between px-8 py-6 hover:bg-muted/30 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-muted/80 flex items-center justify-center font-black text-sm text-primary shadow-inner">
                                            {row.customerName.split(' ').map((n: string) => n[0]).join('')}
                                        </div>
                                        <div>
                                            <span className="block font-black text-foreground text-lg tracking-tight leading-none mb-1">{row.customerName}</span>
                                            <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{row.phone}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right flex flex-col items-end">
                                            <span className="text-xl font-black text-green-600 tracking-tighter tabular-nums">+{formatCurrency(row.profit)}</span>
                                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Internal Yield</span>
                                        </div>
                                        <div className="p-2 rounded-xl bg-muted group-hover:bg-primary/10 group-hover:text-primary text-muted-foreground transition-all">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 bg-muted/10 border-dashed">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 text-muted-foreground/30">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-foreground tracking-tight">No analytics gathered</h4>
                            <p className="text-sm text-muted-foreground font-medium mt-1 text-center max-w-sm">Complete loan agreements to see detailed financial breakdowns here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
