import { db } from "@/lib/db";
import { Card, Table } from "@repo/ui";
import { formatCurrency, formatDate } from "@repo/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { markRepaymentPaid } from "@/lib/actions/repayments/markPaid";
import { Button } from "@repo/ui";

export default async function LoanDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: loanId } = await params;

    const loan = await db.loan.findUnique({
        where: { id: loanId },
        include: {
            customer: true,
            repayments: {
                orderBy: { weekNumber: "asc" }
            }
        }
    });

    if (!loan) {
        notFound();
    }

    const { customer, repayments } = loan;

    const totalPaid = repayments.reduce((sum, r) => sum + Number(r.paidAmount ?? 0), 0);
    const remainingBalance = loan.totalRepayment - totalPaid;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                    <Link href="/loans" className="text-gray-500 hover:text-gray-800">
                        &larr; Back
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Loan Details</h1>
                </div>
                <div>
                    <span className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full bg-blue-100 text-blue-700">
                        {loan.status}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card title="Customer Info" icon={() => <span>👤</span>}>
                    <div className="space-y-4">
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Name</span>
                            <span className="block text-lg font-semibold text-gray-900">{customer.name}</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Phone</span>
                            <span className="block text-gray-800">{customer.phone}</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Address</span>
                            <span className="block text-gray-800">{customer.address || "N/A"}</span>
                        </div>
                    </div>
                </Card>

                <Card title="Loan Summary" icon={() => <span>💰</span>}>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider">Principal</span>
                            <span className="block text-lg font-bold text-gray-900">{formatCurrency(loan.loanAmount)}</span>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider">Interest</span>
                            <span className="block text-lg font-bold text-gray-900">{formatCurrency(loan.interest)}</span>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider text-indigo-500 text-opacity-80">Total Expected</span>
                            <span className="block text-lg font-bold text-indigo-600">{formatCurrency(loan.totalRepayment)}</span>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider">Weekly Installment</span>
                            <span className="block text-lg font-bold text-gray-900">{formatCurrency(loan.weeklyInstallment)}</span>
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg border border-green-100 mt-2">
                            <span className="block text-xs text-green-600 font-bold uppercase tracking-tight">Paid So Far</span>
                            <span className="block text-xl font-black text-green-700">{formatCurrency(totalPaid)}</span>
                        </div>

                        <div className="bg-red-50 p-3 rounded-lg border border-red-100 mt-2">
                            <span className="block text-xs text-red-500 font-bold uppercase tracking-tight">Remaining Balance</span>
                            <span className="block text-xl font-black text-red-700">{formatCurrency(remainingBalance)}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center text-sm border-t border-gray-100 pt-4">
                        <span className="text-gray-500 font-medium">Agreement Start Date</span>
                        <span className="font-semibold text-gray-900">{formatDate(loan.startDate)}</span>
                    </div>
                </Card>
            </div>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Repayment Schedule</h2>
            </div>
            <Table
                headers={["Week Number", "Installment", "Paid", "Remaining", "Status", "Action"]}
                data={repayments}
                renderRow={(r) => {
                    const installment = Number(r.amount ?? 0);
                    const paid = Number(r.paidAmount ?? 0);
                    const remaining = installment - paid;

                    const status = paid >= installment ? "PAID" : (paid > 0 ? "PARTIAL" : "PENDING");
                    const statusColor = status === "PAID"
                        ? "text-green-700 bg-green-100"
                        : (status === "PARTIAL" ? "text-blue-700 bg-blue-100" : "text-yellow-700 bg-yellow-100");

                    return (
                        <>
                            <td className="px-6 py-4 font-semibold text-gray-900">Week {r.weekNumber} / {loan.durationWeeks}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{formatCurrency(installment)}</td>
                            <td className="px-6 py-4 text-green-600 font-semibold">{formatCurrency(paid)}</td>
                            <td className="px-6 py-4 text-red-600 font-semibold">{formatCurrency(remaining)}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${statusColor}`}>
                                    {status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {!r.paid && (
                                    <form action={markRepaymentPaid.bind(null, r.id)}>
                                        <Button variant="secondary" className="py-1 px-3 text-sm">Mark as Paid</Button>
                                    </form>
                                )}
                            </td>
                        </>
                    );
                }}
            />
        </div>
    );
}
