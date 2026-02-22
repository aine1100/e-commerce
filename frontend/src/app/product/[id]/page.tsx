'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { Product } from '../../components/ProductCard';

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('Red');
    const [selectedSize, setSelectedSize] = useState('M');

    // Mock data for the product (ideally fetch based on params.id)
    const product: Product & { description: string } = {
        id: params.id,
        title: 'Havana Gamepad',
        price: 160,
        thumbnail: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&q=80&w=800',
        rating: 4.5,
        reviewCount: 150,
        description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        discount: 20
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-20">
                <Link href="/" className="hover:text-black">Account</Link>
                <span>/</span>
                <Link href="/" className="hover:text-black">Gaming</Link>
                <span>/</span>
                <span className="text-black font-medium">{product.title}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-20">
                {/* Images */}
                <div className="flex-1 flex gap-8">
                    <div className="flex flex-col gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-32 w-40 bg-zinc-100 rounded flex items-center justify-center p-4">
                                <img src={product.thumbnail} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 bg-zinc-100 rounded flex items-center justify-center p-12">
                        <img src={product.thumbnail} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                    <h1 className="text-3xl font-semibold mb-4 tracking-tight">{product.title}</h1>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center text-primary">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`h-5 w-5 fill-current ${i < 4 ? '' : 'text-zinc-300'}`} viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 8.19 8.61 1 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-zinc-400">({product.reviewCount} Reviews)</span>
                        <div className="w-[1px] h-4 bg-zinc-300 mx-2" />
                        <span className="text-sm text-[#00FF66] font-medium">In Stock</span>
                    </div>

                    <p className="text-2xl font-normal mb-6">${product.price.toFixed(2)}</p>
                    
                    <p className="text-sm leading-relaxed text-black mb-10 pb-10 border-b border-zinc-200">
                        {product.description}
                    </p>

                    {/* Controls */}
                    <div className="flex flex-col gap-8 mb-10">
                        <div className="flex items-center gap-6">
                            <span className="text-xl font-normal min-w-20">Colours:</span>
                            <div className="flex gap-4">
                                {['#A0BCE0', '#E07575'].map(c => (
                                    <button 
                                        key={c} 
                                        className={`h-5 w-5 rounded-full border-2 p-0.5 ${selectedColor === (c === '#A0BCE0' ? 'Blue' : 'Red') ? 'border-black' : 'border-transparent'}`}
                                        onClick={() => setSelectedColor(c === '#A0BCE0' ? 'Blue' : 'Red')}
                                    >
                                        <div className="w-full h-full rounded-full" style={{ backgroundColor: c }} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-xl font-normal min-w-20">Size:</span>
                            <div className="flex gap-4">
                                {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                                    <button 
                                        key={s}
                                        className={`h-8 w-8 rounded border text-sm font-medium transition-all ${selectedSize === s ? 'bg-primary border-primary text-white' : 'border-zinc-300 hover:border-black'}`}
                                        onClick={() => setSelectedSize(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center border border-zinc-300 rounded overflow-hidden">
                                <button 
                                    className="p-3 hover:bg-zinc-100 transition-all border-r border-zinc-300"
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                </button>
                                <span className="w-20 text-center text-xl font-medium">{quantity}</span>
                                <button 
                                    className="p-3 bg-primary text-white hover:bg-red-700 transition-all border-l border-primary"
                                    onClick={() => setQuantity(prev => prev + 1)}
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                </button>
                            </div>
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 py-4 bg-primary text-white font-medium rounded hover:bg-red-700 transition-all"
                            >
                                Buy Now
                            </button>
                            <button className="p-4 border border-zinc-300 rounded hover:border-black transition-all">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="border border-zinc-300 rounded">
                        <div className="flex items-center gap-4 p-6 border-b border-zinc-300">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1a1 1 0 00-1-1H9m4 1v3a1 1 0 01-1 1H9m4-1a1 1 0 00-1-1H9M7 21a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z" /></svg>
                            <div>
                                <h4 className="text-base font-medium">Free Delivery</h4>
                                <p className="text-xs underline cursor-pointer">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-6">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            <div>
                                <h4 className="text-base font-medium">Return Delivery</h4>
                                <p className="text-xs">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
