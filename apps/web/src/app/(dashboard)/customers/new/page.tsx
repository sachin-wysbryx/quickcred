"use client";

import { useTransition, useState } from "react";
import { createCustomer } from "@/lib/actions/customer";
import { Card, Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    ChevronLeft,
    User,
    Phone,
    MapPin,
    AlertCircle,
    CheckCircle2
} from "lucide-react";

export default function NewCustomerPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (formData: FormData) => {
        setError(null);
        startTransition(async () => {
            try {
                await createCustomer(formData);
                setSuccess(true);
                setTimeout(() => router.push("/customers"), 1500);
            } catch (err: any) {
                setError(err.message || "Something went wrong.");
            }
        });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 pb-10">
            <div className="space-y-4">
                <Link
                    href="/customers"
                    className="inline-flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to Customers
                </Link>
                <h1 className="text-4xl font-black text-foreground tracking-tight">Add Customer</h1>
                <p className="text-muted-foreground font-medium">Register a new borrower in the system</p>
            </div>

            {/* Success Banner */}
            {success && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-600 font-bold text-sm animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    Customer created successfully! Redirecting...
                </div>
            )}

            <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />
                <form action={handleSubmit} className="space-y-6 pt-2">
                    {error && (
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive font-bold text-sm">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            {error}
                        </div>
                    )}

                    <div className="space-y-3">
                        <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                            <User className="w-4 h-4" />
                            Full Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-bold text-foreground shadow-sm placeholder:text-muted-foreground/50 transition-all"
                            placeholder="e.g. Rahul Kumar"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                            <Phone className="w-4 h-4" />
                            Phone Number
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            required
                            className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-bold text-foreground shadow-sm placeholder:text-muted-foreground/50 transition-all"
                            placeholder="+91 9876543210"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest gap-2">
                            <MapPin className="w-4 h-4" />
                            Address <span className="text-muted-foreground/50 normal-case font-medium">(optional)</span>
                        </label>
                        <textarea
                            name="address"
                            rows={3}
                            className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-muted/30 focus:border-primary font-bold text-foreground shadow-sm placeholder:text-muted-foreground/50 transition-all resize-none"
                            placeholder="123 Main St, City"
                        />
                    </div>

                    <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row justify-end gap-3">
                        <Link href="/customers" className="sm:w-32">
                            <Button variant="ghost" type="button" className="w-full font-bold">
                                Cancel
                            </Button>
                        </Link>
                        <Button
                            type="submit"
                            variant="gradient"
                            disabled={isPending || success}
                            className="rounded-2xl px-10 group"
                        >
                            {isPending ? (
                                "Saving..."
                            ) : success ? (
                                <>
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    Saved!
                                </>
                            ) : (
                                "Save Customer"
                            )}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
