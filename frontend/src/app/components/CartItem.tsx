'use client';

import React from 'react';
import { Product } from './ProductCard';

interface CartItemProps {
    item: Product;
    onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
    const discountedPrice = item.discount 
        ? item.price - (item.price * item.discount / 100) 
        : item.price;

    return (
        <div className="grid grid-cols-4 gap-8 px-10 py-6 items-center bg-white shadow-sm border rounded group relative">
            {/* Remove Button Overlay on Hover */}
            <button 
                onClick={() => onRemove(item.id)}
                className="absolute top-2 left-2 h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove Item"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Product info */}
            <div className="flex items-center gap-6">
                <div className="h-16 w-16 bg-zinc-100 rounded flex items-center justify-center p-2">
                    <img src={item.thumbnail} alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="text-base font-medium text-black truncate">{item.title}</span>
            </div>

            {/* Price */}
            <span className="text-base font-medium">${discountedPrice.toFixed(2)}</span>

            {/* Quantity Selector Mockup */}
            <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-zinc-200 rounded px-3 py-1.5 gap-4">
                    <span className="text-base font-medium">01</span>
                    <div className="flex flex-col gap-1">
                        <svg className="h-3 w-3 cursor-pointer hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                        </svg>
                        <svg className="h-3 w-3 cursor-pointer hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Subtotal */}
            <span className="text-base font-medium text-right">${discountedPrice.toFixed(2)}</span>
        </div>
    );
};

export default CartItem;
