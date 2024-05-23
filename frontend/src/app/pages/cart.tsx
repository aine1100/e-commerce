'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faChevronDown, faCartShopping, faHeart, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
        console.log("Data fetched successfully", data);
      } else {
        console.error("Error fetching cart items:", response.status);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
  
  const deleteProduct = async () => {
    try {
      const resp = await fetch("http://localhost:5000/deleteProducts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (resp.ok) {
        console.log("The product has been deleted successfully", resp);
        fetchCartItems(); // Refresh the cart items
      } else {
        console.log("Failed to delete the product");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      <div>
        <div className="bg-black w-full text-white flex pb-3">
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
        <div className="mx-28 my-10">
          <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="mb-4 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                  <div className="flex items-center">
                    <img src={item.thumbnail} alt={item.title} className="w-16 h-16 mr-4 rounded" />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p>${item.price}</p>
                      <p>Rating: {item.rating}</p>
                    </div>
                  </div>
                  <button 
                    onClick={deleteProduct} 
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
