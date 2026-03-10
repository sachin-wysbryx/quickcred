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

    return (
        <div className="flex bg-gray-100 p-1 rounded-lg w-fit">
            <button
                onClick={() => setStatus("active")}
                className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${currentStatus === "active" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                    }`}
            >
                Active
            </button>
            <button
                onClick={() => setStatus("inactive")}
                className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${currentStatus === "inactive" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                    }`}
            >
                Inactive
            </button>
        </div>
    );
}
