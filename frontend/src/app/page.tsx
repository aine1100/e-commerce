'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import CategorySidebar from "./components/CategorySidebar";
import Hero from "./components/Hero";
import FlashSale from "./components/FlashSale";
import CategoryGrid from "./components/CategoryGrid";
import PromoBanner from "./components/PromoBanner";
import ProductCard, { Product } from "./components/ProductCard";

const HomeContent = () => {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'));
    const searchQuery = searchParams.get('search') || '';

    // Update internal category state when URL changes (for sidebar/grid sync)
    React.useEffect(() => {
        setSelectedCategory(searchParams.get('category'));
    }, [searchParams]);

    const allProducts: Product[] = useMemo(() => [
        { id: 'bp1', title: 'The North Coat', price: 260, thumbnail: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=400', rating: 4.8, discount: 20, reviewCount: 65, category: 'Woman’s Fashion' },
        { id: 'bp2', title: 'Gucci Savile Bag', price: 960, thumbnail: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400', rating: 4.7, discount: 15, reviewCount: 45, category: 'Woman’s Fashion' },
        { id: 'bp3', title: 'RGB Liquid CPU Cooler', price: 160, thumbnail: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400', rating: 4.9, discount: 10, reviewCount: 32, category: 'Electronics' },
        { id: 'bp4', title: 'Small Bookshelf', price: 360, thumbnail: 'https://images.unsplash.com/photo-1594620302200-9a7621ef6ef9?auto=format&fit=crop&q=80&w=400', rating: 4.6, reviewCount: 22, category: 'Home & Lifestyle' },
        { id: 'ep1', title: 'Breed Dry Dog Food', price: 100, thumbnail: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=400', rating: 4.2, reviewCount: 35, category: 'Groceries & Pets' },
        { id: 'ep2', title: 'CANON EOS DSLR Camera', price: 360, thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400', rating: 4.8, reviewCount: 120, category: 'Electronics' },
        { id: 'ep3', title: 'ASUS FHD Gaming Laptop', price: 700, thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400', rating: 4.9, reviewCount: 210, category: 'Electronics' },
        { id: 'ep4', title: 'Curology Product Set', price: 500, thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400', rating: 4.5, reviewCount: 45, category: 'Health & Beauty' },
        { id: 'ep5', title: 'Kids Electric Car', price: 960, thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80&w=400', rating: 4.8, reviewCount: 65, category: 'Baby’s & Toys' },
        { id: 'ep6', title: 'Jr. Zoom Soccer Cleats', price: 1160, thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400', rating: 4.7, reviewCount: 88, category: 'Sports & Outdoor' },
        { id: 'ep7', title: 'GP11 Gamepad Control', price: 660, thumbnail: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&q=80&w=400', rating: 4.4, reviewCount: 52, category: 'Electronics' },
        { id: 'ep8', title: 'Quilted Satin Jacket', price: 660, thumbnail: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400', rating: 4.5, reviewCount: 33, category: 'Men’s Fashion' },
    ], []);

    const filteredProducts = useMemo(() => {
        return allProducts.filter(p => {
            const matchesCategory = !selectedCategory || p.category === selectedCategory;
            const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [allProducts, selectedCategory, searchQuery]);

    const bestSellingProducts = filteredProducts.slice(0, 4);
    const exploreProducts = filteredProducts;

    const router = useRouter();

    const clearFilters = () => {
        router.push('/');
        setSelectedCategory(null);
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40 border-t">
            {/* Hero Section with Sidebar */}
            <div className="flex gap-12 mb-32">
                <CategorySidebar activeCategory={selectedCategory} />
                <div className="flex-1">
                    <Hero />
                </div>
            </div>

            {/* Flash Sales Section */}
            <FlashSale />

            {/* Category Section */}
            <CategoryGrid onSelectCategory={setSelectedCategory} />

            {/* Global Product Status Info */}
            {(selectedCategory || searchQuery) && (
                <div className="flex items-center justify-between mb-8 py-4 border-y bg-zinc-50 px-6 rounded">
                    <p className="text-sm font-medium">
                        Showing products for: <span className="text-primary font-bold">{selectedCategory || 'All Categories'}</span>
                        {searchQuery && <> and search: <span className="text-primary font-bold">"{searchQuery}"</span></>}
                    </p>
                    <button 
                      onClick={clearFilters}
                      className="text-xs font-bold underline hover:text-primary transition-colors"
                    >
                        Clear Filters
                    </button>
                </div>
            )}

            {/* Best Selling Section */}
            {bestSellingProducts.length > 0 && (
                <section className="py-20 animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-10 w-5 bg-primary rounded-sm" />
                        <span className="text-primary font-semibold text-base">This Month</span>
                    </div>
                    <div className="flex items-center justify-between mb-15">
                        <h2 className="text-4xl font-semibold tracking-tight">Best Selling Products</h2>
                        <button className="px-12 py-4 bg-primary text-white rounded font-medium hover:bg-red-700 transition-all">
                            View All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bestSellingProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            )}

            {/* Promo Banner Section */}
            <div className="py-20">
                <PromoBanner />
            </div>

            {/* Explore Our Products Section */}
            <section className="py-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
                <div className="flex items-center gap-4 mb-5">
                    <div className="h-10 w-5 bg-primary rounded-sm" />
                    <span className="text-primary font-semibold text-base">Our Products</span>
                </div>
                <div className="flex items-center justify-between mb-15">
                    <h2 className="text-4xl font-semibold tracking-tight">Explore Our Products</h2>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {exploreProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {exploreProducts.length === 0 && (
                    <div className="text-center py-20 bg-zinc-50 rounded border-2 border-dashed">
                        <p className="text-xl font-medium text-zinc-400">No products found matching your filters.</p>
                    </div>
                )}
                <div className="mt-16 flex justify-center">
                    <button className="px-12 py-4 bg-primary text-white font-medium rounded hover:bg-red-700 transition-all">
                        View All Products
                    </button>
                </div>
            </section>

            {/* Bottom Service Section Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 text-center">
                <div className="flex flex-col items-center">
                    <div className="h-20 w-20 bg-zinc-200 rounded-full flex items-center justify-center mb-6 border-8 border-black shadow-xl">
                        <svg className="h-10 w-10 text-white fill-white" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                    <h4 className="text-xl font-bold uppercase mb-2">FREE AND FAST DELIVERY</h4>
                    <p className="text-sm">Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-20 w-20 bg-zinc-200 rounded-full flex items-center justify-center mb-6 border-8 border-black shadow-xl">
                        <svg className="h-10 w-10 text-white fill-white" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.5h7c-.47 4.34-2.85 8.16-7 9.5V11.5H5V6.3l7-3.11v8.31z" /></svg>
                    </div>
                    <h4 className="text-xl font-bold uppercase mb-2">24/7 CUSTOMER SERVICE</h4>
                    <p className="text-sm">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-20 w-20 bg-zinc-200 rounded-full flex items-center justify-center mb-6 border-8 border-black shadow-xl">
                        <svg className="h-10 w-10 text-white fill-white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    </div>
                    <h4 className="text-xl font-bold uppercase mb-2">MONEY BACK GUARANTEE</h4>
                    <p className="text-sm">We return money within 30 days</p>
                </div>
            </div>
        </main>
    );
};

const Home = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <HomeContent />
        </Suspense>
    );
};

export default Home;
