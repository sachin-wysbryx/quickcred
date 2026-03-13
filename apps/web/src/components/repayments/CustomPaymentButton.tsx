"use client";

import { useState, useTransition, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@repo/ui";
import { processCustomPayment } from "@/lib/actions/repayment";
import { formatCurrency } from "@repo/utils";
import {
    Wallet,
    X,
    TrendingDown,
    Calendar,
    IndianRupee
} from "lucide-react";

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
    const [mounted, setMounted] = useState(false);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

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

    if (!mounted) {
        return (
            <Button
                variant="secondary"
                size="sm"
                className="rounded-xl font-black text-[10px] uppercase tracking-widest"
            >
                <Wallet className="w-4 h-4 mr-1.5" />
                Custom
            </Button>
        );
    }

    return (
        <>
            <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsOpen(true)}
                className="rounded-xl font-black text-[10px] uppercase tracking-widest"
            >
                <Wallet className="w-4 h-4 mr-1.5" />
                Custom
            </Button>

            {isOpen && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-background/60 backdrop-blur-xl animate-in fade-in duration-300"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    <div className="relative bg-card border border-border rounded-[40px] p-8 w-full max-w-lg shadow-3xl animate-in zoom-in-95 duration-300">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-3xl font-black text-foreground tracking-tight">Post Payment</h2>
                                <p className="text-sm font-bold text-primary mt-1 flex items-center gap-2">
                                    <TrendingDown className="w-4 h-4" />
                                    Reducing liability for {customerName}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-muted rounded-2xl transition-colors text-muted-foreground"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-5 bg-muted/50 rounded-3xl border border-border shadow-inner text-center">
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Settled</p>
                                <p className="text-xl font-black text-green-600 tracking-tighter">{formatCurrency(totalPaid)}</p>
                            </div>
                            <div className="p-5 bg-destructive/5 rounded-3xl border border-destructive/10 shadow-inner text-center">
                                <p className="text-[10px] font-black uppercase text-destructive tracking-widest mb-1">Liability</p>
                                <p className="text-xl font-black text-destructive tracking-tighter">{formatCurrency(remainingBalance)}</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-3">
                                <label htmlFor="amount" className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2 ml-1">
                                    <IndianRupee className="w-4 h-4" />
                                    Disbursement Amount
                                </label>
                                <div className="relative group">
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        step="0.01"
                                        required
                                        min="1"
                                        max={remainingBalance}
                                        placeholder="0.00"
                                        className="w-full px-8 py-5 text-2xl font-black text-foreground bg-muted/30 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="date" className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2 ml-1">
                                    <Calendar className="w-4 h-4" />
                                    Effective Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    className="w-full px-6 py-4 font-bold text-foreground bg-muted/30 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
                                />
                            </div>

                            <div className="pt-4 flex items-center gap-4">
                                <Button
                                    variant="secondary"
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    disabled={isPending}
                                    className="flex-1 py-7 rounded-2xl font-black uppercase tracking-widest"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="gradient"
                                    disabled={isPending}
                                    className="flex-[2] py-7 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                                >
                                    {isPending ? "Journaling..." : "Process Collection"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
