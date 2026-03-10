import { db } from "@/lib/db";
import { Table, Button, Card } from "@repo/ui";
import Link from "next/link";
import { formatCurrency, formatDate } from "@repo/utils";
import { LoanStatusFilter } from "@/components/loans/LoanStatusFilter";
import { ResetFiltersButton } from "@/components/loans/ResetFiltersButton";
import {
    Plus,
    Phone,
    ChevronRight,
    Calendar,
    CreditCard,
    BadgeCheck,
    AlertCircle,
    ArrowRight,
    Search
} from "lucide-react";

interface LoansPageProps {
    searchParams: Promise<{
        status?: string;
        query?: string;
    }>;
}

export default async function LoansPage({ searchParams }: LoansPageProps) {
    const { status, query } = await searchParams;

    const loans = await db.loan.findMany({
        where: {
            AND: [
                status && status !== "ALL" ? { status: status as any } : {},
                query ? {
                    OR: [
                        { customer: { name: { contains: query, mode: 'insensitive' } } },
                        { description: { contains: query, mode: 'insensitive' } }
                    ]
                } : {}
            ]
        },
        orderBy: { createdAt: "desc" },
        include: { customer: true }
    });

    const getStatusStyles = (status: string) => {
        const styles: Record<string, string> = {
            ACTIVE: "bg-primary/10 text-primary border-primary/20",
            COMPLETED: "bg-green-500/10 text-green-600 border-green-500/20",
            OVERDUE: "bg-destructive/10 text-destructive border-destructive/20",
        };
        return styles[status] || "bg-muted text-muted-foreground border-border";
    };

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-foreground tracking-tight">Loan Portfolio</h1>
                    <p className="text-muted-foreground font-medium mt-1">Audit and manage active financing agreements</p>
                </div>
                <Link href="/loans/new">
                    <Button variant="gradient" className="rounded-2xl shadow-lg px-8 py-7 text-xs">
                        <Plus className="w-5 h-5 mr-1" />
                        <span>Issue New Loan</span>
                    </Button>
                </Link>
            </div>

            <div className="bg-card p-6 rounded-3xl border border-border shadow-premium space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <LoanStatusFilter />
                    <div className="relative group flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <form action="/loans" method="GET">
                            <input
                                name="query"
                                defaultValue={query}
                                placeholder="Search borrower or case ID..."
                                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-muted/50 border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:text-muted-foreground/50 text-sm"
                            />
                            {status && <input type="hidden" name="status" value={status} />}
                        </form>
                    </div>
                </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block">
                <Table
                    headers={["Customer", "Details", "Financials", "Timeline", "Status", "Actions"]}
                    data={loans}
                    renderRow={(loan: any) => (
                        <tr key={loan.id} className="hover:bg-muted/50 transition-colors group">
                            <td className="px-8 py-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-black text-xs text-muted-foreground">
                                        {loan.customer.name.split(' ').map((n: string) => n[0]).join('')}
                                    </div>
                                    <span className="font-bold tracking-tight text-foreground">{loan.customer.name}</span>
                                </div>
                            </td>
                            <td className="px-8 py-6">
                                <span className="block font-bold text-foreground truncate max-w-[150px]">{loan.description}</span>
                                <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">ID #{loan.id.slice(-6)}</span>
                            </td>
                            <td className="px-8 py-6">
                                <span className="block font-black text-foreground text-lg tracking-tighter">{formatCurrency(loan.loanAmount)}</span>
                                <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Total: {formatCurrency(loan.totalRepayment)}</span>
                            </td>
                            <td className="px-8 py-6">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm font-bold text-foreground">{formatDate(loan.startDate)}</span>
                                </div>
                            </td>
                            <td className="px-8 py-6">
                                <span className={`px-3 py-1.5 text-[10px] font-black uppercase rounded-xl border shadow-sm ${getStatusStyles(loan.status)}`}>
                                    {loan.status}
                                </span>
                            </td>
                            <td className="px-8 py-6 text-right">
                                <div className="flex justify-end gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href={`tel:${loan.customer.phone}`}
                                        className="p-2.5 text-green-600 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition-all border border-green-500/10"
                                    >
                                        <Phone className="w-4 h-4" />
                                    </a>
                                    <Link href={`/loans/${loan.id}`}>
                                        <Button variant="secondary" size="sm" className="rounded-xl px-4 font-black text-[10px] uppercase tracking-widest">
                                            Manage
                                        </Button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )}
                />
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {loans.map((loan: any) => (
                    <Card key={loan.id} className="relative overflow-hidden">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center font-black text-sm text-muted-foreground shadow-inner">
                                    {loan.customer.name.split(' ').map((n: string) => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-black text-lg tracking-tight leading-none mb-1">{loan.customer.name}</h4>
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{loan.description}</p>
                                </div>
                            </div>
                            <span className={`px-2.5 py-1 text-[8px] font-black uppercase rounded-lg border shadow-sm ${getStatusStyles(loan.status)}`}>
                                {loan.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 bg-muted/30 p-4 rounded-2xl border border-border/50">
                            <div>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Repayment Sum</p>
                                <p className="text-xl font-black text-foreground tracking-tighter tabular-nums">
                                    {formatCurrency(loan.totalRepayment)}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Initial Amt</p>
                                <p className="text-base font-bold text-foreground opacity-60 tabular-nums">
                                    {formatCurrency(loan.loanAmount)}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href={`tel:${loan.customer.phone}`}
                                className="flex-1 flex items-center justify-center gap-2 py-4 text-green-600 bg-green-500/10 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border border-green-500/10"
                            >
                                <Phone className="w-4 h-4" />
                                Call
                            </a>
                            <Link href={`/loans/${loan.id}`} className="flex-[2]">
                                <Button variant="gradient" className="w-full py-7 rounded-2xl text-[10px] font-black uppercase tracking-widest group">
                                    <span>Audit Case</span>
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>

            {loans.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center">
                        <Search className="w-10 h-10 text-muted-foreground/30" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-foreground tracking-tight">No loans found</h3>
                        <p className="text-muted-foreground font-medium max-w-xs mx-auto">Try adjusting your search query or status filter to find what you're looking for.</p>
                    </div>
                    <ResetFiltersButton />
                </div>
            )}
        </div>
    );
}
