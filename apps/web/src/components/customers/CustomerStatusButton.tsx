"use client";

import { useTransition } from "react";
import { Button } from "@repo/ui";
import { reactivateCustomer } from "@/lib/actions/customers/reactivateCustomer";
import { deactivateCustomer } from "@/lib/actions/customers/deactivateCustomer";

interface CustomerStatusButtonProps {
    id: string;
    isActive: boolean;
}

export function CustomerStatusButton({ id, isActive }: CustomerStatusButtonProps) {
    const [isPending, startTransition] = useTransition();

    const handleToggle = () => {
        startTransition(async () => {
            if (isActive) {
                await deactivateCustomer(id);
            } else {
                await reactivateCustomer(id);
            }
        });
    };

    return (
        <Button
            variant="secondary"
            className={`text-sm ${isActive ? "text-red-600 hover:bg-red-50" : "text-green-600 hover:bg-green-50"}`}
            onClick={handleToggle}
            disabled={isPending}
        >
            {isPending ? "Updating..." : (isActive ? "Deactivate" : "Reactivate")}
        </Button>
    );
}
