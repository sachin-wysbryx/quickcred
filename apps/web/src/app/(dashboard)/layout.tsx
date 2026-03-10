import Link from "next/link";
import { logoutAction } from "@/lib/actions/auth/logoutAction";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: "📊" },
        { name: "Customers", href: "/customers", icon: "👥" },
        { name: "Loans", href: "/loans", icon: "💰" },
        { name: "Repayments", href: "/repayments", icon: "📅" },
        { name: "Reports", href: "/reports", icon: "📈" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col md:flex-row transition-colors duration-300">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 flex-col flex-shrink-0 shadow-sm">
                <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-slate-800">
                    <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                        QuickCred
                    </span>
                </div>
                <nav className="p-4 space-y-1 flex-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-slate-400 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-semibold"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-100 dark:border-slate-800">
                    <form action={logoutAction}>
                        <button type="submit" className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all font-bold text-sm">
                            <span>🚪</span>
                            <span>Logout</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col pb-20 md:pb-0">
                <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 dark:border-slate-800 flex items-center px-4 md:px-8 justify-between">
                    <div className="flex items-center space-x-4">
                        <span className="md:hidden text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            QC
                        </span>
                        <h2 className="text-sm md:text-lg font-bold text-gray-800 dark:text-slate-100 uppercase tracking-widest hidden sm:block">Admin Portal</h2>
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-4">
                        <ThemeToggle />
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-xs font-black text-gray-400 uppercase tracking-tighter">Administrator</span>
                            <span className="text-sm font-bold text-gray-700 dark:text-slate-300">sachinrv19@gmail.com</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/20">
                            A
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-4 left-4 right-4 h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-100 dark:border-slate-800 rounded-2xl flex items-center justify-around px-2 shadow-2xl z-50">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex flex-col items-center justify-center w-12 h-12 rounded-xl text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-[10px] font-black uppercase mt-0.5 tracking-tighter">{item.name.slice(0, 4)}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
