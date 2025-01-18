import React from "react";
import p1 from "../assets/oip.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const Product = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Women Ethnic", rating: 5, image: p1 },
    { id: 2, name: "Women Western", rating: 4.5, image: p2 },
    { id: 3, name: "Goggles", rating: 4.7, image: p3 },
    { id: 4, name: "Printed T-Shirt", rating: 4.4, image: p1 },
    { id: 5, name: "Fashion T-Shirt", rating: 4.5, image: p2 },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-orange-500 font-semibold text-xl">Top Selling Products for you</h2>
        <h1 className="text-4xl font-bold text-black">Products</h1>
        <div className="mt-10 flex space-x-4 overflow-x-scroll no-scrollbar px-4">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 bg-white shadow-lg rounded-lg p-4 text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-4">{product.name}</h3>
              <button
                onClick={() => addToCart(product)}
                className="bg-orange-500 text-white font-semibold rounded-full mt-2 px-3 py-1"
              >
                Add to cart
              </button>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="ml-1 text-gray-600 font-semibold">{product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
