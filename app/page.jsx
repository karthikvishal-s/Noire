'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Persona from "@/components/Persona";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div>
        <HeaderSlider />
        <Persona/>
        <FeaturedProduct />
        <HomeProducts />
        
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
