import React from 'react';
import bef1 from "/b1.jpg";
import aft1 from "/a1.jpg";

import { useState } from "react";

// const images = [
//   "https://via.placeholder.com/800x400/FF5733/ffffff?text=Slide+1",
//   "https://via.placeholder.com/800x400/33FF57/ffffff?text=Slide+2",
//   "https://via.placeholder.com/800x400/3357FF/ffffff?text=Slide+3",
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="w-full  mx-auto">
//       <div className="overflow-hidden  ">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((src, index) => (
//             <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
//           ))}
//         </div>
//       </div>
//       <button onClick={prevSlide} className=" -translate-y-1/2 bg-black text-white p-2">
//         ◀
//       </button>
//       <button onClick={nextSlide} className="  -translate-y-1/2 bg-black text-red-500 p-2">
//         ▶
//       </button>
//     </div>
//   );
// };

"use client"; // If using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const images = [
    bef1,
    aft1 ,
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-90"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};




export default Carousel;
