"use client";

import { useTransition, useState, useRef, useEffect } from "react";
import { sendOtpAction } from "@/lib/actions/auth/sendOtpAction";
import { verifyOtpAction } from "@/lib/actions/auth/verifyOtpAction";
import { Button, Card } from "@repo/ui";
import { useRouter } from "next/navigation";
import {
    ShieldCheck,
    Mail,
    Lock,
    ArrowRight,
    RefreshCcw,
    AlertCircle,
    ChevronLeft
} from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState<string | null>(null);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleSendOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData();
        formData.append("email", email);

        startTransition(async () => {
            const result = await sendOtpAction(formData);
            if (result.error) {
                setError(result.error);
            } else {
                setStep(2);
            }
        });
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const otpString = otp.join("");
        const formData = new FormData();
        formData.append("email", email);
        formData.append("otp", otpString);

        startTransition(async () => {
            const result = await verifyOtpAction(formData);
            if (result.error) {
                setError(result.error);
            } else {
                router.push("/dashboard");
            }
        });
    };

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden bg-[#0A0A0B]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <div className="w-full max-w-[440px] relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl mb-6 shadow-2xl">
                        <ShieldCheck className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-white mb-2">
                        Quick<span className="text-primary">Cred</span>
                    </h1>
                    <p className="text-muted-foreground font-medium">Internal Administration Protocol</p>
                </div>

                <div className="relative">
                    <Card className="p-8 backdrop-blur-2xl bg-white/[0.03] border-white/10 shadow-3xl rounded-[40px] border-t-white/20">
                        {error && (
                            <div className="p-4 rounded-2xl bg-destructive/10 text-destructive text-xs font-black uppercase tracking-widest border border-destructive/20 mb-6 flex items-center gap-3 animate-shake">
                                <AlertCircle className="w-5 h-5" />
                                {error}
                            </div>
                        )}

                        {step === 1 ? (
                            <form onSubmit={handleSendOtp} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 ml-1">Admin Identity</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="admin@quickcred.com"
                                            required
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    variant="gradient"
                                    className="w-full py-7 rounded-2xl text-base font-black uppercase tracking-widest shadow-lg shadow-primary/25 group"
                                    disabled={isPending}
                                >
                                    <span>{isPending ? "Verifying..." : "Initialize Bridge"}</span>
                                    {!isPending && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                                </Button>
                            </form>
                        ) : (
                            <form onSubmit={handleVerifyOtp} className="space-y-6">
                                <div className="text-center mb-8">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">Authentication Code Sent</p>
                                    <p className="text-sm font-bold text-white/90">{email}</p>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-center block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Enter Security Token</label>
                                    <div className="flex justify-between gap-2">
                                        {otp.map((digit, i) => (
                                            <input
                                                key={i}
                                                ref={(el) => { inputRefs.current[i] = el; }}
                                                type="text"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handleOtpChange(i, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(i, e)}
                                                className="w-12 h-16 text-center text-3xl font-black rounded-xl bg-white/[0.05] border border-white/10 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-all"
                                                required
                                            />
                                        ))}
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    variant="gradient"
                                    className="w-full py-7 rounded-2xl text-base font-black uppercase tracking-widest shadow-lg shadow-primary/25"
                                    disabled={isPending || otp.join("").length !== 6}
                                >
                                    {isPending ? (
                                        <RefreshCcw className="w-5 h-5 animate-spin" />
                                    ) : (
                                        "Grant Access"
                                    )}
                                </Button>

                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="w-full text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 hover:text-white transition-colors flex items-center justify-center gap-2"
                                    disabled={isPending}
                                >
                                    <ChevronLeft className="w-3 h-3" />
                                    Modify Identity
                                </button>
                            </form>
                        )}
                    </Card>

                    {/* Security Badge */}
                    <div className="mt-8 flex items-center justify-center gap-4 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-purple-500 border-2 border-[#0A0A0B]"></div>
                            ))}
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/80">
                            Enterprise-grade encryption active
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
