import { db } from "@/lib/db";
import { Table, Button } from "@repo/ui";
import { formatCurrency, formatDate } from "@repo/utils";
import { markRepaymentPaid } from "@/lib/actions/repayments/markPaid";
import { CustomerFilter } from "@/components/repayments/CustomerFilter";
import { CustomPaymentButton } from "@/components/repayments/CustomPaymentButton";

interface RepaymentsPageProps {
    searchParams: Promise<{
        customerId?: string;
    }>;
}

export default async function RepaymentsPage({ searchParams }: RepaymentsPageProps) {
    const { customerId } = await searchParams;

    const [repayments, customers] = await Promise.all([
        db.repayment.findMany({
            where: customerId ? {
                loan: {
                    customerId: customerId
                }
            } : {},
            orderBy: { weekNumber: "asc" },
            include: {
                loan: {
                    include: {
                        customer: true,
                        repayments: true // Include all repayments for balance calculation
                    }
                }
            }
        }),
        db.customer.findMany({
            orderBy: { name: 'asc' },
            select: { id: true, name: true }
        })
    ]);

    return (
        <div>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pending Repayments</h1>
                    <p className="text-gray-500 mt-1">Manage and track weekly loan collections</p>
                </div>
            </div>

            <CustomerFilter customers={customers} />

            <Table
                headers={["Customer", "Loan ID", "Week", "Installment", "Paid", "Remaining", "Status", "Action"]}
                data={repayments}
                renderRow={(r) => {
                    const installment = Number(r.amount ?? 0);
                    const paid = Number(r.paidAmount ?? 0);
                    const remaining = installment - paid;

                    const status = paid >= installment ? "PAID" : (paid > 0 ? "PARTIAL" : "PENDING");
                    const statusColor = status === "PAID"
                        ? "text-green-700 bg-green-100"
                        : (status === "PARTIAL" ? "text-blue-700 bg-blue-100" : "text-yellow-700 bg-yellow-100");

                    // Calculate loan wide balances
                    const allLoanRepayments = r.loan.repayments;
                    const totalRepayment = Number(r.loan.totalRepayment ?? 0); // Ensure safe conversion
                    const totalPaidSoFar = allLoanRepayments.reduce((sum: number, rep: any) => sum + Number(rep.paidAmount ?? 0), 0);
                    const remainingLoanBalance = totalRepayment - totalPaidSoFar;

                    return (
                        <>
                            <td className="px-6 py-4 font-medium text-gray-900">{r.loan.customer.name}</td>
                            <td className="px-6 py-4 text-xs font-mono text-gray-500">{r.loan.id.slice(-6)}</td>
                            <td className="px-6 py-4 text-gray-600 font-semibold">Week {r.weekNumber}/12</td>
                            <td className="px-6 py-4 text-gray-900">{formatCurrency(installment)}</td>
                            <td className="px-6 py-4 text-green-600 font-semibold">{formatCurrency(paid)}</td>
                            <td className="px-6 py-4 text-red-600 font-semibold">{formatCurrency(remaining)}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${statusColor}`}>
                                    {status}
                                </span>
                                {r.paid && r.paidDate && (
                                    <div className="text-[10px] text-gray-500 mt-1">
                                        On {formatDate(r.paidDate)}
                                    </div>
                                )}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end space-x-2">
                                    {!r.paid && (
                                        <>
                                            <form action={markRepaymentPaid.bind(null, r.id)}>
                                                <Button variant="secondary" className="text-sm shadow-sm">Mark Paid</Button>
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
                                </div>
                            </td>
                        </>
                    );
                }}
            />
        </div>
    );
}
