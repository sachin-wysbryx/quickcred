"use client";

import { LogOut, User, Settings } from "lucide-react";
import { logoutAction } from "@/lib/actions/auth/logoutAction";
import { useState, useRef, useEffect } from "react";

export function ProfileDropdown({ email }: { email: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full bg-primary/10 border border-border flex items-center justify-center hover:bg-primary/20 transition-all"
            >
                <User className="w-5 h-5 text-primary" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-card border border-border shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-4 border-b border-border/50 bg-muted/30">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Signed in as</p>
                        <p className="text-sm font-bold text-foreground truncate">{email}</p>
                    </div>
                    
                    <div className="p-2">
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground rounded-xl transition-colors">
                            <Settings className="w-4 h-4" />
                            Account Settings
                        </button>
                    </div>

                    <div className="p-2 border-t border-border/50">
                        <form action={logoutAction}>
                            <button
                                type="submit"
                                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-destructive hover:bg-destructive/10 rounded-xl transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
