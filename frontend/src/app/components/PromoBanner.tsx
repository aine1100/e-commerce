'use client';

import React from 'react';

const PromoBanner = () => {
    return (
        <section className="bg-black py-16 px-12 lg:px-20 rounded shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="relative z-10 text-white max-w-lg">
                <span className="text-primary font-semibold text-base mb-8 block">Categories</span>
                <h2 className="text-5xl font-semibold leading-[1.2] tracking-tight mb-8">
                    Enhance You <br /> Tech Knowledge
                </h2>

                <div className="flex gap-6 mb-10">
                    <div className="h-16 w-16 rounded-full bg-white flex flex-col items-center justify-center text-black">
                        <span className="text-base font-bold leading-none">23</span>
                        <span className="text-[10px] font-medium uppercase">Hours</span>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-white flex flex-col items-center justify-center text-black">
                        <span className="text-base font-bold leading-none">05</span>
                        <span className="text-[10px] font-medium uppercase">Days</span>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-white flex flex-col items-center justify-center text-black">
                        <span className="text-base font-bold leading-none">59</span>
                        <span className="text-[10px] font-medium uppercase">Mins</span>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-white flex flex-col items-center justify-center text-black">
                        <span className="text-base font-bold leading-none">35</span>
                        <span className="text-[10px] font-medium uppercase">Secs</span>
                    </div>
                </div>

                <button className="px-12 py-4 bg-primary text-white font-medium rounded hover:bg-red-700 transition-all">
                    Buy Now!
                </button>
            </div>

            <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative h-80 w-80 lg:h-96 lg:w-96">
                    <div className="absolute inset-0 bg-zinc-400/20 rounded-full blur-[100px]" />
                    <div className="flex-1 relative pt-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-zinc-600 rounded-full blur-[100px] opacity-30" />
                        <img
                            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800"
                            alt="JBL Speaker"
                            className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PromoBanner;
