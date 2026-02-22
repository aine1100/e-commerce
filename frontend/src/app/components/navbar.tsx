'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItems } = useCart();
    const cartCount = cartItems.length;
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (searchValue) {
            params.set('search', searchValue);
        } else {
            params.delete('search');
        }
        router.push(`/?${params.toString()}`);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            {/* Top Bar */}
            <div className="bg-black text-white py-3">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-center">
                    <div className="flex-1 hidden md:block" />
                    <p className="text-[10px] md:text-sm font-normal text-center flex-1">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                        <Link href="/" className="ml-2 font-bold underline hover:text-zinc-300">ShopNow</Link>
                    </p>
                    <div className="flex-1 flex justify-end items-center gap-2 cursor-pointer group">
                        <span className="text-xs md:text-sm font-normal">English</span>
                        <svg className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="border-b bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold tracking-tight text-black">
                            Exclusive
                        </Link>

                        {/* Links */}
                        <div className="hidden md:flex items-center gap-12">
                            <Link href="/" className={`text-base font-normal hover:underline underline-offset-8 decoration-2 ${pathname === '/' ? 'underline decoration-black' : ''}`}>Home</Link>
                            <Link href="/contact" className={`text-base font-normal hover:underline underline-offset-8 decoration-2 ${pathname === '/contact' ? 'underline decoration-black' : ''}`}>Contact</Link>
                            <Link href="/about" className={`text-base font-normal hover:underline underline-offset-8 decoration-2 ${pathname === '/about' ? 'underline decoration-black' : ''}`}>About</Link>
                            <Link href="/signup" className={`text-base font-normal hover:underline underline-offset-8 decoration-2 ${pathname === '/signup' ? 'underline decoration-black' : ''}`}>Sign Up</Link>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-6">
                            <form onSubmit={handleSearch} className="relative hidden lg:block group">
                                <input 
                                    type="text" 
                                    placeholder="What are you looking for?" 
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className="w-64 py-2.5 pl-5 pr-12 bg-zinc-100 rounded text-xs font-normal border-none outline-none focus:ring-1 focus:ring-zinc-300 transition-all placeholder:text-zinc-500"
                                />
                                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-primary transition-colors">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </form>

                            <div className="flex items-center gap-4 text-black">
                                <button className="p-2 hover:bg-zinc-100 rounded-full transition-all">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <Link href="/cart" className="p-2 hover:bg-zinc-100 rounded-full transition-all relative">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    {cartCount > 0 && (
                                        <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>
                                <button className="p-2 hover:bg-zinc-100 rounded-full transition-all group lg:hidden">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
