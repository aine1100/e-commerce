'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Usernavbar from "../components/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faChevronDown, faCartShopping, faHeart, faPerson, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

interface CartItem {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
}

export default function CartPage() {
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   // Fetch cart items from backend
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/cart');
  //       setCartItems(response.data);
  //     } catch (err) {
  //       setError('Failed to fetch cart items');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCartItems();
  // }, []);

  // const handleDelete = async (index: number) => {
  //   try {
  //     const itemToDelete = cartItems[index];
  //     await axios.delete(`http://localhost:5000/cart/${itemToDelete.id}`);
  //     setCartItems(cartItems.filter((_, i) => i !== index));
  //   } catch (err) {
  //     setError('Failed to delete cart item');
  //   }
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <>
      <div>
        <div className="">
          <div className="bg-black w-full text-white flex">
            <p className="text-xs mx-52 pt-4">
              Enjoy your 20% sales of discount through working with us everyday and
              also enjoy getting our products at low price
            </p>
            <p className="underline text-xs pt-4 -mx-20">Shop now</p>
            <div className="flex pt-4">
              <p className="text-xs mx-44">English </p>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 -mx-36" />
            </div>
          </div>
          <div className="mx-28 my-10 flex">
            <Usernavbar />
          </div>
        </div>
        <div className="mx-28 my-10">
          <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
          {/* {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="mb-4 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                  <div className="flex items-center">
                    <img src={item.thumbnail} alt={item.title} className="w-16 h-16 mr-4 rounded" />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <p>Rating: {item.rating}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(index)} 
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </>
  );
}
