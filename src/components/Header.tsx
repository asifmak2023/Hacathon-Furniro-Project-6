'use client'
import { useState } from 'react';  // Import useState hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  // State to control the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);  // Toggle the state between true and false
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-lg">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-gray-800">
        <a href="#" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Furniro Logo" className="w-8 h-8" />
          <span>Furniro</span>
        </a>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex space-x-8 text-gray-700">
        <a href="/" className="hover:text-yellow-600 transition duration-300">Home</a>
        <a href="/shop" className="hover:text-yellow-600 transition duration-300">Shop</a>
        <a href="/blog" className="hover:text-yellow-600 transition duration-300">Blog</a>
        <a href="/contact" className="hover:text-yellow-600 transition duration-300">Contact</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black-700 hover:text-yellow-600 transition duration-300">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#" className="text-black-700 hover:text-yellow-600 transition duration-300">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="#" className="text-black-700 hover:text-yellow-600 transition duration-300">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="/cart" className="text-black-700 hover:text-yellow-600 transition duration-300">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Navigation Menu (Toggled by state) */}
      <div
        id="mobile-menu"
        className={`${isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg px-6 py-4 space-y-4`}>
        <a href="/" className="block text-gray-700 hover:text-yellow-600 transition duration-300">Home</a>
        <a href="/shop" className="block text-gray-700 hover:text-yellow-600 transition duration-300">Shop</a>
        <a href="/blog" className="block text-gray-700 hover:text-yellow-600 transition duration-300">Blog</a>
        <a href="/contact" className="block text-gray-700 hover:text-yellow-600 transition duration-300">Contact</a>
      </div>
    </header>
  );
}
