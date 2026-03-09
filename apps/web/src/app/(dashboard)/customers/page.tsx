import { db } from "@/lib/db";
import { Table, Button } from "@repo/ui";
import Link from "next/link";
import { formatDate } from "@repo/utils";

export default async function CustomersPage() {
    const customers = await db.customer.findMany({
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { loans: true } } }
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Customers</h1>
                <Link href="/customers/new">
                    <Button>+ New Customer</Button>
                </Link>
            </div>

            <Table
                headers={["Name", "Phone", "Address", "Total Loans", "Joined"]}
                data={customers}
                renderRow={(c) => (
                    <>
                        <td className="px-6 py-4 font-medium text-gray-900">{c.name}</td>
                        <td className="px-6 py-4 text-gray-600">{c.phone}</td>
                        <td className="px-6 py-4 text-gray-600 truncate max-w-xs">{c.address || "-"}</td>
                        <td className="px-6 py-4 text-gray-600 font-semibold">{c._count.loans}</td>
                        <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{formatDate(c.createdAt)}</td>
                    </>
                )}
            />
        </div>
    );
}
