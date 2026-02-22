'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../components/ProductCard';

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    // Initialize from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('ace_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart from localStorage", e);
            }
        }
    }, []);

    // Sync to localStorage
    useEffect(() => {
        localStorage.setItem('ace_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems(prev => [...prev, product]);
    };

    const removeFromCart = (id: string) => {
        // Find index of first match to only remove one instance if duplicates exist
        const index = cartItems.findIndex(item => item.id === id);
        if (index !== -1) {
            const newCart = [...cartItems];
            newCart.splice(index, 1);
            setCartItems(newCart);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
