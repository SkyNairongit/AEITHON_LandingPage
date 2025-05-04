import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0b1d3a] px-6 py-4 flex justify-between items-center border-b border-gray-700 shadow-md relative z-10">
      {/* Logo as Home Link */}
      <a href="/" className="flex items-center space-x-2">
        <span className="text-yellow-400 text-2xl font-bold">A</span>
        <span className="text-white text-xl font-semibold tracking-wide">EITHON</span>
        <span className="text-gray-400 text-xs ml-1 hidden sm:inline">
        AEITY Innovation & Incubation Centre (AIIC)
        </span>
      </a>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>

      {/* Menu Items */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
        <li className="hover:text-yellow-400 cursor-pointer">About AIIC</li>
        <li className="hover:text-yellow-400 cursor-pointer">Programs</li>
        <li className="hover:text-yellow-400 cursor-pointer">Startup Support</li>
        <li className="hover:text-yellow-400 cursor-pointer">Events & Blog</li>
        <li className="hover:text-yellow-400 cursor-pointer">Partners</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-[#0b1d3a] text-white text-sm font-medium flex flex-col items-start p-4 space-y-3 shadow-md">
          <li className="hover:text-yellow-400 cursor-pointer">About AIIC</li>
          <li className="hover:text-yellow-400 cursor-pointer">Programs</li>
          <li className="hover:text-yellow-400 cursor-pointer">Startup Support</li>
          <li className="hover:text-yellow-400 cursor-pointer">Events & Blog</li>
          <li className="hover:text-yellow-400 cursor-pointer">Partners</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
