import React from 'react';
import { useState } from 'react';
import WhatsappModal from './WhatsappModal';


const Bookings = () => {

    // const function handleWhatsappClick() {
    //     const phoneNumber = "919999999999"; // Replace with the actual phone number
    //     const message = "Hello, I'm interested in booking a service.";
    //     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    //     window.open(whatsappURL, "_blank");
    //   }

   const [isVisible, setIsVisible] = useState(false);

    function handleClick(){
   setIsVisible(!isVisible);
    // return alert(`${visible}`);
    }

  return (
    <div><WhatsappModal visible={isVisible} /><button onClick={()=>{handleClick()}}>Whatsapp</button></div>
  )
}


export default Bookings;