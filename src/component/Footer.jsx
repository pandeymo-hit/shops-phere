
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-yellow-400 text-4xl mr-2">🛍️</span>
            ShopsPhere
          </h2>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
            beatae ea recusandae blanditiis veritatis.
          </p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Important Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <FaInstagram size={24} className="hover:text-yellow-400 cursor-pointer" />
            <FaFacebook size={24} className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedin size={24} className="hover:text-yellow-400 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <MdLocationOn size={20} />
            <span>Noida, Uttar Pradesh</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 mt-2">
            <MdPhone size={20} />
            <span>+91 123456789</span>
          </div>
        </div>
      </div>

      {/* Bottom City Skyline */}
      <div className="mt-10 text-center">
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-sm">
            © 2025 ShopsPhere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
