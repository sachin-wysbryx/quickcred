import Link from "next/link";
import { logoutAction } from "@/lib/actions/auth/logoutAction";


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
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white border-r border-gray-100 flex-shrink-0">
                <div className="h-16 flex items-center px-6 border-b border-gray-100">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        QuickCred
                    </span>
                </div>
                <nav className="p-4 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 bg-white border-b border-gray-100 flex items-center px-8 justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">Admin Portal</h2>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-600 hidden md:block">sachinrv19@gmail.com</div>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            A
                        </div>
                        <form action={logoutAction}>
                            <button type="submit" className="text-sm text-red-600 hover:text-red-800 font-medium ml-4">
                                Logout
                            </button>
                        </form>
                    </div>
                </header>
                <div className="flex-1 p-8 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
