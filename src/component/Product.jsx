import React from "react";
import p1 from "../assets/oip.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const Product = () => {
  const products = [
    {
      name: "Women Ethnic",
      color: "white",
      rating: 5,
      image: p1, // Replace with actual image paths
    },
    {
      name: "Women Western",
      color: "Red",
      rating: 4.5,
      image: p2,
    },
    {
      name: "Goggles",
      color: "brown",
      rating: 4.7,
      image: p3,
    },
    {
      name: "Printed T-Shirt",
      color: "Yellow",
      rating: 4.4,
      image: p1,
    },
    {
      name: "Fashion T-Shirt",
      color: "Pink",
      rating: 4.5,
      image: p2,
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="text-orange-500 font-semibold text-xl">
          Top Selling Products for you
        </h2>
        <h1 className="overflow-y-hidden text-4xl font-bold text-black">Products</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi.
        </p>

        {/* Products Scrollable Container */}
        <div className="mt-10">
          <div className="flex space-x-4 overflow-x-scroll no-scrollbar px-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white shadow-lg rounded-lg p-4 text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                <p className="text-gray-500">{product.color}</p>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="ml-1 text-gray-600 font-semibold">
                    {product.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Product;
