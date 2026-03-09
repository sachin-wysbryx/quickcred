"use client";

import { useTransition, useState } from "react";
import { sendOtpAction } from "@/lib/actions/auth/sendOtpAction";
import { verifyOtpAction } from "@/lib/actions/auth/verifyOtpAction";
import { Button, Card } from "@repo/ui";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState<string | null>(null);

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

        const formData = new FormData();
        formData.append("email", email);
        formData.append("otp", otp);

        startTransition(async () => {
            const result = await verifyOtpAction(formData);
            if (result.error) {
                setError(result.error);
            } else {
                router.push("/dashboard");
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                        QuickCred
                    </h1>
                    <p className="text-gray-500">Admin Portal Login</p>
                </div>

                <Card className="px-6 space-y-4">
                    {error && (
                        <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm font-medium border border-red-200">
                            {error}
                        </div>
                    )}

                    {step === 1 ? (
                        <form onSubmit={handleSendOtp} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="sachinrv19@gmail.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <Button type="submit" className="w-full justify-center" disabled={isPending}>
                                {isPending ? "Sending OTP..." : "Send Secure OTP"}
                            </Button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp} className="space-y-6">
                            <div className="text-sm text-gray-600 mb-4 text-center">
                                Enter the 6-digit code sent to <br /><span className="font-semibold text-gray-900">{email}</span>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                                <input
                                    type="text"
                                    name="otp"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                                    placeholder="000000"
                                    required
                                    className="w-full px-4 py-4 text-center text-2xl tracking-widest font-mono rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <Button type="submit" className="w-full justify-center" disabled={isPending || otp.length !== 6}>
                                {isPending ? "Verifying..." : "Secure Login"}
                            </Button>

                            <div className="pt-4 text-center">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-sm text-gray-500 hover:text-blue-600"
                                    disabled={isPending}
                                >
                                    &larr; Use a different email
                                </button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </div>
    );
}
