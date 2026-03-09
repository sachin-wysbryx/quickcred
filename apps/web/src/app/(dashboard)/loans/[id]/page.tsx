import { db } from "@/lib/db";
import { Card, Table } from "@repo/ui";
import { formatCurrency, formatDate } from "@repo/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { markRepaymentPaid } from "@/lib/actions/repayment";
import { Button } from "@repo/ui";

export default async function LoanDetailsPage({ params }: { params: { id: string } }) {
    // Note: in Next.js 15, params might need to be awaited if they are promises, but this is 14/15 depending on config. Let's assume standard app router object for now, or just use it directly. We'll await params just in case it's a promise in the latest Next.js versions.
    const resolvedParams = await Promise.resolve(params);
    const loanId = resolvedParams.id;

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
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Principal</span>
                            <span className="block text-lg font-bold text-gray-900">{formatCurrency(loan.amountGiven)}</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Interest</span>
                            <span className="block text-lg text-gray-800">{formatCurrency(loan.interest)}</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Total expected</span>
                            <span className="block text-xl font-bold text-green-700">{formatCurrency(loan.totalRepayment)}</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Weekly Installment</span>
                            <span className="block text-lg font-semibold text-gray-900">{formatCurrency(loan.weeklyInstallment)}</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-medium">Start Date</span>
                            <span className="block text-gray-800">{formatDate(loan.startDate)}</span>
                        </div>
                    </div>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-4">Repayment Schedule</h2>
            <Table
                headers={["Week Number", "Amount", "Paid Status", "Paid Date", "Action"]}
                data={repayments}
                renderRow={(r) => (
                    <>
                        <td className="px-6 py-4 font-semibold text-gray-900">Week {r.weekNumber} / {loan.durationWeeks}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{formatCurrency(r.amount)}</td>
                        <td className="px-6 py-4">
                            {r.paid ? (
                                <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                                    Paid
                                </span>
                            ) : (
                                <span className="text-yellow-600 font-bold bg-yellow-50 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                                    Pending
                                </span>
                            )}
                        </td>
                        <td className="px-6 py-4 text-gray-500">{r.paidDate ? formatDate(r.paidDate) : "-"}</td>
                        <td className="px-6 py-4">
                            {!r.paid && (
                                <form action={markRepaymentPaid.bind(null, r.id)}>
                                    <Button variant="secondary" className="py-1 px-3 text-sm">Mark as Paid</Button>
                                </form>
                            )}
                        </td>
                    </>
                )}
            />
        </div>
    );
}
