import React, { useState } from "react";
import { FaHome, FaShoppingCart, FaUser, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full p-4 shadow-sm z-50 ${
          darkMode ? "bg-gray-800 text-white" : "bg-orange-200 text-black"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">ShopsPhere</h1>
          </div>

          {/* Links for larger screens */}
          <ul className="hidden md:flex space-x-6 mx-6">
            <li>
              <a
                href="#"
                className={`hover:underline  ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Kids
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:underline ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Men Wear
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:underline ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Trendy
              </a>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="relative flex-1 mx-5 max-w-[300px]">
            <input
              type="text"
              placeholder="Search"
              className={`w-full px-3 py-2 rounded-full border focus:outline-none ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            />
            <button
              className={`absolute right-3 top-2 ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              🔍
            </button>
          </div>

          {/* Dark Mode Toggle for Larger Screens */}
          <button
            onClick={toggleDarkMode}
            className={`hidden md:flex items-center px-4 py-2 rounded-full ${
              darkMode ? "bg-gray-600 text-yellow-400" : "bg-gray-300 text-black"
            }`}
          >
            {darkMode ? (
              <>
                <FaMoon className="mr-2" />
                Dark Mode
              </>
            ) : (
              <>
                <FaSun className="mr-2" />
                Light Mode
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Fixed Bottom Navigation for Small Screens */}
      <div
        className={`fixed bottom-0 left-0 w-full p-3 z-20 ${
          darkMode ? "bg-gray-800 text-white" : "bg-orange-200 text-black"
        } flex justify-around items-center md:hidden`}
      >
        {/* Home Icon */}
        <button className="flex flex-col items-center">
          <FaHome size={24} />
          <span className="text-sm">Home</span>
        </button>

        {/* Cart Icon */}
        <button className="flex flex-col items-center">
          <FaShoppingCart size={24} />
          <span className="text-sm">Cart</span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          className="flex flex-col items-center"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <>
              <FaMoon size={24} />
              <span className="text-sm">Dark</span>
            </>
          ) : (
            <>
              <FaSun size={24} />
              <span className="text-sm">Light</span>
            </>
          )}
        </button>

        {/* User Icon */}
        <button className="flex flex-col items-center">
          <FaUser size={24} />
          <span className="text-sm">Profile</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
