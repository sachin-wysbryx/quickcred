import React from 'react';

export const Table = ({ headers, data, renderRow, className = "" }: {
    headers: string[];
    data: any[];
    renderRow: (item: any, index: number) => React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${className}`}>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/80 border-b border-gray-100">
                            {headers.map((h, i) => (
                                <th key={i} className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {data.map((item, i) => renderRow(item, i))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={headers.length} className="px-6 py-12 text-center text-gray-400 font-medium">
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
