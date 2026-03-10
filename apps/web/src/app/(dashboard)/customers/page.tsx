import { db } from "@/lib/db";
import { Table, Button } from "@repo/ui";
import Link from "next/link";
import { formatDate } from "@repo/utils";
import { CustomerStatusButton } from "@/components/customers/CustomerStatusButton";
import { CustomerStatusFilter } from "@/components/customers/CustomerStatusFilter";

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

    const customersWithActiveCount = customers.map(c => ({
        ...c,
        activeLoans: c.loans.filter(l => l.status === "ACTIVE" || l.status === "OVERDUE").length
    }));

    return (
        <div>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Customers</h1>
                    <p className="text-gray-500 mt-1">Manage and view your customer directory</p>
                </div>
                <div className="flex flex-col items-end space-y-4">
                    <Link href="/customers/new">
                        <Button>+ New Customer</Button>
                    </Link>
                </div>
            </div>

            <div className="mb-6">
                <CustomerStatusFilter />
            </div>

            <Table
                headers={["Name", "Phone", "Address", "Total Loans", "Active Loans", "Status", "Actions"]}
                data={customersWithActiveCount}
                renderRow={(c) => (
                    <tr key={c.id} className={`${!c.isActive ? "bg-gray-50 opacity-60 italic" : ""} hover:bg-gray-50/40 transition-colors`}>
                        <td className={`px-6 py-4 font-medium ${c.isActive ? "text-gray-900" : "text-gray-500"}`}>{c.name}</td>
                        <td className="px-6 py-4 text-gray-600">{c.phone}</td>
                        <td className="px-6 py-4 text-gray-600 truncate max-w-xs">{c.address || "-"}</td>
                        <td className="px-6 py-4 text-gray-600 font-semibold">{c._count.loans}</td>
                        <td className="px-6 py-4">
                            <span className={c.activeLoans > 0 ? "text-indigo-600 font-bold" : "text-gray-400"}>
                                {c.activeLoans}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-[10px] font-black uppercase rounded shadow-sm ${c.isActive ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                                }`}>
                                {c.isActive ? "ACTIVE" : "INACTIVE"}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex justify-end space-x-2">
                                <Link href={`/customers/${c.id}`}>
                                    <Button variant="secondary" className="text-sm">View Details</Button>
                                </Link>
                                <CustomerStatusButton id={c.id} isActive={c.isActive} />
                            </div>
                        </td>
                    </tr>
                )}
            />
        </div>
    );
}

