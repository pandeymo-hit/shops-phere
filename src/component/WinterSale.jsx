import React from "react";
import bg from "../assets/s.png";

const WinterSale = () => {
  return (
    <div
      className="mt-[70px] relative bg-gray-100 p-8 lg:p-16 rounded-lg shadow-lg overflow-hidden"
      data-aos="fade-left"
    >
      {/* Background Shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-yellow-200 -skew-x-12 transform origin-top-left z-0"
        data-aos="fade-up"
      ></div>

      {/* Content Section */}
      <div className="overflow-y-hidden relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Right Section: Image */}
        <div
          className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          data-aos="fade-up"
        >
          <img
            src={bg}
            alt="Shopping"
            className="max-w-full h-auto"
          />
        </div>

        {/* Left Section: Text */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-left"
        >
          <h1 className="overflow-y-hidden text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Upto 50% off on all Men's Wear
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem His Life will forever be Changed dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            data-aos="zoom-in"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinterSale;
