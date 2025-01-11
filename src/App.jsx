import React,{useEffect} from 'react'
import './index.css'
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from './component/Navbar'
import WinterSale from './component/WinterSale'
import Featur from './component/Featur'
import Product from './component/Product'
import Footer from './component/Footer'
import Testimonials from './component/Testimonials'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Animation easing
      once: false,
      mirror:true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
    <Navbar/>
    <WinterSale/>
    <Product/>
    <Featur/>
    <Product/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
