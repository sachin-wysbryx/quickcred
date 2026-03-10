"use client";

import { useState, useTransition } from "react";
import { createLoan } from "@/lib/actions/loan";
import { Card, Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    ChevronLeft,
    User,
    IndianRupee,
    Calendar,
    FileText,
    Percent,
    CheckCircle2,
    ArrowRight,
    ArrowLeft
} from "lucide-react";
import { formatCurrency } from "@repo/utils";

interface NewLoanFormProps {
    customers: { id: string; name: string }[];
    preselectedId?: string;
}

export function NewLoanForm({ customers, preselectedId }: NewLoanFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);
    const [successLoanId, setSuccessLoanId] = useState<string | null>(null);

    const handleSubmit = async (formData: FormData) => {
        setError(null);
        startTransition(async () => {
            try {
                const loanId = await createLoan(formData);
                setSuccessLoanId(loanId);
            } catch (err: any) {
                setError(err.message || "Failed to issue loan.");
            }
        });
    };

    if (successLoanId) {
        return (
            <div className="max-w-2xl mx-auto py-10 animate-in fade-in zoom-in-95 duration-500">
                <Card className="text-center p-12">
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-green-600 animate-bounce" />
                    </div>
                    <h2 className="text-4xl font-black text-foreground tracking-tight mb-4">Loan Issued Successfully!</h2>
                    <p className="text-muted-foreground font-medium text-lg mb-10">
                        The repayment schedule has been generated and the borrower has been notified.
                    </p>

                    <div className="space-y-4">
                        <Link href={`/loans/${successLoanId}`}>
                            <Button variant="gradient" className="w-full py-7 rounded-2xl text-xs uppercase tracking-widest font-black transition-all">
                                View Loan Details
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                        <div className="grid grid-cols-2 gap-4">
                            <Link href="/loans">
                                <Button variant="secondary" className="w-full py-5 rounded-2xl text-[10px] uppercase tracking-widest font-black">
                                    Back to Loans
                                </Button>
                            </Link>
                            <Button 
                                variant="ghost" 
                                onClick={() => window.location.reload()}
                                className="w-full py-5 rounded-2xl text-[10px] uppercase tracking-widest font-black"
                            >
                                Issue Another
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-8 pb-10">
            <div className="space-y-4">
                <Link
                    href="/loans"
                    className="inline-flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>
                <h1 className="text-4xl font-black text-foreground tracking-tight">Issue New Loan</h1>
                <p className="text-muted-foreground font-medium">Configure principal and repayment schedule for the borrower</p>
            </div>

            <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />
                
                <form action={handleSubmit} className="space-y-8 pt-4">
                    {error && (
                        <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive font-bold text-sm">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                                    <User className="w-4 h-4" />
                                    Select Borrower
                                </label>
                                <select
                                    name="customerId"
                                    required
                                    defaultValue={preselectedId || ""}
                                    className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-bold text-foreground transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Choose a customer...</option>
                                    {customers.map((c) => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                                    <IndianRupee className="w-4 h-4" />
                                    Principal Amount
                                </label>
                                <div className="relative">
                                    <input
                                        name="loanAmount"
                                        type="number"
                                        step="0.01"
                                        required
                                        placeholder="0.00"
                                        className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-black text-foreground text-xl transition-all"
                                    />
                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase text-muted-foreground">INR</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                                    <Percent className="w-4 h-4" />
                                    Total Interest Rate
                                </label>
                                <div className="relative">
                                    <input
                                        name="interest"
                                        type="number"
                                        step="0.01"
                                        required
                                        placeholder="e.g. 10"
                                        className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-black text-foreground text-xl transition-all"
                                    />
                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase text-muted-foreground">% TOTAL</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Disbursement Date
                                </label>
                                <input
                                    name="startDate"
                                    type="date"
                                    required
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-bold text-foreground transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                            <FileText className="w-4 h-4" />
                            Internal Case Summary <span className="text-muted-foreground/40 normal-case font-medium">(optional)</span>
                        </label>
                        <textarea
                            name="description"
                            rows={3}
                            placeholder="Add loan purpose or notes..."
                            className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-bold text-foreground transition-all resize-none"
                        />
                    </div>

                    <div className="p-6 bg-primary/5 rounded-[32px] border border-primary/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-foreground">12-Week Repayment Plan</p>
                                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-0.5">Automated Generation Enabled</p>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            variant="gradient"
                            disabled={isPending}
                            className="px-10 py-7 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-indigo-500/20"
                        >
                            {isPending ? "Generating..." : "Finalize & Issue Loan"}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
