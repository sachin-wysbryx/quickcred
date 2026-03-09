"use client";

import { useTransition, useState } from "react";
import { createCustomer } from "@/lib/actions/customer";
import { Card, Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewCustomerPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (formData: FormData) => {
        setError(null);
        startTransition(async () => {
            try {
                await createCustomer(formData);
                router.push("/customers");
            } catch (err: any) {
                setError(err.message || "Something went wrong.");
            }
        });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
                <Link href="/customers" className="text-gray-500 hover:text-gray-800">
                    &larr; Back
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Add Customer</h1>
            </div>

            <Card>
                <form action={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                            name="phone"
                            type="tel"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            placeholder="+91 9876543210"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <textarea
                            name="address"
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            placeholder="123 Main St, City"
                        />
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end space-x-4">
                        <Link href="/customers">
                            <Button variant="ghost" type="button">Cancel</Button>
                        </Link>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Creating..." : "Save Customer"}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
