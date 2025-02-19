import React, { useState, useEffect } from "react";
import Logo from "/public/Circular-car-logo.png";
import burger from "/public/burger.svg";

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
      className={`w-full grid grid-cols-6 h-fit py-2 bg-white text-2xl transition-all duration-300 invisible sm:visible ${
        isSticky ? "fixed top-0 bg-black shadow-md z-50" : "relative"
      }`}
    >
      {/* Left Side - Logo and Links */}
      <div className="flex flex-row justify-start items-center w-full col-span-4">
        <div>
          <img
            src={Logo}
            alt="logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-row justify-evenly w-1/2 space-x-2 md:space-x-4">
          {/* Added space-x-2 for smaller screens and space-x-4 for medium and larger screens */}
          <a
            href="#services"
            className="underline hover:text-sky-400 text-gray-600"
          >
            Services
          </a>
          <a
            href="#book-now"
            className="underline hover:text-sky-400 text-gray-600"
          >
            Book Now
          </a>
          <a
            href="#contact"
            className="underline hover:text-sky-400 text-gray-600"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right Side - Contact Info */}
      <div className="flex flex-col justify-center items-end col-span-2 space-y-1 md:space-y-2">
        {/* Added space-y-1 for smaller screens and space-y-2 for medium and larger screens */}
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg md:text-xl text-gray-600">071 927 0935</div>
          <hr className="w-full" />
          <div className="text-lg md:text-xl text-gray-600">
            sales@mobilecleaningct.com
          </div>
        </div>
      </div>
    </div>
  );
};

// const MobileMenu = ()=>{
//   return(
//     <div className="flex flex-row justify-end bg-gray-500 sm:invisible h-fit " id="mobile-menu">
// <div className="h-fit"><img src={burger} width="50px" height="50px"/></div>
//     </div>
//   )
// }

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //   return (
  //     <div className="flex flex-col items-end bg-gray-500 sm:hidden h-fit relative" id="mobile-menu">

  //       <div className="cursor-pointer p-2" onClick={toggleMenu}>
  //         <img src={burger} width="50px" height="50px" alt="Menu" />
  //       </div>

  //       {isOpen && (
  //         <div className="absolute top-full h-100 right-0 bg-white shadow-lg p-4 flex flex-col w-40">
  //           <a href="#services" className="py-2 hover:bg-gray-200">Services</a>
  //           <a href="#book-now" className="py-2 hover:bg-gray-200">Book Now</a>
  //           <a href="#contact" className="py-2 hover:bg-gray-200">Contact Us</a>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  return (
    <div className="relative sm:hidden" id="mobile-menu">
     
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-400 bg-opacity-20 "
          onClick={toggleMenu}
        ></div>
      )}

      {/* Burger Icon  */}
      {!isOpen && (
        <div className="flex flex-row bg-gray-100 w-screen h-20 fixed  left-0 top-0 z-[1000] py-2 pl-2 ">
          
          <div><img src={Logo} className="h-full w-min shadow-md rounded-4xl"/></div>
          <div className="top-2 right-4 z-[1001] cursor-pointer p-2  shadow-md absolute">
            <img
              src={burger}
              width="40px"
              height="40px"
              alt="Menu"
              onClick={toggleMenu}
            />
          </div>
        </div>
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-screen bg-white shadow-lg z-[1000] flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="self-end p-4 text-2xl font-bold"
          onClick={toggleMenu}
        >
          ×
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col items-start p-6 space-y-4 text-lg">
          <a href="#services" className="py-2 hover:bg-gray-200 w-full px-4">
            Services
          </a>
          <a href="#book-now" className="py-2 hover:bg-gray-200 w-full px-4">
            Book Now
          </a>
          <a href="#contact" className="py-2 hover:bg-gray-200 w-full px-4">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
};

export { MobileMenu, NavBar };
