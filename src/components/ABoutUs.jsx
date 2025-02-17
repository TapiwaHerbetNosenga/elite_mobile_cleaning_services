import React from "react";
import Carousel from "./Carousal";


const AboutUs = () => {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6  p-6 md:p-12  shadow-lg">
        
        {/* Carousel Section */}
        <div className="md:col-span-2 flex justify-center">
          <Carousel />
        </div> 
        
        {/* Text Section */}
        <div className=" md:col-span-4 text-gray-800 flex flex-col justify-center items-center md:items-start p-6">
          <p className="text-xl md:text-2xl font-semibold">"We come to you"</p>
          <p className="text-lg md:text-5xl font-medium mt-2">Mobile Cleaning Services</p>
          <p className="text-base md:text-lg mt-4 max-w-lg text-start md:text-left">
            Experience the ultimate convenience of a professional car wash, wherever you are.
          </p>
        </div>
  
      </div>
    );
  };
  
export default AboutUs;