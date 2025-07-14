"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import ModeToggle from "@/components/ModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 md:static relative pt-0 md:pt-4 h-24 md:h-auto flex items-center px-6 md:px-16 lg:px-32 mb-0 
      text-gray-600 dark:text-gray-200 
      ${isMenuOpen ? "" : "shadow-md border-b border-gray-200 dark:border-gray-700"} 
      bg-white dark:bg-black transition-colors duration-300`}
    >
      <div className="flex flex-col justify-around items-center w-full max-w-6xl mx-auto">
        {/* Mobile Top Row */}
        <div className="relative flex items-center justify-between w-full md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src={assets.menu_icon} alt="menu" className="w-6 h-6 invert dark:invert-0" />
          </button>

          <Link href="/" className="text-5xl font-semibold text-black dark:text-white">
            Noire
          </Link>

          <Link href="/cart">
            <Image src={assets.cart} alt="cart icon" className="w-6 h-6 invert dark:invert-0" />
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute left-0 top-[calc(100%-1px)] w-full z-50 bg-white dark:bg-black px-6 flex flex-col gap-4 text-lg 
          transition-all duration-300 ease-in-out overflow-hidden 
          ${isMenuOpen ? "max-h-96 py-4 shadow-lg border-b border-gray-200 dark:border-gray-700" : "max-h-0 py-0 border-none shadow-none"}`}
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link href="/all-products" onClick={() => setIsMenuOpen(false)}>Luxe</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>The Loop</Link>
        </div>

        {/* Desktop Main Row */}
        <div className="hidden md:flex justify-between w-full h-full items-center">
          {/* Brand */}
          <Link href="/" className="text-3xl font-semibold text-black dark:text-white">
            Noire
          </Link>

          {/* Search Box */}
          <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-full flex items-center px-3 py-1.5 w-full max-w-[400px]">
            <Image className="w-6 h-6 invert dark:invert-0" src={assets.search_icon} alt="search icon" />
            <form>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full h-full outline-none px-2 text-gray-700 dark:text-gray-200 bg-transparent ml-1"
              />
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex gap-10 items-center">
            <ModeToggle />
            <Link href="/">
              <Image src={assets.user_icon} alt="user icon" className="w-7 h-7 invert dark:invert-0" />
            </Link>
            <Link href="/cart">
              <Image src={assets.cart} alt="cart icon" className="w-7 h-7 invert dark:invert-0" />
            </Link>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-xl w-[600px] justify-between items-center lg:gap-8 mt-7 mb-6">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white underline-animation">
            Shop
          </Link>
          <Link href="/all-products" className="hover:text-gray-900 dark:hover:text-white underline-animation">
            Luxe
          </Link>
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white underline-animation">
            Our Story
          </Link>
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white underline-animation">
            The Loop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
