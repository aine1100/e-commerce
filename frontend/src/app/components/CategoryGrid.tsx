'use client';

import React from 'react';

const categories = [
    { name: 'Phones', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', label: 'Electronics' },
    { name: 'Computers', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Electronics' },
    { name: 'SmartWatch', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Electronics' },
    { name: 'Camera', icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z', label: 'Electronics' },
    { name: 'Headphones', icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z', label: 'Electronics' },
    { name: 'Gaming', icon: 'M15 5v2m6 4h-2m-6 4v2M5 11H3m12-7a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4z', label: 'Electronics' },
];

interface CategoryGridProps {
    onSelectCategory: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
    return (
        <section className="py-20 border-b">
            <div className="flex items-center gap-4 mb-5">
                <div className="h-10 w-5 bg-primary rounded-sm" />
                <span className="text-primary font-semibold text-base">Categories</span>
            </div>
            <div className="flex items-center justify-between mb-15">
                <h2 className="text-4xl font-semibold tracking-tight text-black">Browse By Category</h2>
                <div className="flex gap-2">
                    <button className="h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-all">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-all">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => onSelectCategory(cat.label)}
                        className="flex flex-col items-center justify-center gap-4 py-8 border rounded hover:bg-primary hover:border-primary group transition-all"
                    >
                        <svg className="h-14 w-14 text-black group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={cat.icon} />
                        </svg>
                        <span className="text-base font-normal text-black group-hover:text-white transition-colors">{cat.name}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
