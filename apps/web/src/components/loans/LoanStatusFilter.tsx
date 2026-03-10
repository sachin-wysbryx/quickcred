"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";

export function LoanStatusFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentStatus = searchParams.get("status") || "ALL";

    const statuses = [
        { label: "All Portfolio", value: "ALL" },
        { label: "Active", value: "ACTIVE" },
        { label: "Completed", value: "COMPLETED" },
        { label: "Overdue", value: "OVERDUE" },
    ];

    function handleFilter(status: string) {
        const params = new URLSearchParams(searchParams);
        if (status === "ALL") {
            params.delete("status");
        } else {
            params.set("status", status);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 mr-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Filter By:</span>
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
