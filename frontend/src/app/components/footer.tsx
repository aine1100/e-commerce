'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="lg:col-span-1">
                        <Link href="/" className="group flex items-center gap-1 mb-6">
                            <span className="text-3xl font-black tracking-tighter italic uppercase text-white group-hover:text-primary transition-colors">
                                ACE
                            </span>
                            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                        </Link>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-xs mb-8">
                            Redefining the tech shopping experience.
                            High-performance gear for high-performance people.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                                    <div className="h-4 w-4 bg-zinc-700 rounded-sm" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 underline decoration-zinc-800 underline-offset-8">Shop</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
                            <li><Link href="/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
                            <li><Link href="/fashion" className="hover:text-white transition-colors">Fashion</Link></li>
                            <li><Link href="/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
                            <li><Link href="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 underline decoration-zinc-800 underline-offset-8">Support</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                            <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 underline decoration-zinc-800 underline-offset-8">Account</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
                            <li><Link href="/profile" className="hover:text-white transition-colors">My Profile</Link></li>
                            <li><Link href="/orders" className="hover:text-white transition-colors">Order History</Link></li>
                            <li><Link href="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
                            <li><Link href="/settings" className="hover:text-white transition-colors">Settings</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                        © {new Date().getFullYear()} ACE DIGITAL CORP. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
