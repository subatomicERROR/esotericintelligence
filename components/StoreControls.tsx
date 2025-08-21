import React from 'react';

interface StoreControlsProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    sortOrder: string;
    setSortOrder: (order: string) => void;
}

const StoreControls: React.FC<StoreControlsProps> = ({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-brand-surface/50 border border-brand-border p-4 rounded-lg">
            <div className="relative w-full md:w-auto md:flex-grow">
                <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-text-muted"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/20 border border-brand-border rounded-md py-2 pl-10 pr-4 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
                <label htmlFor="sort-order" className="text-sm text-brand-text-muted flex-shrink-0">Sort by:</label>
                <select
                    id="sort-order"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full md:w-auto bg-black/20 border border-brand-border rounded-md py-2 px-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                >
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default StoreControls;