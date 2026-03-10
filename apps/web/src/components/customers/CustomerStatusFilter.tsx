"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function CustomerStatusFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentStatus = searchParams.get("status") || "active";

    const setStatus = (status: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (status === "all") {
            params.delete("status");
        } else {
            params.set("status", status);
        }
        router.push(`/customers?${params.toString()}`);
    };

    const tabs = [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" }
    ];

    return (
        <div className="flex bg-muted/50 p-1.5 rounded-2xl w-fit border border-border/50">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => setStatus(tab.value)}
                    className={`
                        px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300
                        ${currentStatus === tab.value
                            ? "bg-card text-primary shadow-premium border border-border"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
