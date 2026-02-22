'use client';

import React, { useState, useEffect } from 'react';
import ProductCard, { Product } from './ProductCard';

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const flashProducts: Product[] = [
        { id: 'fs1', title: 'HAVIT HV-G92 Gamepad', price: 160, thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400', rating: 4.8, discount: 40, reviewCount: 88 },
        { id: 'fs2', title: 'AK-900 Wired Keyboard', price: 1160, thumbnail: 'https://images.unsplash.com/photo-1511467687858-23dcf6da197e?auto=format&fit=crop&q=80&w=400', rating: 4.5, discount: 35, reviewCount: 75 },
        { id: 'fs3', title: 'IPS LCD Gaming Monitor', price: 400, thumbnail: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400', rating: 4.9, discount: 30, reviewCount: 99 },
        { id: 'fs4', title: 'S-Series Comfort Chair ', price: 400, thumbnail: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400', rating: 4.7, discount: 25, reviewCount: 102 },
    ];

    return (
        <section className="py-20 border-b">
            <div className="flex items-center gap-4 mb-5">
                <div className="h-10 w-5 bg-primary rounded-sm" />
                <span className="text-primary font-semibold text-base">Today's</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end gap-20 mb-12">
                <h2 className="text-4xl font-semibold tracking-tight">Flash Sales</h2>
                
                {/* Countdown */}
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-[12px] font-bold">Days</span>
                        <span className="text-3xl font-bold tracking-tight">{String(timeLeft.days).padStart(2, '0')}</span>
                    </div>
                    <span className="text-primary text-3xl font-bold mt-4">:</span>
                    <div className="flex flex-col">
                        <span className="text-[12px] font-bold">Hours</span>
                        <span className="text-3xl font-bold tracking-tight">{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <span className="text-primary text-3xl font-bold mt-4">:</span>
                    <div className="flex flex-col">
                        <span className="text-[12px] font-bold">Minutes</span>
                        <span className="text-3xl font-bold tracking-tight">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <span className="text-primary text-3xl font-bold mt-4">:</span>
                    <div className="flex flex-col">
                        <span className="text-[12px] font-bold">Seconds</span>
                        <span className="text-3xl font-bold tracking-tight">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                </div>

                <div className="flex-1 flex justify-end gap-2">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {flashProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <button className="px-12 py-4 bg-primary text-white font-medium rounded hover:bg-red-700 transition-all">
                    View All Products
                </button>
            </div>
        </section>
    );
};

export default FlashSale;
