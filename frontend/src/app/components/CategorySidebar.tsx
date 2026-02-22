'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const categories = [
    'Woman’s Fashion',
    'Men’s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
    'Health & Beauty',
];

interface CategorySidebarProps {
    activeCategory: string | null;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ activeCategory }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleCategoryClick = (category: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('category', category.toLowerCase().replace(/\s+/g, '-'));
        router.push(`/?${params.toString()}`);
    };

    return (
        <aside className="hidden lg:block w-64 pt-10 border-r min-h-[400px]">
            <nav className="flex flex-col gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`flex items-center justify-between group group-hover:bg-zinc-50 py-1 pr-8 transition-all ${
                            activeCategory === category.toLowerCase().replace(/\s+/g, '-') ? 'bg-zinc-100' : ''
                        }`}
                    >
                        <span className="text-base font-medium text-black">{category}</span>
                        {(category === 'Woman’s Fashion' || category === 'Men’s Fashion') && (
                            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default CategorySidebar;
