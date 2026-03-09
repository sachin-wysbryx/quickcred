import { db } from "@/lib/db";
import { Table, Button } from "@repo/ui";
import { formatCurrency, formatDate } from "@repo/utils";
import { markRepaymentPaid } from "@/lib/actions/repayment";

export default async function RepaymentsPage() {
    const repayments = await db.repayment.findMany({
        orderBy: [{ loanId: "desc" }, { weekNumber: "asc" }],
        include: { loan: { include: { customer: true } } }
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pending Repayments</h1>
            </div>

            <Table
                headers={["Customer", "Loan ID", "Week", "Due Amount", "Status", "Action"]}
                data={repayments}
                renderRow={(r) => (
                    <>
                        <td className="px-6 py-4 font-medium text-gray-900">{r.loan.customer.name}</td>
                        <td className="px-6 py-4 text-xs font-mono text-gray-500">{r.loan.id.slice(-6)}</td>
                        <td className="px-6 py-4 text-gray-600 font-semibold">Week {r.weekNumber}/12</td>
                        <td className="px-6 py-4 text-red-600 font-semibold">{formatCurrency(r.amount)}</td>
                        <td className="px-6 py-4">
                            {r.paid ? (
                                <span className="inline-flex items-center space-x-1 text-green-700 bg-green-100 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                    <span>Paid on {r.paidDate ? formatDate(r.paidDate) : "-"}</span>
                                </span>
                            ) : (
                                <span className="inline-flex items-center text-yellow-700 bg-yellow-100 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                    Pending
                                </span>
                            )}
                        </td>
                        <td className="px-6 py-4 text-right">
                            {!r.paid && (
                                <form action={markRepaymentPaid.bind(null, r.id)}>
                                    <Button variant="secondary" className="text-sm shadow-sm">Mark Paid</Button>
                                </form>
                            )}
                        </td>
                    </>
                )}
            />
        </div>
    );
}
