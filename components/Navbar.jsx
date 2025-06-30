"use client"
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={`sticky top-0 z-50 md:static bg-white md:h-auto relative pt-2 pb-2 h-24 md:h-auto flex items-center px-6 md:px-16 lg:px-32 mb-0 text-gray-600 
  ${isMenuOpen ? '' : 'shadow-md border-b border-gray-200'}
`}>
        <div className="flex flex-col justify-around items-center w-full max-w-6xl mx-auto">

          <div className="relative flex items-center justify-between w-full md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Image src={assets.menu_icon} alt="menu" className="w-6 h-6" />
            </button>

            <Link href="/" className="text-5xl font-semibold">Noire</Link>

            <Link href="/cart">
              <Image src={assets.cart} alt="cart icon" className="w-6 h-6" />
            </Link>
          </div>

          <div
            className={`md:hidden absolute left-0 top-[calc(100%-1px)] w-full z-50 bg-white px-6 flex flex-col gap-4 text-lg
    transition-all duration-300 ease-in-out overflow-hidden
${isMenuOpen ? 'max-h-96 py-4 shadow-lg border-b border-gray-200' : 'max-h-0 py-0 border-none shadow-none'}
  `}
          >
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link href="/all-products" onClick={() => setIsMenuOpen(false)}>Luxe</Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>The Loop</Link>
          </div>

          <div className="hidden md:flex items-center justify-between w-full h-full">
            <Link href="/" className="text-4xl font-semibold">Noire</Link>

            <div className="ml-12 border border-gray-300 rounded-full flex items-center px-3 py-1.5 w-full max-w-[400px]">
              <Image className="w-6 h-6" src={assets.search_icon} alt="search icon" />
            </div>

            <div className="flex gap-4 items-center">
              <Link href="/">
                <Image src={assets.user_icon} alt="user icon" className="w-7 h-7" />
              </Link>
              <Link href="/cart">
                <Image src={assets.cart} alt="cart icon" className="w-7 h-7" />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex text-xl w-[600px] flex  justify-between items-center lg:gap-8 mt-7 mb-6">
            <Link href="/" className="hover:text-gray-900 underline-animation">
              Shop
            </Link>
            <Link href="/all-products" className="hover:text-gray-900 underline-animation">
              Luxe
            </Link>
            <Link href="/" className="hover:text-gray-900 underline-animation">
              Our Story
            </Link>
            <Link href="/" className="hover:text-gray-900 underline-animation">
              The Loop
            </Link>



          </div>

        </div>

        <ul className="hidden md:flex items-center gap-4 ">


        </ul>

      </nav>

    </>
  );
};

export default Navbar;