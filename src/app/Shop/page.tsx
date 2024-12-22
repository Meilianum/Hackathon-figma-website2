// Add this at the top of your file
'use client';

import Link from "next/link";
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="border-2 w-full min-h-screen flex flex-col mt-10">
      {/* Header Section */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-grow items-center justify-between md:justify-start gap-10">
            {/* Logo (optional) */}
            <div className="text-xl font-bold">
              <Link href="/">Logo</Link>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden flex items-center" onClick={toggleMenu}>
              <FaBars className="text-2xl cursor-pointer" />
            </div>

            {/* Navigation Links (Desktop) */}
            <nav className={`md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10 ${menuOpen ? 'block' : 'hidden'} md:block`}>
              <Link href="./shop" className="hover:text-gray-900">Shop</Link>
              <a href="./About" className="hover:text-gray-900">About</a>
              <a href="./Contact" className="hover:text-gray-900">Contact</a>
              {/* Mobile Close Icon */}
              <div className="md:hidden flex items-center mt-4">
                <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
              </div>
            </nav>

            {/* Header Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-10">
              <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900" />
              <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
              <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
              <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Header Image */}
        <div className="relative w-full h-auto">
          <img
            src="/images/Group 78.png"
            alt="Header"
            className="w-full h-auto object-cover"
          />
        </div>
      </header>

      {/* Main Section */}
      <div className="w-full h-auto mt-10">
        <img
          src="/images/Group 77.png"
          alt="Main Content"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full mt-10">
        <img src="/images/Group 76.svg" alt="Other Content" className="w-full h-auto" />
      </div>
    </div>
  );
}
