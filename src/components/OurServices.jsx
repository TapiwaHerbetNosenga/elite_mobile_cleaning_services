import React from "react";
import sedan from "/public/sedan.svg";
import suv from "/public/suv.svg";
import truck from "/public/truck.svg";

const OurServices = () => {
  return (
    <div id="services" className="flex flex-col mt-5">
      <div className="text-gray-600 text-5xl text-center mb-8">Our Services</div> {/* Added text-center and margin-bottom for title */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8 bg-gray-100"> {/* Adjusted grid columns for different screen sizes */}
      
        {/* Sedan Card */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col justify-center items-center border-2 border-black bg-white p-6 shadow-lg w-full sm:w-3/4 md:w-6/10"> {/* Adjusted width for different screen sizes */}
            <img src={sedan} className="w-24 h-24 object-contain mb-3" alt="Sedan" /> {/* Added alt attribute */}
            <p className="text-center font-semibold text-2xl">Sedan/Small Car</p>
            <p>Comprehensive car wash for Small Sedan type cars, includes an exterior wash, interior vacuum clean and tire shine.</p>
            <p className="text-center text-gray-600 font-bold text-xl">R200</p>
          </div>
        </div>

        {/* SUV Card */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col justify-center items-center border-2 border-black bg-white p-6 shadow-lg w-full sm:w-3/4 md:w-6/10"> {/* Adjusted width for different screen sizes */}
            <img src={suv} className="w-24 h-24 object-contain mb-3" alt="SUV" /> {/* Added alt attribute */}
            <p className="text-center font-semibold text-2xl">SUV/Medium Car</p>
            <p>A full service SUV cleaning that includes an exterior wash, interior detailing and vacuum, dashboard polish and tire shine.</p>
            <p className="text-center text-gray-600 font-bold text-xl">R250</p>
          </div>
        </div>

        {/* Truck Card */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col justify-center items-center border-2 border-black bg-white p-6 shadow-lg w-full sm:w-3/4 md:w-6/10"> {/* Adjusted width for different screen sizes */}
            <img src={truck} className="w-34 h-30 object-contain scale-x-[-1] mb-3" alt="Truck" /> {/* Added alt attribute */}
            <p className="text-center font-semibold text-2xl">Bucci/Large Car</p>
            <p>Specialized wash for Bakkies that includes an exterior wash, bed cleaning and complete interior detailing.  </p>
            <p className="text-center text-gray-600 font-bold text-xl">R300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
