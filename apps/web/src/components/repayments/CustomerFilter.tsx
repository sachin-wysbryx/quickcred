"use client";

import { useRouter, useSearchParams } from "next/navigation";

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
        <div className="flex items-center space-x-2 mb-6">
            <label htmlFor="customer-filter" className="text-sm font-medium text-gray-700">
                Filter by Customer:
            </label>
            <select
                id="customer-filter"
                value={currentCustomerId}
                onChange={handleChange}
                className="block w-full max-w-xs pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="">All Customers</option>
                {customers.map((c) => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
