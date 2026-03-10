"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@repo/ui";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="secondary" className="w-10 h-10 p-0 flex items-center justify-center rounded-full border-none bg-gray-100 dark:bg-gray-800">
                <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full" />
            </Button>
        );
    }

    return (
        <Button
            variant="secondary"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 p-0 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:scale-105 transition-all shadow-sm"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500 fill-yellow-500/20" />
            ) : (
                <Moon className="h-5 w-5 text-indigo-600 fill-indigo-600/10" />
            )}
        </Button>
    );
}
