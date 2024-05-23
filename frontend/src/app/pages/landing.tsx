"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faHeadphones,
  faHeart,
  faShield,
  faCartShopping,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import UserFooter from "../components/footer";

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
  const[ProductsImage,setProductsImage]=useState([])
  const[NewProducts,setNewProducts]=useState([])
  const[allProducts,setAllProducts]=useState([])
  const navbar = ["Home", "Contact", "SignUp", "About"];
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
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
        setUserImages(data.products);
        setFilteredImages(data.products.slice(0, 6)); 
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);
  useEffect(()=>{
    fetch("https://dummyjson.com/products?limit=100&skip=2")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data.products)
        setUserImages(data.products);
        setProductsImage(data.products.slice(7, 13)); 
      })
      .catch((error) => console.error("Error fetching images:", error));
  })

  useEffect(()=>{
  fetch("https://dummyjson.com/products?limit=100&skip=2")
  .then((response =>response.json()))
  .then((data)=>{
    setUserImages(data.products)
    setNewProducts(data.products.slice(14,20))
  })
  .catch((err)=>{
    console.error("error in fectching the images",err)
  })
  },[])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const query = event.target.value.toLowerCase();
    const filtered = Userimages.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredImages(filtered);
  };
  const handleLoadMore = () => {
    const newNumProducts = numProducts + 10;
    setNumProducts(newNumProducts);
    setFilteredImages(allProducts.slice(0, newNumProducts));
  };
  const handleLoadLess=()=>{
    const newproducts=numProducts-10;
    setNumProducts(newproducts)
    setFilteredImages(allProducts.slice(0,newproducts))
  }

  const handleAddToCart = async (product) => {
    try {
      await axios.post("http://localhost:5000/AddProduct", {
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        rating: product.rating,
      });
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div>
      <div className="bg-black w-[100%] text-white flex fixed top-0 z-10 ">
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
      <div className="mx-28 my-20 border-b border-black ">
      <div className="flex">
        <h1 className="text-blue-400 font-bold text-[30px]">Ace</h1>
        <ul className="flex gap-10 mx-2">
          {navbar.map((item, index) => (
            <li key={index} className="text-[16px] hover:text-blue-400 font-semibold my-2">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-20 mx-96 my-2">
          <Link href="/">
            <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
          </Link>
          <Link href="/cart" className="text-black">
            <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
          </Link>
          <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
        </div>
      </div>
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
                <button
                  className="bg-black text-white p-2 text-sm rounded-sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="my-3 text-red-500"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex text-center mx-96 mt-4 gap-28 w-[40rem]">
          <button
            className="bg-red-600 text-white p-3 rounded-sm"
            onClick={handleLoadMore}
          >
            Load more products
          </button>
          <button
            className="bg-red-600 text-white p-3 rounded-sm"
            onClick={handleLoadLess}
          >
            Load Less products
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
        <div className="flex gap-[48rem]">
          <h3 className="font-bold text-black my-3">Best selling</h3>
          <button className="bg-red-600 rounded-sm w-26 h-11 pl-5 pr-5 text-white text-[12px]">
            View more
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {ProductsImage.map((product, index) => (
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
                <button
                  className="bg-black text-white p-2 text-sm rounded-sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="my-3 text-red-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black w-[1050px] h-[400px] mx-28 rounded-md my-32">
        <div className="flex gap-6">
          <div className="mx-28 py-20">
            <p className="text-blue-400 font-semibold text-[20px]">Category</p>
            <h2 className="text-white font-medium text-[30px]">
              Enhance you <br />
              Tech Knowledge
            </h2>
            <ul className="flex gap-10 text-black font-semibold py-8 -mx-5">
              <li className="bg-white pt-2 w-10 h-10 rounded-[50%] text-center">
                {countDays}
                <br />
                <span className="text-white text-[10px]">Days</span>
              </li>
              <li className="bg-white pt-2 w-10 h-10 rounded-[50%] text-center">
                {countHours}
                <br />
                <span className="text-white text-[10px]">Hours</span>
              </li>
              <li className="bg-white pt-2 w-10 h-10 rounded-[50%] text-center">
                {countMinutes}
                <br />
                <span className="text-white text-[10px]">Minutes</span>
              </li>
              <li className="bg-white pt-2 w-10 h-10 rounded-[50%] text-center">
                {countSeconds}
                <br />
                <span className="text-white text-[10px]">Seconds</span>
              </li>
            </ul>
            <button className="bg-blue-500 py-3 px-5 -my-10 text-white rounded-sm">
              Buy Now
            </button>
          </div>
          <img
            src="../images (5).jpg"
            className="w-[500px] h-[300px] my-10 mx-32"
          ></img>
        </div>
      </div>
      <div className="mx-28 my-10">
      <h4 className="text-red-600 border-l-8 pl-2 border-red-600 text-[20px]">
        New Products
        </h4>
        <div className="flex gap-[48rem]">
          <h3 className="font-bold text-black my-3">Explore new products</h3>
         </div>
         <div className="grid grid-cols-3 gap-4 mt-4">
          {NewProducts.map((product, index) => (
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
                <button
                  className="bg-black text-white p-2 text-sm rounded-sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="my-3 text-red-500"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex text-center mx-96 mt-4">
          <button
            className="bg-red-600 text-white p-3 rounded-sm"
            onClick={handleLoadMore}
          >
           View more Products
          </button>
        </div>
  
      </div>
      <div className="mx-28 my-36">
        <div className="text-center ">
          <FontAwesomeIcon icon={faCar} className="w-12 h-12 "/>
          <FontAwesomeIcon icon={faShield} className="w-12 h-12 mx-36 "/>
          <FontAwesomeIcon icon={faHeadphones} className="w-12 h-12 "/>



        </div>
        <div>
          <ul className="flex text-[15px] font-semibold text-black gap-10 mx-52 my-10">
            <li>Free and Fast delivery</li>
            <li>24/7 customer care</li>
            <li>Money Transaction security</li>
          </ul>
          <ul className="flex text-[12px] font-medium text-black gap-10 mx-52 -my-2">
            <li>Bring your products at time</li>
            <li>Bring your products at time</li>
            <li>Bring your products at time</li>
          </ul>
        </div>

      </div>
      <div>
        <UserFooter/>
        
      </div>
    </div>
  );
};

export default Userlanding;
