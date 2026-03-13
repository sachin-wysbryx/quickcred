"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { User, Search, ChevronDown, Check, X } from "lucide-react";

interface Customer {
    id: string;
    name: string;
}

export function CustomerFilter({ customers }: { customers: Customer[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCustomerId = searchParams.get("customerId") || "";
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedCustomer = customers.find(c => c.id === currentCustomerId);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (customerId: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (customerId) {
            params.set("customerId", customerId);
        } else {
            params.delete("customerId");
        }
        router.push(`/repayments?${params.toString()}`);
        setIsOpen(false);
        setSearchQuery("");
    };

    const filteredCustomers = customers.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
            <div className="relative flex-1" ref={dropdownRef}>
                {/* Search Input / Trigger */}
                <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 text-muted-foreground group-focus-within:text-primary transition-colors z-10">
                        <User className="w-5 h-5" />
                        <div className="w-px h-4 bg-border"></div>
                    </div>
                    
                    <input
                        type="text"
                        placeholder={selectedCustomer ? selectedCustomer.name : "Filter All Portfolio Borrowers"}
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setIsOpen(true);
                        }}
                        onFocus={() => setIsOpen(true)}
                        className="w-full pl-16 pr-12 py-4 rounded-2xl border border-border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-bold text-foreground transition-all shadow-sm placeholder:text-foreground/70"
                    />
                    
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-3 bg-card border border-border rounded-2xl shadow-premium z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="max-h-[300px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                            {filteredCustomers.length > 0 ? (
                                <div className="py-2">
                                    <button
                                        type="button"
                                        onClick={() => handleSelect("")}
                                        className="w-full px-6 py-4 text-left hover:bg-muted/50 flex items-center justify-between group transition-colors"
                                    >
                                        <span className="font-bold text-sm text-muted-foreground group-hover:text-primary">All Portfolio Borrowers</span>
                                        {!currentCustomerId && <Check className="w-4 h-4 text-primary" />}
                                    </button>
                                    <div className="h-px bg-border/50 mx-4 my-1"></div>
                                    {filteredCustomers.map((c) => (
                                        <button
                                            key={c.id}
                                            type="button"
                                            onClick={() => handleSelect(c.id)}
                                            className="w-full px-6 py-4 text-left hover:bg-muted/50 flex items-center justify-between group transition-colors"
                                        >
                                            <span className={`font-bold text-sm ${currentCustomerId === c.id ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                                                {c.name}
                                            </span>
                                            {currentCustomerId === c.id && <Check className="w-4 h-4 text-primary" />}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-10 text-center">
                                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Search className="w-6 h-6 text-muted-foreground" />
                                    </div>
                                    <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">No borrowers found</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {currentCustomerId && (
                <button
                    onClick={() => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.delete("customerId");
                        router.push(`/repayments?${params.toString()}`);
                    }}
                    className="px-6 py-4 rounded-2xl bg-destructive/10 text-destructive text-[10px] font-black uppercase tracking-widest hover:bg-destructive/20 transition-all border border-destructive/20 flex items-center gap-2 whitespace-nowrap"
                >
                    <X className="w-3 h-3" />
                    Clear Filter
                </button>
            )}
        </div>
    );
}
