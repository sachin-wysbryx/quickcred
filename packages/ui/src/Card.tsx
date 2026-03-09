import React from 'react';

export const Card = ({ children, className = "", title, icon: Icon }: {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: React.ElementType;
}) => {
    return (
        <div className={`bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden ${className}`}>
            {title && (
                <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 tracking-tight">{title}</h3>
                    {Icon && <Icon className="w-5 h-5 text-gray-400" />}
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
};
