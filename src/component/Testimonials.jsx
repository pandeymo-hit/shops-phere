import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaQuoteRight } from "react-icons/fa";
import timg from "../assets/cimg.jpg"; // Replace with your actual image

const testimonials = [
  {
    name: "Sachin Tendulkar",
    image: timg, // Replace with actual image URL
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaqua reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    name: "Victor",
    image: timg, // Replace with actual image URL
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaqua reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    name: "Satya Nadella",
    image: timg, // Replace with actual image URL
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaqua reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
     autoplaySpeed: 3000, // Auto-slide interval (in milliseconds)
    pauseOnHover: true, // Pause auto-slide on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h3 className="text-yellow-500 uppercase font-semibold text-sm">
          What our customers are saying
        </h3>
        <h2 className="overflow-y-hidden text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi.
        </p>
      </div>

      {/* Slider Section */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className=" px-4">
            <div className=" bg-white rounded-lg p-6 shadow-lg h-full text-center">
              {/* Customer Image */}
              <div className="overflow-y-hidden relative w-20 h-20 mx-auto mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-full h-full object-cover shadow"
                />
              </div>
              {/* Feedback */}
              <p className="text-gray-600 text-sm mb-4 italic">
                "{testimonial.feedback}"
              </p>
              {/* Customer Name */}
              <h4 className="overflow-y-hidden font-bold text-gray-800">{testimonial.name}</h4>
              {/* Quote Icon */}
              <FaQuoteRight
                size={30}
                className="text-gray-300 mt-2 mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
