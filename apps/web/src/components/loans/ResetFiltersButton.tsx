"use client";

import { useRouter } from "next/navigation";
import { RotateCcw } from "lucide-react";

export function ResetFiltersButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/loans")}
            className="flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
        >
            <RotateCcw className="w-4 h-4" />
            Clear All Filters
        </button>
    );
}
