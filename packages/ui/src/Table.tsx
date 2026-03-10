import React from 'react';

export const Table = ({ headers, data, renderRow, className = "" }: {
    headers: string[];
    data: any[];
    renderRow: (item: any, index: number) => React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`w-full overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm ${className}`}>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans">
                    <thead>
                        <tr className="bg-gray-50/80 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
                            {headers.map((h, i) => (
                                <th key={i} className="px-6 py-4 text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-slate-800">
                        {data.map((item, i) => renderRow(item, i))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={headers.length} className="px-6 py-12 text-center text-gray-400 dark:text-slate-600 font-bold italic">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
