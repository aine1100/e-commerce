'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();

    const subtotal = cartItems.reduce((acc, item) => {
        const discountedPrice = item.discount 
            ? item.price - (item.price * item.discount / 100) 
            : item.price;
        return acc + discountedPrice;
    }, 0);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 min-h-screen">
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-20 uppercase tracking-widest font-medium">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Cart</span>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center py-32 border-2 border-dashed border-zinc-100 rounded-xl">
                    <h1 className="text-4xl font-semibold mb-8">Your Cart is Empty</h1>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-12 py-4 bg-primary text-white rounded font-medium hover:bg-red-700 transition-all"
                    >
                        Return To Shop
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-12">
                    {/* Cart Table Header */}
                    <div className="grid grid-cols-4 gap-8 px-10 py-6 bg-white shadow-sm border rounded">
                        <span className="text-base font-medium">Product</span>
                        <span className="text-base font-medium">Price</span>
                        <span className="text-base font-medium">Quantity</span>
                        <span className="text-base font-medium text-right">Subtotal</span>
                    </div>

                    {/* Cart Items */}
                    <div className="flex flex-col gap-8">
                        {cartItems.map((item, index) => (
                            <CartItem
                                key={`${item.id}-${index}`}
                                item={item}
                                onRemove={removeFromCart}
                            />
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center mb-10">
                        <Link href="/" className="px-12 py-4 border-2 border-zinc-300 rounded font-medium hover:border-black transition-all">
                            Return To Shop
                        </Link>
                        <button className="px-12 py-4 border-2 border-zinc-300 rounded font-medium hover:border-black transition-all">
                            Update Cart
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Coupon */}
                        <div className="flex gap-4 items-start">
                            <input 
                                type="text" 
                                placeholder="Coupon Code" 
                                className="flex-1 px-6 py-4 border-2 border-zinc-300 rounded outline-none focus:border-black transition-all"
                            />
                            <button className="px-12 py-4 bg-primary text-white rounded font-medium hover:bg-red-700 transition-all">
                                Apply Coupon
                            </button>
                        </div>

                        {/* Summary */}
                        <div className="border-2 border-black rounded p-8">
                            <h3 className="text-xl font-medium mb-6">Cart Total</h3>
                            <div className="flex justify-between py-4 border-b">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-4 border-b">
                                <span>Shipping:</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <div className="flex justify-between py-4 mb-8">
                                <span className="font-bold">Total:</span>
                                <span className="font-bold">${subtotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-4 bg-primary text-white rounded font-medium hover:bg-red-700 transition-all">
                                Procced to checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
