import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
}

export const Button = ({ children, className = "", variant = "primary", ...props }: ButtonProps) => {
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
        secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm",
        danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100"
    };

    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};
