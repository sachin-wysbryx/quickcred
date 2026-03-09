import { db } from "@/lib/db";
import { Card, Button } from "@repo/ui";
import Link from "next/link";
import { createLoan } from "@/lib/actions/loan";

export default async function NewLoanPage() {
    const customers = await db.customer.findMany({ select: { id: true, name: true } });

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
                <Link href="/loans" className="text-gray-500 hover:text-gray-800">
                    &larr; Back
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Issue New Loan</h1>
            </div>

            <Card className="p-2">
                <form action={createLoan} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Customer</label>
                            <select
                                name="customerId"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white"
                            >
                                <option value="">-- Choose Customer --</option>
                                {customers.map(c => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (Principal)</label>
                            <input
                                name="loanAmount"
                                type="number"
                                step="any"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                placeholder="e.g. 50000"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                            <input
                                name="interest"
                                type="number"
                                step="any"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                placeholder="e.g. 5"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                            <input
                                name="startDate"
                                type="date"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50/50 rounded-lg text-sm text-blue-800 border border-blue-100 mb-6">
                        <strong>Note:</strong> Creating this loan will automatically generate a 12-week repayment schedule.
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end space-x-4">
                        <Link href="/loans">
                            <Button variant="ghost" type="button">Cancel</Button>
                        </Link>
                        <Button type="submit">Complete & Issue Loan</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
