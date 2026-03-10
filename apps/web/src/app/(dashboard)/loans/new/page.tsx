import { db } from "@/lib/db";
import { NewLoanForm } from "@/components/loans/NewLoanForm";

export default async function NewLoanPage({
    searchParams,
}: {
    searchParams: Promise<{ customerId?: string }>;
}) {
    const { customerId: preselectedId } = await searchParams;
    const customers = await db.customer.findMany({
        where: { isActive: true },
        select: { id: true, name: true },
    });

    return <NewLoanForm customers={customers} preselectedId={preselectedId} />;
}
