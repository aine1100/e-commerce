'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-20 uppercase tracking-widest font-medium">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">About</span>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
                <div className="flex-1">
                    <h1 className="text-6xl font-semibold mb-10 tracking-tight">Our Story</h1>
                    <div className="space-y-6 text-base text-black leading-relaxed">
                        <p>
                            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </p>
                        <p>
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                </div>
                <div className="flex-1 relative aspect-square bg-zinc-100 rounded overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                {[
                    { label: 'Sellers active our site', val: '10.5k', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                    { label: 'Monthly Produduct Sale', val: '33k', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', active: true },
                    { label: 'Customer active in our site', val: '45.5k', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
                    { label: 'Anual gross sale in our site', val: '25k', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
                ].map((stat, i) => (
                    <div key={i} className={`flex flex-col items-center justify-center gap-4 py-8 border rounded transition-all group ${stat.active ? 'bg-primary border-primary text-white shadow-xl' : 'hover:bg-primary hover:border-primary hover:text-white'}`}>
                        <div className={`h-16 w-16 rounded-full flex items-center justify-center p-4 border-[8px] transition-all ${stat.active ? 'bg-white/20 border-white/10' : 'bg-zinc-100 border-zinc-200 group-hover:bg-white/20 group-hover:border-white/10'}`}>
                            <svg className={`h-8 w-8 ${stat.active ? 'text-white' : 'text-black group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={stat.icon} />
                            </svg>
                        </div>
                        <span className="text-3xl font-bold tracking-tight">{stat.val}</span>
                        <span className="text-base font-normal text-center px-4">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Team */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Tom Cruise', role: 'Founder & Chairman', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
                    { name: 'Emma Watson', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
                    { name: 'Will Smith', role: 'Product Designer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
                ].map((member, i) => (
                    <div key={i} className="flex flex-col gap-6">
                        <div className="aspect-[4/5] bg-zinc-100 rounded overflow-hidden p-8 flex items-end">
                            <img src={member.img} alt={member.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-medium tracking-tight mb-2">{member.name}</h3>
                            <p className="text-base text-black mb-4">{member.role}</p>
                            <div className="flex gap-4">
                                <svg className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                <svg className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                <svg className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;
