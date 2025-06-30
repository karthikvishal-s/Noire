import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      link:"",
      imgSrc: assets.ethnic,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      link:"",
      imgSrc: assets.kids,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      link:"",
      imgSrc: assets.tops,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-9xl ">
      <div
  className="flex transition-transform duration-700 ease-in-out"
  style={{ transform: `translateX(-${currentSlide * 100}%)`}}
>

        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse min-h-[800px] md:flex-row items-center justify-between  min-w-full"
          >

            
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="w-screen h-[1200px] object-cover shadow-lg"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      
      
      
      
      <div className="flex flex-col items-end justify-center gap-2 mt-8 relative -top-44 -left-10">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-4 w-4  cursor-pointer ${
              currentSlide === index ? "bg-gray-700" : "bg-gray-700/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
