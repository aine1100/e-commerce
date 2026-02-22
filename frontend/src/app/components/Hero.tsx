'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="pt-10 h-[400px]">
            <div className="bg-black w-full h-full relative flex items-center px-12 lg:px-20 overflow-hidden">
                {/* Text Content */}
                <div className="relative z-10 text-white max-w-sm">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
                            <div className="h-6 w-5 bg-white rounded-sm" />
                        </div>
                        <span className="text-base font-normal tracking-wide">iPhone 14 Series</span>
                    </div>

                    <h1 className="text-5xl font-semibold leading-[1.2] tracking-tight mb-8">
                        Up to 10% <br /> off Voucher
                    </h1>

                    <Link href="/" className="inline-flex items-center gap-2 text-base font-medium border-b border-white pb-1 hover:text-white/80 transition-all group">
                        Shop Now
                        <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

                {/* Hero Image Mockup */}
                <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-l from-zinc-800/50 to-transparent flex items-center justify-center">
                        <div className="relative h-64 w-64 bg-zinc-900 rounded-3xl rotate-12 flex items-center justify-center border border-zinc-700 shadow-2xl">
                            <div className="h-32 w-32 bg-primary rounded-full blur-[60px] opacity-40 animate-pulse" />
                            <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Product Demo</span>
                        </div>
                    </div>
                </div>

                {/* Slider Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    <div className="h-3 w-3 rounded-full bg-zinc-600 cursor-pointer" />
                    <div className="h-3 w-3 rounded-full bg-zinc-600 cursor-pointer" />
                    <div className="h-3 w-3 rounded-full bg-primary border-2 border-white cursor-pointer shadow-sm" />
                    <div className="h-3 w-3 rounded-full bg-zinc-600 cursor-pointer" />
                    <div className="h-3 w-3 rounded-full bg-zinc-600 cursor-pointer" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
