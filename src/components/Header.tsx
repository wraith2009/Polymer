"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event to update scrollY state
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set opacity based on scroll position
  const opacity = Math.max(1 - scrollY / 200, 0); // Adjust the 200 value to control fade speed

  return (
    <header
      className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50 transition-opacity duration-300"
      style={{ opacity }} // Apply opacity
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/" className="h-20 w-20">
            <img src="/molecule.png" className="h-8 w-8" alt="Logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About Us
          </a>
          <a
            href="#products"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Products
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
