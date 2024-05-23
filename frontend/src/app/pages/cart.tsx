'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faChevronDown, faCartShopping, faHeart, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navbar=[
    "home",
    "about",
    "login"
  ]

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
  const EditProduct=async()=>{
    const EditedProduct= await fetch("http://localhost:5000/editProducts",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      }

    }
    
  )
  }

  return (
    <>
      <div className="z-20">
        <div className="bg-black w-full text-white fixed top-0 flex pb-3">
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
        <div>
        <div className="mx-28 my-20 border-b bg-blue-400 w-[65rem] px-10 pt-2   rounded-md fixed -top-4">
        <div className="flex ">
          <h1 className="text-white font-bold text-[30px] -my-1">Ace</h1>
          <ul className="flex gap-10 mx-2">
            {navbar.map((item, index) => (
              <li
                key={index}
                className="text-[16px] hover:text-yellow-400 font-semibold my-2 mx-2 text-white"
              >
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-20 mx-96 my-2">
            <Link href="/">
              <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-white"  />
            </Link>
            <Link href="/cart" className="white">
              <p >
                <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-white" />
                <span className="absolute -my-10 mx-1 bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              </p>
            </Link>
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-white"  />
          </div>
        </div>
      </div>
        </div>
        <div className="mx-28 my-36">
          <h2 className="text-2xl font-bold mb-5" >Your Cart</h2>
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
