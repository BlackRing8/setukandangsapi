"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/footage/1g.jpeg",
    name: "Pemancingan",
    description: "Lorem ipsum dolor sit amet..",
    link: "https://www.instagram.com/reel/CyTGGPSvZ93/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/footage/f6.jpeg",
    name: "Perahu bebek",
    description: "Lorem ipsum dolor sit amet.",
    link: "https://www.instagram.com/tv/CdN6zKQBc9Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/footage/f1.jpeg",
    name: "Running Track",
    description: "Lorem ipsum dolor sit amet.",
    link: "https://www.instagram.com/reel/CxkGpCmvNF-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const Fasilitas = () => {
  return (
    <section className="relative mb-12 xl:mb-48 p-8  mt-10">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-0 sm:mb-12 xl:h-[300px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4 font-semibold text-3xl sm:text-5xl">Fasilitas</h2>
          <p className="mb-8 sm:text-xl">Di Setu kandang sapi ini kami memiliki beberapa fasilitas yang cukup menarik.</p>
          <Link href="/kontakkami">
            <Button className="font-bold ">Hubungi Kami!</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesperview={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
