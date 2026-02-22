'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export interface Product {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    rating: number;
    discount?: number;
    reviewCount?: number;
    category?: string;
    quantity?: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const discountedPrice = product.discount
        ? product.price - (product.price * product.discount / 100)
        : product.price;

    return (
        <Link
            href={`/product/${product.id}`}
            className="group flex flex-col h-full bg-white rounded transition-all"
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-zinc-100 rounded flex items-center justify-center p-8">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.discount && (
                        <span className="px-3 py-1 bg-primary text-white text-[10px] font-medium rounded animate-pulse">
                            -{product.discount}%
                        </span>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>

                {/* Add to Cart Overlay */}
                <button
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="absolute bottom-0 left-0 right-0 bg-black text-white text-base font-medium py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                    Add To Cart
                </button>
            </div>

            {/* Content */}
            <div className="pt-4 flex flex-col gap-2">
                <h3 className="font-medium text-base text-black truncate">{product.title}</h3>

                <div className="flex items-center gap-3">
                    <span className="text-primary font-medium text-base">${discountedPrice.toFixed(2)}</span>
                    {product.discount && (
                        <span className="text-zinc-500 line-through text-base">${product.price.toFixed(2)}</span>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-300 fill-zinc-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-zinc-500 text-sm font-semibold">({product.reviewCount || 0})</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
