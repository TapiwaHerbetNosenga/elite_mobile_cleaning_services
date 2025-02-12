import React from "react";
import Logo from "/public/Circular-car-logo.png";

const NavBar = () => {
  return (
    <div
      id="pageNav"
      className="w-full flex flex-row justify-around items-end h-fit py-2 bg-red-700 text-5xl "
    >
      <div>
        <img src={Logo} alt="logo" width={80} height={80} />
      </div>
      <div className="flex flex-row justify-between w-1/2">
        <p>Services</p> <p>Book Now</p> <p>Contact Us</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl">012 345 6789</div>
        <hr className="bg-black w-full h-1" />
        <div className="text-2xl">anesu@gmail.com</div>
      </div>
      
    </div>
  );
};

export default NavBar;
