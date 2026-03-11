"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/actions/auth/logoutAction";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import {
    LayoutDashboard,
    Users,
    CircleDollarSign,
    CalendarClock,
    BarChart3,
    LogOut,
    Menu,
    X
} from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Customers", href: "/customers", icon: Users },
        { name: "Loans", href: "/loans", icon: CircleDollarSign },
        { name: "Repayments", href: "/repayments", icon: CalendarClock },
        { name: "Reports", href: "/reports", icon: BarChart3 },
    ];

    return (
        <div className="h-screen bg-background flex flex-col md:flex-row transition-colors duration-300 overflow-hidden">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-72 bg-card border-r border-border flex-col flex-shrink-0 shadow-premium fixed left-0 top-0 h-screen overflow-y-auto z-40">
                <div className="h-20 flex items-center px-8 border-b border-border/50">
                    <div className="w-10 h-10 gradient-purple rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
                        <CircleDollarSign className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-foreground tracking-tighter">
                        QuickCred<span className="text-primary font-light"></span>
                    </span>
                </div>

                <nav className="p-6 space-y-2 flex-1 pt-8">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                    flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 group
                                    ${isActive
                                        ? "gradient-primary text-white shadow-lg shadow-indigo-500/20"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }
                                `}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
                                <span className="font-bold tracking-tight">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Logout */}
                <div className="p-6 border-t border-border/50">
                    <form action={logoutAction}>
                        <button
                            id="sidebar-logout-btn"
                            type="submit"
                            className="w-full flex items-center space-x-3 px-6 py-4 text-destructive hover:bg-destructive/10 rounded-2xl transition-all font-bold tracking-tight"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Mobile Sidebar Drawer Overlay */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar Drawer */}
            <aside
                className={`
                    md:hidden fixed top-0 left-0 h-full w-72 bg-card border-r border-border flex flex-col z-50
                    transform transition-transform duration-300 ease-in-out shadow-2xl
                    ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="h-20 flex items-center justify-between px-6 border-b border-border/50">
                    <div className="flex items-center">
                        <div className="w-9 h-9 gradient-purple rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
                            <CircleDollarSign className="text-white w-5 h-5" />
                        </div>
                        <span className="text-lg font-black text-foreground tracking-tighter">
                            QuickCred<span className="text-primary font-light">Admin</span>
                        </span>
                    </div>
                    <button
                        id="mobile-sidebar-close-btn"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-xl hover:bg-muted transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                <nav className="p-6 space-y-2 flex-1 pt-8">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`
                                    flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 group
                                    ${isActive
                                        ? "gradient-primary text-white shadow-lg shadow-indigo-500/20"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }
                                `}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
                                <span className="font-bold tracking-tight">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Sidebar Logout */}
                <div className="p-6 border-t border-border/50">
                    <form action={logoutAction}>
                        <button
                            id="mobile-sidebar-logout-btn"
                            type="submit"
                            className="w-full flex items-center space-x-3 px-6 py-4 text-destructive hover:bg-destructive/10 rounded-2xl transition-all font-bold tracking-tight"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto md:ml-72">
                {/* Top Header */}
                <header className="h-16 md:h-20 bg-background/80 backdrop-blur-md sticky top-0 z-30 border-b border-border/50 flex items-center px-4 md:px-10 justify-between gap-4">
                    <div className="flex items-center gap-3">
                        {/* Mobile Hamburger */}
                        <button
                            id="mobile-menu-btn"
                            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors border border-border"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5 text-foreground" />
                        </button>

                        {/* Mobile Logo */}
                        <div className="md:hidden w-8 h-8 gradient-purple rounded-lg flex items-center justify-center shadow-lg">
                            <CircleDollarSign className="text-white w-4 h-4" />
                        </div>

                        <h2 className="text-sm font-black text-muted-foreground uppercase tracking-widest capitalize">
                            {pathname.split("/").filter(Boolean).pop() || "System"}
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        <ThemeToggle />
                        <div className="h-8 w-[1px] bg-border hidden sm:block" />
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-tighter">ADMIN</span>
                            <span className="text-xs font-bold text-foreground">sachinrv19@gmail.com</span>
                        </div>
                        <ProfileDropdown email="sachinrv19@gmail.com" />
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
