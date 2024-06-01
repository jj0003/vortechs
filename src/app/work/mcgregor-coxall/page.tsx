"use client"
import Navigation from "@/components/navigation";
import Link from "next/link";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";



export default function Home() {
  
  return (
    <body className="bg-[#171717] p-5">
      <nav className="sticky top-0 z-50 flex items-center justify-between">
        <h1 className="satoshi-bold-italic text-white">vortechs</h1>
        <Navigation />
      </nav>
      <hr className="mt-20 border-t border-white"/>

      {/* Hero */}
      <div className="flex lg:flex-row flex-col mt-5 gap-10 w-full">
        <h1 className="text-white lg:text-4xl md:text-2xl lg:mr-96 text-2xl uppercase satoshi-regular">
          McGregor Coxall
        </h1>
        <h6 className="flex flex-col text-white">
          Founded in 1998 in Manly, Sydney, McGregor Coxall has grown to over 100 global experts dedicated to designing resilient cities and environments. Guided by the philosophy of Biourbanism, we view cities as interconnected living systems with nature. Our research-led approach aims to create functional, beautiful, and climate-resilient urban environments. We collaborate with clients to add value, meet development goals, enhance ESG performance, mitigate climate risks, and benefit communities and the environment.
          <p className="text-xs mt-4">
            ©2024 All images and materials are copyrighted and owned by McGregor Coxall. ‍
          </p>        
          <Link href={""} className="btn btn-tertiary mt-4 self-start">
            visit live site ↗
          </Link>
        </h6>
      </div>



      {/* Slider */}
      <div className="lg:hidden">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        loop={true}
        modules={[Pagination]}
        className="mySwiper hover:cursor-grab	mt-40"
      >
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall1.jpg" width={500} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall2.jpg" width={500} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall3.jpg" width={500} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall4.jpg" width={500} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall6.jpg" width={500} height={100}></Image>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="lg:block hidden">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
        loop={true}
        modules={[Pagination]}
        className="mySwiper hover:cursor-grab	mt-40"
      >
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall1.jpg" width={1000} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall2.jpg" width={1000} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall3.jpg" width={1000} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall4.jpg" width={1000} height={100}></Image>
        </SwiperSlide>
        <SwiperSlide >
        <Image alt="" className="rounded-md" src="/images/mcgregorcoxall/McGregorCoxall6.jpg" width={1000} height={100}></Image>
        </SwiperSlide>
      </Swiper>

      </div>
      

      {/* What We Do */}
      <div className="bg-black rounded-md p-5 mt-20 lg:mx-20 mx-5  mb-20">
        <h1 className="my-10 satoshi-regular text-white text-center uppercase">More to explore</h1>
        
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-3">
      <div className="lg:h-96 h-48 flex flex-col justify-end">
        <Link href={"/work/peaches-pilates"} className="relative group h-96 block rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/PeachesPilates.jpg')] bg-cover bg-center transition-all duration-300 group-hover:blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="px-3 py-1 uppercase text-black text-xs rounded-full bg-white">
              Explore
            </p>
          </div>
        </Link>
        <h5 className="mt-2 text-white font-light text-sm">
          Peaches Pilates
        </h5>
      </div>
      <div className="lg:h-96 h-48 flex flex-col justify-end">
        <Link href={"/work/deus-ex-machina"} className="relative group h-96 block rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/DeusExMachina.webp')] bg-cover bg-center transition-all duration-300 group-hover:blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="px-3 py-1 uppercase text-black text-xs rounded-full bg-white">
              Explore
            </p>
          </div>
        </Link>
        <h5 className="mt-2 text-white font-light text-sm">
          Deus Ex Machina
        </h5>
      </div>
      <div className="lg:h-96 h-48 flex flex-col justify-end">
        <Link href={"/work/peaches-pilates"} className="relative group h-96 block rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/OceanAndEarth.webp')] bg-cover transition-all duration-300 group-hover:blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="px-3 py-1 uppercase text-black text-xs rounded-full bg-white">
              Explore
            </p>
          </div>
        </Link>
        <h5 className="mt-2 text-white font-light text-sm">
          Ocean And Earth
        </h5>
      </div>
      </div>
      </div>

            
    </body>
  );
}