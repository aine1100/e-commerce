'use client';

import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-20 uppercase tracking-widest font-medium">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Contact</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Info */}
                <aside className="w-full lg:w-80 p-10 bg-white shadow-sm border rounded">
                    <div className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-medium">Call To Us</h3>
                            </div>
                            <div className="flex flex-col gap-4 text-sm font-normal text-black leading-relaxed">
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                            </div>
                        </div>

                        <div className="h-[1px] bg-zinc-200" />

                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-medium">Write To Us</h3>
                            </div>
                            <div className="flex flex-col gap-4 text-sm font-normal text-black leading-relaxed">
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Form */}
                <main className="flex-1 p-10 bg-white shadow-sm border rounded">
                    <form className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input 
                                type="text" 
                                placeholder="Your Name *" 
                                className="px-6 py-4 bg-zinc-100 rounded border-none outline-none focus:ring-1 focus:ring-primary transition-all font-normal text-black"
                                required 
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email *" 
                                className="px-6 py-4 bg-zinc-100 rounded border-none outline-none focus:ring-1 focus:ring-primary transition-all font-normal text-black"
                                required 
                            />
                            <input 
                                type="tel" 
                                placeholder="Your Phone *" 
                                className="px-6 py-4 bg-zinc-100 rounded border-none outline-none focus:ring-1 focus:ring-primary transition-all font-normal text-black"
                                required 
                            />
                        </div>
                        <textarea 
                            placeholder="Your Message" 
                            rows={8}
                            className="px-6 py-4 bg-zinc-100 rounded border-none outline-none focus:ring-1 focus:ring-primary transition-all font-normal text-black resize-none"
                        />
                        <div className="flex justify-end">
                            <button className="px-12 py-4 bg-primary text-white rounded font-medium hover:bg-red-700 transition-all">
                                Send Message
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default ContactPage;
