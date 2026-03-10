"use client";

import { useTransition } from "react";
import { UserMinus, UserCheck } from "lucide-react";
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
        <button
            onClick={handleToggle}
            disabled={isPending}
            className={`
                w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-sm
                ${isActive
                    ? "bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/20"
                    : "bg-green-500/10 text-green-600 hover:bg-green-500/20 border border-green-500/20"
                }
                ${isPending ? "opacity-60 cursor-not-allowed" : ""}
            `}
        >
            {isActive ? (
                <UserMinus className="w-4 h-4" />
            ) : (
                <UserCheck className="w-4 h-4" />
            )}
            {isPending ? "Updating..." : (isActive ? "Deactivate Customer" : "Reactivate Customer")}
        </button>
    );
}

