import React from "react";
import Carousel from "./Carousal";


const AboutUs = () => {
    return(
<div className="w-full grid grid-cols-6 grid-rows-1 gap-4 bg-yellow-500">
   
   <div className="col-span-2"><Carousel /></div> 
    <div className="bg-black col-span-4">
hey
    </div>
</div>
    );
}

export default AboutUs;