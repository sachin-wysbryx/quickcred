"use client";

import { useTransition } from "react";
import { Button } from "@repo/ui";
import { deleteCustomer } from "@/lib/actions/customer";
import { useRouter } from "next/navigation";

export function DeleteCustomerButton({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleDelete = async () => {
        if (confirm("Are you sure you want to deactivate this customer? They will move to the inactive list but their history will be preserved.")) {
            startTransition(async () => {
                try {
                    await deleteCustomer(id);
                    router.refresh();
                } catch (error: any) {
                    alert(error.message);
                }
            });
        }
    };

    return (
        <Button
            variant="secondary"
            onClick={handleDelete}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
            disabled={isPending}
        >
            {isPending ? "Deactivating..." : "Deactivate"}
        </Button>
    );
}
