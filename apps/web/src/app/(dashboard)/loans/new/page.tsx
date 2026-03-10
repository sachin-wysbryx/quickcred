import { db } from "@/lib/db";
import { Card, Button } from "@repo/ui";
import Link from "next/link";
import { createLoan } from "@/lib/actions/loan";

export default async function NewLoanPage({ searchParams }: { searchParams: Promise<{ customerId?: string }> }) {
    const { customerId: preselectedId } = await searchParams;
    const customers = await db.customer.findMany({
        where: { isActive: true },
        select: { id: true, name: true }
    });

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
                <Link href={preselectedId ? `/customers/${preselectedId}` : "/loans"} className="text-gray-500 hover:text-gray-800">
                    &larr; Back
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Issue New Loan</h1>
            </div>

            <Card className="p-2">
                <form action={createLoan} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Select Customer</label>
                            <select
                                name="customerId"
                                required
                                defaultValue={preselectedId || ""}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white font-semibold text-gray-900"
                            >
                                <option value="">-- Choose Customer --</option>
                                {customers.map(c => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Loan Description (Optional)</label>
                            <input
                                name="description"
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-semibold"
                                placeholder="e.g. Bike Loan, Emergency Fund..."
                            />
                            <p className="mt-1 text-[10px] text-gray-400 font-medium italic">If empty, will be auto-named (e.g. Loan 1)</p>
                        </div>

                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Loan Amount (Principal)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">₹</span>
                                <input
                                    name="loanAmount"
                                    type="number"
                                    step="any"
                                    required
                                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-bold text-gray-900"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Interest Rate (%)</label>
                            <div className="relative">
                                <input
                                    name="interest"
                                    type="number"
                                    step="any"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-bold text-gray-900"
                                    placeholder="5"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">%</span>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Start Date</label>
                            <input
                                name="startDate"
                                type="date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-semibold"
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
