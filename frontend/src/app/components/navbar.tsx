"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort,faChevronDown, faCartShopping, faHeart,faUser } from '@fortawesome/free-solid-svg-icons'

const Usernavbar = () => {
  const navbar = [
    "Home",
    "Contact",
    "SignUp",
    "About"
  ];
  const [cart,setCart]=useState()
  const [products,setProducts]=useState()

  return (
    <div>
      <div>
        <div className='flex '>
          <h1 className='text-blue-400 font-bold text-[30px]'>Ace</h1>

          {navbar.map((item, index) => (
            <ul key={index} className='my-2 gap-36 mx-2' >
              <li className='text-[16px] hover:text-blue-400 font-semibold'>{item}</li>
            </ul>
          ))}
     
          <div className='flex gap-20 mx-[20rem] my-2'>
          <FontAwesomeIcon icon={faHeart} className='w-6 h-6 ' />

          <FontAwesomeIcon icon={faCartShopping} className='w-6 h-6 ' />
          <link rel="stylesheet" href="/cart" />
          <FontAwesomeIcon icon={faUser} className="  w-6 h-6" />




          </div>
        </div>
      </div>
    </div>
  );
};

export default Usernavbar;
