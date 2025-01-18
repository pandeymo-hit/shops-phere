import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the cross icon

const Cart = ({ cart, onClose, onRemove }) => {
  return (
    <div className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center">Your Cart</h1>
        {cart.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-md p-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-bold">{item.name}</h3>
                    <p className="text-xs text-gray-600">Rating: {item.rating}</p>
                    <p className="text-sm font-semibold">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onRemove(item.id)} // Trigger remove item
                >
                  <FaTimes size={20} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-4">Your cart is empty.</p>
        )}
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-full mt-2"
          onClick={onClose}
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
