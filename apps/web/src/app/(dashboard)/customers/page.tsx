import { db } from "@/lib/db";
import { Table, Button, Card } from "@repo/ui";
import Link from "next/link";
import { CustomerStatusButton } from "@/components/customers/CustomerStatusButton";
import { CustomerStatusFilter } from "@/components/customers/CustomerStatusFilter";
import { Plus, Search, Phone, ChevronRight, UserMinus, UserCheck } from "lucide-react";

interface PageProps {
    searchParams: Promise<{
        status?: string;
    }>;
}

export default async function CustomersPage({ searchParams }: PageProps) {
    const { status = "active" } = await searchParams;

    // Construct where clause
    const where: any = {};
    if (status === "active") where.isActive = true;
    if (status === "inactive") where.isActive = false;

    const customers = await db.customer.findMany({
        where,
        orderBy: { createdAt: "desc" },
        include: {
            loans: {
                select: { status: true }
            },
            _count: { select: { loans: true } }
        }
    });

    const customersWithActiveCount = customers.map((c: any) => ({
        ...c,
        activeLoans: c.loans.filter((l: any) => l.status === "ACTIVE" || l.status === "OVERDUE").length
    }));

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-foreground tracking-tight">Customers</h1>
                    <p className="text-muted-foreground font-medium mt-1">Directory of all registered borrowers</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/customers/new">
                        <Button variant="gradient" className="rounded-2xl shadow-lg">
                            <Plus className="w-5 h-5 mr-1" />
                            <span>Add Customer</span>
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-card p-6 rounded-3xl border border-border shadow-premium">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search by name or phone..."
                        className="w-full pl-12 pr-6 py-3.5 bg-muted/30 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    />
                </div>
                <CustomerStatusFilter />
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block">
                <Table
                    headers={["Name", "Phone", "Address", "Stats", "Status", "Actions"]}
                    data={customersWithActiveCount}
                    renderRow={(c: any) => (
                        <tr key={c.id} className={`${!c.isActive ? "bg-muted/30 opacity-70" : ""} hover:bg-muted/50 transition-colors group`}>
                            <td className="px-8 py-6">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs ${c.isActive ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                        {c.name.split(' ').map((n: string) => n[0]).join('')}
                                    </div>
                                    <span className={`font-bold tracking-tight ${c.isActive ? "text-foreground" : "text-muted-foreground"}`}>{c.name}</span>
                                </div>
                            </td>
                            <td className="px-8 py-6 text-muted-foreground font-medium">{c.phone}</td>
                            <td className="px-8 py-6 text-muted-foreground font-medium truncate max-w-[200px]">{c.address || "-"}</td>
                            <td className="px-8 py-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Active Loans</span>
                                    <span className={`text-sm font-black ${c.activeLoans > 0 ? "text-primary" : "text-muted-foreground"}`}>
                                        {c.activeLoans} of {c._count.loans}
                                    </span>
                                </div>
                            </td>
                            <td className="px-8 py-6">
                                <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg shadow-sm border ${c.isActive
                                    ? "bg-green-500/10 text-green-600 border-green-500/20"
                                    : "bg-muted text-muted-foreground border-border"
                                    }`}>
                                    {c.isActive ? "Active" : "Inactive"}
                                </span>
                            </td>
                            <td className="px-8 py-6 text-right">
                                <div className="flex justify-end gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href={`tel:${c.phone}`}
                                        className="p-2.5 text-green-600 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition-all"
                                        title="Call Customer"
                                    >
                                        <Phone className="w-5 h-5" />
                                    </a>
                                    <Link href={`/customers/${c.id}`}>
                                        <Button variant="secondary" size="sm" className="rounded-xl">
                                            View
                                        </Button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )}
                />
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                {customersWithActiveCount.map((c: any) => (
                    <Card key={c.id} className={`${!c.isActive ? "opacity-70" : ""}`}>
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm ${c.isActive ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                    {c.name.split(' ').map((n: string) => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-black text-lg tracking-tight">{c.name}</h4>
                                    <span className={`px-2 py-0.5 text-[8px] font-black uppercase rounded-md border ${c.isActive
                                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                                        : "bg-muted text-muted-foreground border-border"
                                        }`}>
                                        {c.isActive ? "Active" : "Inactive"}
                                    </span>
                                </div>
                            </div>
                            <a
                                href={`tel:${c.phone}`}
                                className="p-3 text-green-600 bg-green-500/10 rounded-2xl active:scale-95 transition-all shadow-sm shadow-green-500/10"
                            >
                                <Phone className="w-6 h-6" />
                            </a>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Active Loans</p>
                                <p className={`text-lg font-black ${c.activeLoans > 0 ? "text-primary" : "text-muted-foreground"}`}>
                                    {c.activeLoans}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                                <p className="text-sm font-bold text-foreground">
                                    {c.phone}
                                </p>
                            </div>
                        </div>

                        <Link href={`/customers/${c.id}`} className="mt-6 block">
                            <Button variant="secondary" className="w-full rounded-2xl group">
                                <span>View Details</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}

