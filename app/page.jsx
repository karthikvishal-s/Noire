'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Persona from "@/components/Persona";
import ModeToggle from "@/components/ModeToggle";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div>
        <HeaderSlider />
        <Persona/>
        
        <NewsLetter />
        <Chatbot />

  
        <Footer />
        
      </div>
      
    </>
  );
};

export default Home;
