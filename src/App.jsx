import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar";
import WinterSale from "./component/WinterSale";
import Featur from "./component/Featur";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Testimonials from "./component/Testimonials";
import Cart from "./cart/cart";

function App() {
  const [cart, setCart] = useState([]); // State to manage cart items
  const [showCart, setShowCart] = useState(false); // Toggle cart view

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product already exists, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product is not in the cart, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter> {/* Make sure your app is wrapped in BrowserRouter */}
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} onCartClick={() => setShowCart(true)} />
      {showCart ? (
        <Cart cart={cart} onClose={() => setShowCart(false)} onRemove={handleRemoveFromCart} />
      ) : (
        <>
          <WinterSale />
          <Product addToCart={addToCart} />
          <Featur />
          <Product addToCart={addToCart} />
          <Testimonials />
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}

export default App;
