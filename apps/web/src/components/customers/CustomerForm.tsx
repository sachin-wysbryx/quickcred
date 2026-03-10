"use client";

import { useTransition } from "react";
import { Button } from "@repo/ui";
import { updateCustomer } from "@/lib/actions/customer";
import { useRouter } from "next/navigation";

interface Customer {
    id: string;
    name: string;
    phone: string;
    address: string | null;
}

export function CustomerForm({ customer }: { customer: Customer }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            try {
                await updateCustomer(customer.id, formData);
                // Redirect is handled in the action, but router.refresh might be good too
            } catch (error: any) {
                alert(error.message);
            }
        });
    };

    return (
        <form action={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name (Read-only)</label>
                <input
                    type="text"
                    value={customer.name}
                    readOnly
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 focus:outline-none sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    defaultValue={customer.phone}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                    name="address"
                    id="address"
                    rows={3}
                    defaultValue={customer.address || ""}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="flex justify-end space-x-4">
                <Button
                    variant="secondary"
                    type="button"
                    onClick={() => router.back()}
                    disabled={isPending}
                >
                    Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </form>
    );
}
