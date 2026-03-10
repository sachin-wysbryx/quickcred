import React from 'react';

export const Card = ({ children, className = "", title, icon: Icon, gradient = false }: {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: React.ElementType;
    gradient?: boolean;
}) => {
    return (
        <div className={`
            bg-card text-card-foreground
            rounded-3xl shadow-premium border border-border
            overflow-hidden card-hover
            ${gradient ? 'gradient-purple border-none' : ''}
            ${className}
        `}>
            {title && (
                <div className={`px-8 py-5 flex items-center justify-between ${gradient ? '' : 'border-b border-border/50'}`}>
                    <h3 className={`font-black tracking-tight ${gradient ? 'text-white/90 uppercase text-xs' : 'text-foreground'}`}>
                        {title}
                    </h3>
                    {Icon && <Icon className={`w-5 h-5 ${gradient ? 'text-white/50' : 'text-muted-foreground'}`} />}
                </div>
            )}
            <div className={`${title ? 'p-8 pt-2' : 'p-8'}`}>
                {children}
            </div>
        </div>
    );
};
