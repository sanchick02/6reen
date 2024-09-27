import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/6reen-logo.png";

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-xl font-bold">
          <img src={logo} alt="logo" className="w-24 h-12 md:w-28 md:h-16" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/about-us" className="text-black hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/app"
              className="bg-[#50D0BF] hover:bg-[#4088FF] text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Get the app
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/about-us"
                className="text-black hover:text-gray-300 block"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/app"
                className="bg-[#50D0BF] hover:bg-[#4088FF] text-white font-bold py-2 px-4 rounded-lg transition duration-300 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get the app
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigationbar;
