import React from 'react';
import { FaLock, FaShippingFast, FaCreditCard, FaTag } from 'react-icons/fa';
import f1 from '../assets/fimg.avif'

const Featur = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-8 rounded-lg shadow-md">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0"
       data-aos="left">
        <img
          src={f1} // Replace with your image URL
          alt="Shopping Offer"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      {/* Right Section: Text & Features */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h1 className="overflow-y-hidden text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Winter Sale up to 50% Off
        </h1>
        <p className="text-gray-600 mb-8 text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis inventore iste ratione ex alias quis magni at optio.
        </p>

        {/* Features List */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 bg-purple-200 text-purple-600 rounded-full flex items-center justify-center mr-4">
              <FaLock size={20} />
            </div>
            <span className="text-gray-700">Quality Products</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center mr-4">
              <FaShippingFast size={20} />
            </div>
            <span className="text-gray-700">Fast Delivery</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 bg-green-200 text-green-600 rounded-full flex items-center justify-center mr-4">
              <FaCreditCard size={20} />
            </div>
            <span className="text-gray-700">Easy Payment Method</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center mr-4">
              <FaTag size={20} />
            </div>
            <span className="text-gray-700">Get Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featur;
