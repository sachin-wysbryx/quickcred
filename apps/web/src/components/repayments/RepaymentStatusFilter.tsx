"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";

export function RepaymentStatusFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentStatus = searchParams.get("status") || "ALL";

    const statuses = [
        { label: "Pending Collection", value: "ALL" },
        { label: "Collected", value: "COLLECTED" },
        { label: "Overdue", value: "OVERDUE" },
    ];

    function handleFilter(status: string) {
        const params = new URLSearchParams(searchParams);
        params.set("status", status);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 mr-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Queue Status:</span>
            </div>
            {statuses.map((status) => (
                <button
                    key={status.value}
                    onClick={() => handleFilter(status.value)}
                    className={`
                        px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                        ${currentStatus === status.value
                            ? "bg-primary text-white shadow-lg shadow-indigo-500/20"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-transparent hover:border-border"
                        }
                    `}
                >
                    {status.label}
                </button>
            ))}
        </div>
    );
}
