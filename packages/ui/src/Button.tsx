import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost" | "gradient";
    size?: "sm" | "md" | "lg";
}

export const Button = ({ children, className = "", variant = "primary", size = "md", ...props }: ButtonProps) => {
    const variants = {
        primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-premium",
        gradient: "gradient-primary text-white shadow-premium hover:shadow-premium-hover hover:scale-[1.02]",
        secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-muted shadow-sm",
        danger: "bg-destructive text-destructive-foreground hover:opacity-90 shadow-premium",
        ghost: "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-8 py-3.5 text-base"
    };

    return (
        <button
            {...props}
            className={`
                ${sizes[size]}
                rounded-2xl font-bold tracking-tight transition-all duration-300
                active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2
                cursor-pointer
                ${variants[variant]} ${className}
            `}
        >
            {children}
        </button>
    );
};
