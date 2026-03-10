import { db } from "@/lib/db";
import { Table, Button } from "@repo/ui";
import Link from "next/link";
import { formatCurrency, formatDate } from "@repo/utils";

export default async function LoansPage() {
    const loans = await db.loan.findMany({
        orderBy: { createdAt: "desc" },
        include: { customer: true }
    });

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            ACTIVE: "bg-green-100 text-green-700",
            COMPLETED: "bg-gray-100 text-gray-700",
            OVERDUE: "bg-red-100 text-red-700",
        };
        return (
            <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${styles[status] || ""}`}>
                {status}
            </span>
        );
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Loans</h1>
                <Link href="/loans/new">
                    <Button>+ Issue Loan</Button>
                </Link>
            </div>

            <Table
                headers={["Customer", "Given Amount", "Expected Repayment", "Start Date", "Status", "Actions"]}
                data={loans}
                renderRow={(loan) => (
                    <tr key={loan.id} className="hover:bg-gray-50/40 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{loan.customer.name}</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">{formatCurrency(loan.loanAmount)}</td>
                        <td className="px-6 py-4 text-gray-600 font-semibold">{formatCurrency(loan.totalRepayment)}</td>
                        <td className="px-6 py-4 text-gray-500">{formatDate(loan.startDate)}</td>
                        <td className="px-6 py-4">{getStatusBadge(loan.status)}</td>
                        <td className="px-6 py-4">
                            <Link href={`/loans/${loan.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                                View Details &rarr;
                            </Link>
                        </td>
                    </tr>
                )}
            />
        </div>
    );
}
