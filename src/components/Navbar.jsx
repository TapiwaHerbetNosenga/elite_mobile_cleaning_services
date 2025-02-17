import React, { useState, useEffect } from "react";
import Logo from "/public/Circular-car-logo.png";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="pageNav"
      className={`w-full grid grid-cols-6 h-fit py-2 text-white text-2xl transition-all duration-300 ${
        isSticky ? "fixed top-0 bg-black shadow-md z-50" : "relative"
      }`}
    >
      {/* Left Side - Logo and Links */}
      <div className="flex flex-row justify-start items-center w-full col-span-4">
        <div>
          <img src={Logo} alt="logo" width={80} height={80} className="rounded-full" />
        </div>
        <div className="flex flex-row justify-evenly w-1/2">
          <p className="underline">Services</p>
          <p className="underline">Book Now</p>
          <p className="underline">Contact Us</p>
        </div>
      </div>

      {/* Right Side - Contact Info */}
      <div className="flex flex-col justify-center items-end col-span-2">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl">071 927 0935</div>
          <hr className="w-full" />
          <div className="text-xl">sales@mobilecleaningct.com</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
