import { db } from "@/lib/db";
import { Table, Card } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

export default async function ReportsPage() {
    const closedLoans = await db.loan.findMany({
        where: {
            status: "COMPLETED"
        },
        include: {
            customer: true,
            repayments: true
        }
    });

    const reportData = closedLoans.map(loan => {
        const totalRepaid = loan.repayments
            .reduce((sum, r) => sum + Number(r.paidAmount ?? 0), 0);

        const profit = loan.totalRepayment - loan.amountGiven;

        return {
            id: loan.id,
            customerName: loan.customer.name,
            phone: loan.customer.phone,
            loanAmount: loan.loanAmount,
            totalRepaid: totalRepaid,
            profit: profit
        };
    });

    const totals = reportData.reduce((acc, current) => ({
        profit: acc.profit + current.profit,
        loansCount: acc.loansCount + 1
    }), { profit: 0, loansCount: 0 });

    return (
        <div>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Loan Performance Report</h1>
                    <p className="text-gray-500 mt-1">Analytics for all completed loan cycles</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card title="Total Profit Generated">
                    <span className="text-3xl font-bold text-green-600">{formatCurrency(totals.profit)}</span>
                </Card>
                <Card title="Total Loans Closed">
                    <span className="text-3xl font-bold text-indigo-600">{totals.loansCount}</span>
                </Card>
            </div>

            <Table
                headers={["Customer Name", "Phone Number", "Loan Amount", "Total Repaid", "Profit Earned"]}
                data={reportData}
                renderRow={(row) => (
                    <>
                        <td className="px-6 py-4 font-medium text-gray-900">{row.customerName}</td>
                        <td className="px-6 py-4 text-gray-600">{row.phone}</td>
                        <td className="px-6 py-4 text-gray-600 font-semibold">{formatCurrency(row.loanAmount)}</td>
                        <td className="px-6 py-4 text-green-600 font-semibold">{formatCurrency(row.totalRepaid)}</td>
                        <td className="px-6 py-4 text-blue-600 font-bold">{formatCurrency(row.profit)}</td>
                    </>
                )}
            />
        </div>
    );
}
