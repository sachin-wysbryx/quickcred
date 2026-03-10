"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { User, Search } from "lucide-react";

interface Customer {
    id: string;
    name: string;
}

export function CustomerFilter({ customers }: { customers: Customer[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCustomerId = searchParams.get("customerId") || "";

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const customerId = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (customerId) {
            params.set("customerId", customerId);
        } else {
            params.delete("customerId");
        }
        router.push(`/repayments?${params.toString()}`);
    };

    return (
        <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1 group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <User className="w-5 h-5" />
                    <div className="w-px h-4 bg-border"></div>
                </div>
                <select
                    id="customer-filter"
                    value={currentCustomerId}
                    onChange={handleChange}
                    className="w-full pl-16 pr-10 py-4 rounded-2xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-bold text-foreground appearance-none transition-all shadow-sm"
                >
                    <option value="">Filter All Portfolio Borrowers</option>
                    {customers.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <Search className="w-4 h-4" />
                </div>
            </div>

            {currentCustomerId && (
                <button
                    onClick={() => router.push('/repayments')}
                    className="px-6 py-4 rounded-2xl bg-destructive/10 text-destructive text-xs font-black uppercase tracking-widest hover:bg-destructive/20 transition-all border border-destructive/20"
                >
                    Clear Filter
                </button>
            )}
        </div>
    );
}
