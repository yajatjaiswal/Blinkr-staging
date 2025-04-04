import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import fiveMinute from '../assets/5minute.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white text-black rounded-full px-2 sm:px-4 md:px-5 lg:px-5 xl:px-6 py-1 md:py-2 mb-4 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-10 w-[95%] sm:w-[90%] md:w-[90%] lg:w-[85%] xl:w-[60%] mx-auto max-w-4xl shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-1 sm:gap-2">
        <img src={fiveMinute} alt="logo" className="w-10 h-5 sm:w-12 sm:h-6 md:w-14 md:h-7 lg:w-16 lg:h-8 xl:w-20 xl:h-10" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-2 md:space-x-2 lg:space-x-3 xl:space-x-4 text-[11px] md:text-xs lg:text-xs xl:text-sm font-semibold">
        <li className="cursor-pointer">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>Home</NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>About Us</NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/apply/amount-slider" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>Repay</NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>Contact Us</NavLink>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-3">
        <button className="bg-[#8B4CFF] text-white px-2 md:px-2 lg:px-2.5 xl:px-3 py-0.5 md:py-0.5 lg:py-1 rounded-full text-[10px] md:text-[10px] lg:text-[11px] xl:text-sm font-semibold whitespace-nowrap hover:bg-[#7B3CEF] transition-colors duration-200">
          Salaried Loan
        </button>
        <button className="bg-[#8B4CFF] text-white px-2 md:px-2 lg:px-2.5 xl:px-3 py-0.5 md:py-0.5 lg:py-1 rounded-full text-[10px] md:text-[10px] lg:text-[11px] xl:text-sm font-semibold whitespace-nowrap hover:bg-[#7B3CEF] transition-colors duration-200">
          Business Loan
        </button>
      </div>

      {/* Center Buttons for Mobile */}
      <div className="flex md:hidden space-x-1">
        <button className="bg-[#8B4CFF] text-white px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-semibold whitespace-nowrap hover:bg-[#7B3CEF] transition-colors duration-200">
          Salaried Loan
        </button>
        <button className="bg-[#8B4CFF] text-white px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-semibold whitespace-nowrap hover:bg-[#7B3CEF] transition-colors duration-200">
          Business Loan
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 p-1 hover:text-[#8B4CFF] transition-colors duration-200">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
        {menuOpen && (
          <ul className="absolute right-0 w-32 sm:w-36 bg-white shadow-lg rounded-lg overflow-hidden text-black z-50 mt-2">
            <li className="hover:bg-gray-50 px-3 py-1.5 cursor-pointer text-xs sm:text-sm border-b border-gray-100">
              <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>Home</NavLink>
            </li>
            <li className="hover:bg-gray-50 px-3 py-1.5 cursor-pointer text-xs sm:text-sm border-b border-gray-100">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>About Us</NavLink>
            </li>
            <li className="hover:bg-gray-50 px-3 py-1.5 cursor-pointer text-xs sm:text-sm border-b border-gray-100">
              <NavLink to="/apply/amount-slider" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>Repay</NavLink>
            </li>
            <li className="hover:bg-gray-50 px-3 py-1.5 cursor-pointer text-xs sm:text-sm">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#8B4CFF] font-bold' : 'text-gray-700 hover:text-[#8B4CFF] transition-colors duration-200'}>Contact Us</NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
