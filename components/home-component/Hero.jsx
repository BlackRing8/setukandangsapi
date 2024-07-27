"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = ["/footage/bg-setu.jpeg", "/footage/4g.jpeg"];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex w-full h-screen sm:h-[600px] setu bg-bottom items-center" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white  md:text-5xl lg:text-6xl uppercase">selamat datang di setu kandang sapi</h1>
        <p className="uppercase text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Surga terpencil di kampung tanah baru</p>
      </div>
    </section>
  );
};

export default Hero;
