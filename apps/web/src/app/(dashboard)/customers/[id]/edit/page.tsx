import { db } from "@/lib/db";
import { Card } from "@repo/ui";
import { notFound } from "next/navigation";
import { CustomerForm } from "@/components/customers/CustomerForm";

export default async function EditCustomerPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const customer = await db.customer.findUnique({
        where: { id }
    });

    if (!customer) {
        notFound();
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Customer</h1>

            <Card className="p-6">
                <CustomerForm customer={customer} />
            </Card>
        </div>
    );
}
