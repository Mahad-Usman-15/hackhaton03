// components/Header.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartCount } = useCart(); // Get cart count from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsCross, SetIsCross] = useState(false);

  return (
    <header className="w-full shadow-md">
      {/* Navbar Image */}
      {!IsCross && (
        <div className="flex items-center max-md:flex-col gap-6 bg-gradient-to-tr from-blue-700 to-blue-400 text-white px-6 py-3.5 font-[sans-serif]">
          <p className="text-base flex-1 max-md:text-center">
            Don't miss out on our amazing summer sale! Get up to 50% off on a wide range
            of products. Make the most of your summer shopping.
          </p>
          <div>
            <button onClick={() => SetIsCross(true)} className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 cursor-pointer fill-white inline-block"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                />
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Header Content */}
      <div className="flex z-20 items-center justify-between px-4 sm:px-8 py-4 relative">
        {/* Left Section: Hamburger and Brand Name */}
        <div className="flex items-center gap-1">
          {/* Hamburger Menu (Visible only on small screens) */}
          <button
            className="block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>

          {/* Brand Name */}
          <Link href="./">
            <h1 className="text-xl font-bold sm:text-3xl">Bandage</h1>
          </Link>
        </div>

        {/* Center Section: Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-40 lg:static lg:flex lg:items-center bg-gray-100 rounded-md lg:justify-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 text-gray-600 w-full lg:w-auto px-4 py-4 lg:py-0">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/list" className="hover:text-blue-500">
                List
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-blue-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-blue-500">
                Team
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-blue-500">
                Ratings
              </Link>
            </li>
            <li>
              <Link href="/subscribe" className="hover:text-blue-500">
                Subscription
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Section: Add to Cart and Login/Register */}
        <div className="flex justify-center items-center ml-4 gap-1">
          {/* Add to Cart Button */}
          <Link href="/wishlist">
            <button className="ml-2 sm:ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-800 cursor-pointer"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </Link>

          {/* Cart Icon with Item Count */}
          <Link href="/cart">
            <button className="text-sm px-2 py-2 rounded-lg flex items-center gap-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 3M7 13l-3-6M16 17a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Cart Item Count Badge */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          {/* Login/Register */}
          <button className="text-sm px-4 py-2">Login/Register</button>
        </div>
      </div>
    </header>
  );
}