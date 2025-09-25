"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Mini-Ecommerce
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-blue-600 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700 focus:outline-none hover:text-blue-600 transition-colors duration-200 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <HiOutlineMenu
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <HiX
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col bg-white border-t border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 transform hover:translate-x-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Header;
