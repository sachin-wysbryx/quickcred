import { db } from "@/lib/db";
import { Card, Table, Button } from "@repo/ui";
import { formatCurrency, formatDate } from "@repo/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomerStatusButton } from "@/components/customers/CustomerStatusButton";
import {
    ChevronLeft,
    Edit3,
    Phone,
    MapPin,
    PieChart,
    CreditCard,
    Calendar,
    ArrowRight,
    Search
} from "lucide-react";

export default async function CustomerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const customer = await db.customer.findUnique({
        where: { id },
        include: {
            loans: {
                orderBy: { createdAt: "desc" },
                include: { repayments: true }
            }
        }
    });

    if (!customer) {
        notFound();
    }

    const loansWithTotals = customer.loans.map(loan => {
        const totalPaid = loan.repayments.reduce((sum, r) => sum + Number(r.paidAmount ?? 0), 0);
        return {
            ...loan,
            totalPaid
        };
    });

    return (
        <div className="space-y-10 pb-10">
            {/* Header / Profile Info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-6">
                    <Link href="/customers" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Customers
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center font-black text-2xl text-primary shadow-inner">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-foreground tracking-tight">{customer.name}</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg border shadow-sm ${customer.isActive
                                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                                        : "bg-destructive/10 text-destructive border-destructive/20"
                                    }`}>
                                    {customer.isActive ? "Active Customer" : "Inactive Customer"}
                                </span>
                                <span className="text-muted-foreground text-xs font-bold">Member since {formatDate(customer.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link href={`/customers/${customer.id}/edit`}>
                        <Button variant="secondary" className="rounded-2xl">
                            <Edit3 className="w-4 h-4 mr-2" />
                            Edit Profile
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <Card title="Customer Information" icon={Phone}>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-muted rounded-2xl">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Direct Phone</p>
                                <p className="text-lg font-bold text-foreground">{customer.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-muted rounded-2xl">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Verified Address</p>
                                <p className="text-sm font-bold text-foreground leading-relaxed">
                                    {customer.address || "No address provided"}
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Account Stats */}
                <Card title="Account Statistics" icon={PieChart}>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="bg-muted px-6 py-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-inner group hover:bg-muted/80 transition-colors">
                            <span className="text-4xl font-black text-primary mb-2 transition-transform group-hover:scale-110">{customer.loans.length}</span>
                            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none">Total Loans</span>
                        </div>
                        <div className="bg-primary px-6 py-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-lg shadow-indigo-500/20 group hover:scale-[1.02] transition-all">
                            <span className="text-4xl font-black text-white mb-2 transition-transform group-hover:scale-110">
                                {customer.loans.filter(l => l.status === "ACTIVE" || l.status === "OVERDUE").length}
                            </span>
                            <span className="text-[10px] font-black uppercase text-white/70 tracking-widest leading-none">Active Loans</span>
                        </div>
                    </div>
                </Card>

                {/* Quick Actions */}
                <Card title="Quick Actions" icon={ArrowRight}>
                    <div className="space-y-4 h-full flex flex-col justify-center">
                        <a
                            href={`tel:${customer.phone}`}
                            className="flex w-full justify-center items-center py-4 bg-green-500/10 text-green-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500/20 transition-all shadow-sm"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Call Customer
                        </a>
                        <Link href={`/loans/new?customerId=${customer.id}`} className="block w-full">
                            <Button variant="gradient" className="w-full justify-center py-4 rounded-2xl">
                                <CreditCard className="w-4 h-4 mr-2" />
                                Create New Loan
                            </Button>
                        </Link>
                        <div className="w-full">
                            <CustomerStatusButton id={customer.id} isActive={customer.isActive} />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Loan History */}
            <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                    <h2 className="text-2xl font-black text-foreground tracking-tight">Loan History</h2>
                    <span className="px-3 py-1 bg-muted rounded-xl text-xs font-black uppercase tracking-widest text-muted-foreground">
                        {customer.loans.length} Records
                    </span>
                </div>

                {customer.loans.length > 0 ? (
                    <Table
                        headers={["Details", "Financials", "Timeline", "Status", "Progress", "Action"]}
                        data={loansWithTotals}
                        renderRow={(loan) => (
                            <tr key={loan.id} className="hover:bg-muted/50 transition-colors group">
                                <td className="px-8 py-6">
                                    <span className="block font-black text-foreground tracking-tight">{loan.description}</span>
                                    <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">ID #{loan.id.slice(-6)}</span>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="block font-black text-foreground tracking-tighter text-lg">{formatCurrency(loan.loanAmount)}</span>
                                    <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Principal</span>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm font-bold text-foreground">{formatDate(loan.startDate)}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`px-2 py-1 text-[9px] font-black uppercase rounded-lg border shadow-sm ${loan.status === "COMPLETED"
                                            ? "bg-muted text-muted-foreground border-border"
                                            : "bg-primary/10 text-primary border-primary/20"
                                        }`}>
                                        {loan.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col min-w-[120px]">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Repaid</span>
                                            <span className="text-[10px] font-black text-green-600">{Math.round((loan.totalPaid / loan.totalRepayment) * 100)}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className="h-full gradient-primary rounded-full transition-all duration-500"
                                                style={{ width: `${Math.min(100, (loan.totalPaid / loan.totalRepayment) * 100)}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground mt-1 font-bold">
                                            {formatCurrency(loan.totalPaid)} / {formatCurrency(loan.totalRepayment)}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <Link href={`/loans/${loan.id}`}>
                                        <Button variant="secondary" size="sm" className="rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    />
                ) : (
                    <Card className="flex flex-col items-center justify-center py-20 bg-muted/30 border-dashed">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                            <Search className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h4 className="text-lg font-black text-foreground tracking-tight">No loans found</h4>
                        <p className="text-sm text-muted-foreground font-medium mt-1">Start a new application to build loan history.</p>
                        <Link href={`/loans/new?customerId=${customer.id}`} className="mt-4">
                            <Button variant="primary" size="sm">Create First Loan</Button>
                        </Link>
                    </Card>
                )}
            </div>
        </div>
    );
}
