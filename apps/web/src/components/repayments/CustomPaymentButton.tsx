"use client";

import { useState, useTransition } from "react";
import { Button } from "@repo/ui";
import { processCustomPayment } from "@/lib/actions/repayment";

import { formatCurrency } from "@repo/utils";

interface CustomPaymentModalProps {
    loanId: string;
    customerName: string;
    totalRepayment: number;
    totalPaid: number;
    remainingBalance: number;
}

export function CustomPaymentButton({
    loanId,
    customerName,
    totalRepayment,
    totalPaid,
    remainingBalance
}: CustomPaymentModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            try {
                await processCustomPayment(loanId, formData);
                setIsOpen(false);
            } catch (error: any) {
                alert(error.message);
            }
        });
    };

    return (
        <>
            <Button
                variant="secondary"
                onClick={() => setIsOpen(true)}
                className="text-sm shadow-sm"
            >
                Custom Pay
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 leading-tight">Custom Payment</h2>
                                <p className="text-sm text-gray-500 font-medium">{customerName}</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                ✕
                            </button>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 font-medium">Loan Total:</span>
                                <span className="font-bold text-gray-900">{formatCurrency(totalRepayment)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 font-medium">Paid So Far:</span>
                                <span className="font-bold text-green-600">{formatCurrency(totalPaid)}</span>
                            </div>
                            <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                                <span className="text-gray-700 font-bold">Remaining:</span>
                                <span className="font-extrabold text-red-600">{formatCurrency(remainingBalance)}</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="amount" className="block text-sm font-bold text-gray-700 mb-1">
                                    Payment Amount
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 font-semibold sm:text-sm">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        step="0.01"
                                        required
                                        min="1"
                                        max={remainingBalance}
                                        placeholder="0.00"
                                        className="block w-full border border-gray-300 rounded-md shadow-sm pl-7 pr-3 py-2.5 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="date" className="block text-sm font-bold text-gray-700 mb-1">
                                    Payment Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-medium"
                                />
                            </div>

                            <div className="flex justify-end space-x-3 pt-4">
                                <Button
                                    variant="secondary"
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    disabled={isPending}
                                    className="px-4 py-2"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isPending}
                                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                                >
                                    {isPending ? "Journaling..." : "Submit Payment"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
