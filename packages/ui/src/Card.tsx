import React from 'react';

export const Card = ({ children, className = "", title, icon: Icon }: {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: React.ElementType;
}) => {
    return (
        <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden ${className}`}>
            {title && (
                <div className="px-6 py-4 border-b border-gray-50 dark:border-slate-800 flex items-center justify-between">
                    <h3 className="font-extrabold text-gray-900 dark:text-slate-100 tracking-tight">{title}</h3>
                    {Icon && <Icon className="w-5 h-5 text-gray-400 dark:text-slate-500" />}
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
};
