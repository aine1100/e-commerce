"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Usernavbar from "../components/navbar";

const Userlanding = () => {
  const [Userimages, setUserImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countSeconds, setCountSeconds] = useState(0);
  const [countMinutes, setCountMinutes] = useState(0);
  const [countHours, setCountHours] = useState(0);
  const [countDays, setCountDays] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [numProducts, setNumProducts] = useState(10); // Number of products to load initially

  useEffect(() => {
    const interval = setInterval(() => {
      setCountSeconds((prev) => {
        if (prev === 59) {
          setCountMinutes((prevMin) => {
            if (prevMin === 59) {
              setCountHours((prevHours) => {
                if (prevHours === 23) {
                  setCountDays((prevDays) => prevDays + 1);
                  return 0;
                }
                return prevHours + 1;
              });
              return 0;
            }
            return prevMin + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [Userimages]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100&skip=2")
      .then((response) => response.json())
      .then((data) => {
        setUserImages(data.products); // Assuming the products are in an array called 'products'
        setFilteredImages(data.products.slice(0, 6)); // Initially, show all products
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const query = event.target.value.toLowerCase();
    const filtered = Userimages.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredImages(filtered);
  };

  const handleLoadMore = () => {
    // Increase the number of products to load
    setNumProducts((prevNum) => prevNum + 6);
  };

  return (
    <div>
      <div className="bg-black w-[100%] text-white flex ">
        <p className="text-[10px] mx-52 pt-4">
          Enjoy your 20% sales of discount through working with us everyday and
          also enjoy getting our products at low price
        </p>

        <p className="underline text-[11px] pt-4 -mx-20">Shop now</p>
        <div className="flex pt-4 ">
          <p className="text-[11px] mx-44">English </p>
          <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 -mx-36" />
        </div>
      </div>
      <div className="mx-28 my-10 border-b border-black ">
        <Usernavbar />
      </div>
      <div className="mx-28 flex gap-36">
        <ul className="text-[15px] gap-5 border-black border-r-2">
          <li className="py-2 pr-10 hover:text-blue-400">Food </li>
          <li className="py-2 pr-10 hover:text-blue-400">Clothes </li>
          <li className="py-2 pr-10 hover:text-blue-400">Electronics</li>
          <li className="py-2 pr-10 hover:text-blue-400">Furniture</li>
          <li className="py-2 pr-10 hover:text-blue-400">Medicines</li>
          <li className="py-2 pr-10 hover:text-blue-400">Sports </li>
          <li className="py-2 pr-10 hover:text-blue-400">Shoes</li>
          <li className="py-2 pr-10 hover:text-blue-400">Toys</li>
        </ul>

        <div className="w-[800px] h-[250px] bg-black border-b text-white my-6">
          <div className="mx-20 pt-20">
            <h3 className="text-[15px]">Ubl Hot</h3>
            <h4 className="text-[30px]">
              Up to 10% <br />
              off voucher
            </h4>
            <p className="underline mx-10">Shop Now</p>
            <img
              src={filteredImages[currentIndex]?.thumbnail}
              alt={filteredImages[currentIndex]?.title}
              className="w-[300px] h-[200px] rounded-md -my-52 mx-64 transition-transform duration-500 ease-in-out"
            />

            {/* <div className="my-[14.5rem] mx-64 flex gap-12">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="h-3 w-3 cursor-pointer"
                onClick={prevSlide}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="h-3 w-3 cursor-pointer"
                onClick={nextSlide}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="mx-28 my-10">
        <h2 className="text-red-600 border-l-8 pl-2 border-red-600 text-[20px]">
          Today
        </h2>
        <div className="flex gap-32 my-10">
          <h3 className="font-bold text-black">Flash sales</h3>
          <ul className="flex gap-10 font-bold text-black">
            <li>Days</li>
            <li>Hours</li>
            <li>Minutes</li>
            <li>Seconds</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-20 mx-72 font-semibold -my-4">
            <li>{countDays}</li>
            <li>{countHours}</li>
            <li>{countMinutes}</li>
            <li>{countSeconds}</li>
          </ul>
        </div>
      </div>
      <div className="mx-28 my-28">
        <h1 className="text-red-500 text-[20px] text-center pb-3">Products</h1>
        <div className="mx-[25rem]">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {filteredImages.map((product, index) => (
            <div key={index} className="border p-4 rounded">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-sm font-semibold text-gray-700">
                ${product.price}
              </p>
              <p className="text-xs text-yellow-400">
                Rating: {product.rating}
              </p>
              <div className="flex gap-36">
                <button className="bg-black text-white p-2 text-sm rounded-sm ">
                  Add to cart
                </button>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="my-3 text-red-500 "
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex text-center mx-96 mt-4">
          <button className="bg-red-600 text-white p-3 rounded-sm">
            Load more products
          </button>
        </div>
      </div>
      <div className="mx-28 pb-3">
        <h4 className="text-red-600 border-l-8 pl-2 border-red-600 text-[20px]">
          Category
        </h4>
        <h3 className="font-bold text-black my-3 pb-3">Browse by category</h3>
        <div className="flex gap-10 my-3 ">
        <div className="border-1 border-slate-500 w-[200px] h-[150px] rounded-md text-center  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 hover:text-white hover:border-red-600">
            <p className="my-28">Phone</p>
          </div>
          <div className="border-1 border-slate-500 w-[200px] h-[150px] rounded-md text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 hover:text-white hover:border-red-600">
          <p className="my-28">Computer</p>

          </div>
          <div className="border-1 border-red-600 bg-red-600 w-[220px] h-[170px] -my-2 rounded-md text-center">
          <p className="my-28 text-white">Gaming</p>

          </div>
          <div className="border-1 border-slate-500 w-[200px] h-[150px] rounded-md text-center  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 hover:text-white hover:border-red-600">
          <p className="my-28">Camera</p>

          </div>
          <div className="border-1 border-slate-500 w-[200px] h-[150px] rounded-md  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 hover:text-white hover:border-red-600">
          <p className="text-center my-28">SmartWatch</p>

          </div>
        </div>
      </div>
      <div className="mx-28 my-10 pt-3">
      <h4 className="text-red-600 border-l-8 pl-2 border-red-600 text-[20px]">
          This month
        </h4>
        <div className="flex gap-[48rem]" >
        <h3 className="font-bold text-black my-3">Best selling</h3>
        <button className="bg-red-600 rounded-sm w-26 h-11 pl-5 pr-5 text-white text-[12px]">View more</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {filteredImages.map((product, index) => (
            <div key={index} className="border p-4 rounded">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-sm font-semibold text-gray-700">
                ${product.price}
              </p>
              <p className="text-xs text-yellow-400">
                Rating: {product.rating}
              </p>
              <div className="flex gap-36">
                <button className="bg-black text-white p-2 text-sm rounded-sm ">
                  Add to cart
                </button>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="my-3 text-red-500 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
     <div>
      
     </div>
<div>
  hello
</div>
    </div>
  );
};

export default Userlanding;
