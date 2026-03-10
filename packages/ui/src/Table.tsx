import React from 'react';

export const Table = ({ headers, data, renderRow, className = "" }: {
    headers: string[];
    data: any[];
    renderRow: (item: any, index: number) => React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`w-full overflow-hidden rounded-3xl border border-border bg-card shadow-premium ${className}`}>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans">
                    <thead>
                        <tr className="bg-muted/40 border-b border-border">
                            {headers.map((h, i) => (
                                <th key={i} className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {data.map((item, i) => (
                            <React.Fragment key={i}>
                                {renderRow(item, i)}
                            </React.Fragment>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={headers.length} className="px-8 py-16 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-3xl text-muted-foreground/30">📁</span>
                                        <p className="text-sm text-muted-foreground font-bold uppercase tracking-tighter">No records found</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
