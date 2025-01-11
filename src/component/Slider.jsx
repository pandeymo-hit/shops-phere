import React, { useState } from "react";
import cardimg from '../assets/cimg.jpg'

const Slider = () => {
  const slides = [
    {
      heading: "Upto 50% off on all Men's Wear",
      description:
        "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Order Now",
      image: "https://via.placeholder.com/400", // Replace temporarily

    },
    {
      heading: "New Arrivals for Kids Wear",
      description:
        "Explore the latest trends for kids. Limited time offers available now.",
      buttonText: "Shop Now",
      image: cardimg, // Replace with your image path
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Slide Content */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Text Section */}
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl font-bold text-black">
            {slides[currentSlide].heading}
          </h1>
          <p className="text-gray-600">{slides[currentSlide].description}</p>
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
            {slides[currentSlide].buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div
          className="w-1/2 h-auto bg-orange-200 rounded-tl-full"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 50%)",
          }}
        >
          <img
            src={slides[currentSlide].image}
            alt="Promo"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
