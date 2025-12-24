import React, { useMemo, useState } from 'react';
import { Competitor } from '../types';
import { motion } from 'framer-motion';

interface CompSetModalProps {
    isOpen: boolean;
    onClose: () => void;
    competitors: Competitor[];
}

const StatCard: React.FC<{ label: string; value: string; colorClass?: string }> = ({ label, value, colorClass = "text-[#1D1D1F]" }) => (
    <div className="bg-gray-50 rounded-2xl p-4 flex-1 text-center border border-gray-100 shadow-sm">
        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{label}</div>
        <div className={`text-lg sm:text-2xl font-black ${colorClass}`}>{value}</div>
    </div>
);

const CompSetModal: React.FC<CompSetModalProps> = ({ isOpen, onClose, competitors }) => {
    const [filter, setFilter] = useState<'all' | '1Bd' | '2Bd'>('all');
    const [furnishingFilter, setFurnishingFilter] = useState<'all' | 'Furnished' | 'Unfurnished'>('Unfurnished');

    const filteredCompetitors = useMemo(() => {
        return competitors.filter(c => {
            const typeMatch = filter === 'all' || c.type.includes(filter);
            const furnishMatch = furnishingFilter === 'all' || c.furnishing === furnishingFilter;
            return typeMatch && furnishMatch;
        });
    }, [competitors, filter, furnishingFilter]);

    const stats = useMemo(() => {
        if (!filteredCompetitors.length) return { avg: 0, min: 0, max: 0 };
        const prices = filteredCompetitors.map(c => c.price);
        return {
            avg: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
            min: Math.min(...prices),
            max: Math.max(...prices)
        };
    }, [filteredCompetitors]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[90vh] border border-white/20"
            >
                {/* Header Section */}
                <div className="px-6 py-5 sm:px-8 border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">Market Comparison</h2>
                            <p className="text-sm text-gray-500 font-medium mt-1">Comparables in Dhahrat Laban</p>
                        </div>
                        <button 
                            onClick={onClose} 
                            className="p-2 -mr-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex bg-gray-100 p-1 rounded-lg">
                            {(['Unfurnished', 'Furnished', 'all'] as const).map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFurnishingFilter(f)}
                                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${furnishingFilter === f ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    {f === 'all' ? 'All' : f}
                                </button>
                            ))}
                        </div>
                        <div className="w-[1px] h-6 bg-gray-200 mx-1 self-center"></div>
                        <div className="flex bg-gray-100 p-1 rounded-lg">
                            {(['1Bd', '2Bd', 'all'] as const).map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${filter === f ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    {f === 'all' ? 'All Types' : f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-2 sm:gap-4">
                        <StatCard label="Min Price" value={`SAR ${stats.min.toLocaleString()}`} />
                        <StatCard label="Average" value={`SAR ${stats.avg.toLocaleString()}`} colorClass="text-[#2A5B64]" />
                        <StatCard label="Max Price" value={`SAR ${stats.max.toLocaleString()}`} />
                    </div>
                </div>
                
                {/* List Content */}
                <div className="overflow-y-auto p-0 bg-white">
                    <ul className="divide-y divide-gray-100">
                        {filteredCompetitors.map((comp, idx) => {
                             const isBayut = comp.listingUrl.includes('bayut');
                             const isAqar = comp.listingUrl.includes('aqar');
                             const hasLink = comp.listingUrl && comp.listingUrl !== '#';

                             return (
                                <li key={idx} className="group hover:bg-gray-50/80 transition-colors duration-200">
                                    <div className="px-6 py-4 sm:px-8 flex items-center justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start gap-2 mb-1">
                                                <div>
                                                    <h3 className="text-sm font-semibold text-[#1D1D1F] leading-tight">{comp.name}</h3>
                                                    <div className="flex gap-1.5 mt-1">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600">
                                                            {comp.type}
                                                        </span>
                                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${comp.furnishing === 'Furnished' ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'}`}>
                                                            {comp.furnishing}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-[#1D1D1F] tabular-nums mb-1">
                                                SAR {comp.price.toLocaleString()}
                                            </div>
                                            {hasLink ? (
                                                <a 
                                                    href={comp.listingUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-[10px] font-bold text-blue-600 hover:bg-blue-100 transition-colors uppercase tracking-wide"
                                                >
                                                    {isBayut ? 'Bayut' : isAqar ? 'Aqar' : 'Link'} ↗
                                                </a>
                                            ) : (
                                                <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wide">No Link</span>
                                            )}
                                        </div>
                                    </div>
                                </li>
                             );
                        })}
                    </ul>
                    {filteredCompetitors.length === 0 && (
                        <div className="p-12 text-center text-gray-400 italic">
                            No listings match the selected filters.
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default CompSetModal;