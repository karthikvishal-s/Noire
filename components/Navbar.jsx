"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { isSeller, router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 mb-0 pb-20 border-gray-300 text-gray-700 ">
      <div className="flex flex-col justify-around items-center w-full max-w-6xl mx-auto">

      <div className="flex items-center justify-between w-full">
      
      <Link href={"/"} className="flex gap-items-center 2 hover:text-gray-900 transition text-4xl">
        <p>Noirqeqerse</p>
      </Link>
      <div className="ml-40 mt-1 border border-gray-300 rounded-full flex items-center px-3 py-1.5 w-full max-w-[400px]">
      <Image className="w-7 h-7 " src={assets.search_icon} alt="search icon" />
      </div>
      <button className="flex items-center gap-2  transition ml-40">
          <Image src={assets.user_icon} alt="user icon " className="w-10 rounded-full border  "  />

        </button>
      </div>
     
        <div className=" w-[600px] flex  justify-between items-center lg:gap-8 max-md:hidden relative -bottom-12 ">
        <Link href="/" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Luxe
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Our Story
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          The Loop
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className=" px-4 py-1.5 m">Seller</button>}

      </div>
      
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        
        
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        <button className="flex items-center gap-2 hover:text-gray-900 transition w-7 h-7">
          <Image src={assets.user_icon} alt="user icon"  className="w-7 h-7"/>
          
        </button>
      </div>
    </nav>
  );
};

export default Navbar;