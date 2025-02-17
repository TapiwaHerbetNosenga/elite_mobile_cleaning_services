import React from "react";
import sedan from "/public/sedan.svg";
import suv from "/public/suv.svg";
import truck from "/public/truck.svg";

const OurServices = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 py-8 bg-gray-100" id="services">
      
      {/* Sedan Card */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col justify-center items-center border-2 border-black bg-white p-6 shadow-lg w-6/10">
          <img src={sedan} className="w-24 h-24 object-contain mb-3" />
          <p className="text-center font-semibold text-2xl">Sedan/Small Car</p>
          <p className="text-center text-gray-600 font-bold text-xl">R200</p>
        </div>
      </div>

      {/* SUV Card */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col justify-center items-center border-2 border-black bg-white p-6 shadow-lg w-6/10">
          <img src={suv} className="w-24 h-24 object-contain mb-3" />
          <p className="text-center font-semibold text-2xl">SUV/Medium Car</p>
          <p className="text-center text-gray-600 font-bold text-xl">R250</p>
        </div>
      </div>

      {/* Truck Card */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col justify-center items-center border-2 border-black bg-white p-6 shadow-lg w-6/10">
          <img src={truck} className="w-34 h-30 object-contain scale-x-[-1] mb-3" />
          <p className="text-center font-semibold text-2xl">Bucci/Large Car</p>
          <p className="text-center text-gray-600 font-bold text-xl">R300</p>
        </div>
      </div>

    </div>
  );
};

export default OurServices;

