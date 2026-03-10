import { db } from "@/lib/db";
import { Card, Table } from "@repo/ui";
import { formatCurrency, formatDate } from "@repo/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CustomerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const customer = await db.customer.findUnique({
        where: { id },
        include: {
            loans: {
                orderBy: { createdAt: "desc" },
                include: { repayments: true }
            }
        }
    });

    if (!customer) {
        notFound();
    }

    const loansWithTotals = customer.loans.map(loan => {
        const totalPaid = loan.repayments.reduce((sum, r) => sum + Number(r.paidAmount ?? 0), 0);
        return {
            ...loan,
            totalPaid
        };
    });

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                    <Link href="/customers" className="text-gray-500 hover:text-gray-800">
                        &larr; Back
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{customer.name}</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <span className={`px-4 py-1 text-xs font-black uppercase tracking-widest rounded-full ${customer.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>
                        {customer.isActive ? "ACTIVE CUSTOMER" : "INACTIVE CUSTOMER"}
                    </span>
                    <Link href={`/customers/${customer.id}/edit`}>
                        <Button variant="secondary" className="text-sm">Edit Profile</Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card title="Contact Information" icon={() => <span>📞</span>}>
                    <div className="space-y-4 pt-2">
                        <div>
                            <span className="block text-[10px] text-gray-400 font-black uppercase tracking-tighter">Phone Number</span>
                            <span className="block text-lg font-bold text-gray-900">{customer.phone}</span>
                        </div>
                        <div>
                            <span className="block text-[10px] text-gray-400 font-black uppercase tracking-tighter">Current Address</span>
                            <span className="block text-gray-700 font-medium">{customer.address || "No address provided"}</span>
                        </div>
                    </div>
                </Card>

                <Card title="Account Stats" icon={() => <span>📊</span>}>
                    <div className="grid grid-cols-2 gap-4 pt-2 text-center">
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="block text-[10px] text-gray-400 font-black uppercase tracking-tighter">Total Loans</span>
                            <span className="block text-2xl font-black text-indigo-600">{customer.loans.length}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="block text-[10px] text-gray-400 font-black uppercase tracking-tighter">Active Loans</span>
                            <span className="block text-2xl font-black text-green-600">
                                {customer.loans.filter(l => l.status === "ACTIVE").length}
                            </span>
                        </div>
                    </div>
                </Card>

                <Card title="Quick Actions" icon={() => <span>⚡</span>}>
                    <div className="space-y-3 pt-2">
                        <Link href={`/loans/new?customerId=${customer.id}`} className="block w-full">
                            <Button className="w-full justify-center py-2.5 bg-indigo-600 hover:bg-indigo-700 shadow-md">
                                + Create New Loan
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-4">Loan History</h2>
            {customer.loans.length > 0 ? (
                <Table
                    headers={["Loan Description", "Principal", "Start Date", "Status", "Total Repaid", "Action"]}
                    data={loansWithTotals}
                    renderRow={(loan) => (
                        <>
                            <td className="px-6 py-4">
                                <span className="block font-bold text-gray-900">{loan.description}</span>
                                <span className="text-[10px] text-gray-400 font-medium">#{loan.id.slice(-6)}</span>
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-900">{formatCurrency(loan.loanAmount)}</td>
                            <td className="px-6 py-4 text-gray-500 font-medium">{formatDate(loan.startDate)}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 text-[10px] font-black uppercase rounded shadow-sm ${loan.status === "COMPLETED" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-700"
                                    }`}>
                                    {loan.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="block font-bold text-green-600">{formatCurrency(loan.totalPaid)}</span>
                                <span className="text-[10px] text-gray-400 font-medium">of {formatCurrency(loan.totalRepayment)}</span>
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/loans/${loan.id}`} className="text-indigo-600 hover:text-indigo-800 font-bold text-sm">
                                    View Details &rarr;
                                </Link>
                            </td>
                        </>
                    )}
                />
            ) : (
                <div className="bg-gray-50 rounded-2xl p-10 border-2 border-dashed border-gray-200 text-center">
                    <p className="text-gray-400 font-medium">No loans found for this customer.</p>
                </div>
            )}
        </div>
    );
}

function Button({ children, variant = "primary", className = "", ...props }: any) {
    const base = "px-4 py-2 rounded-lg font-semibold transition-all shadow-sm";
    const variants: any = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
    };
    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
