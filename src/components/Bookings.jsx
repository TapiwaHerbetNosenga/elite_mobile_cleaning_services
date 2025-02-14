import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import car from "/carwash.jpg"
import WhatsappBooking from "./WhatsappBooking";
import EmailBooking from "./EmailModal";

const Bookings = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);

  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-col col-span-2"> <button onClick={() => setModalOpen(true)}>Book Via Whatsap</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <WhatsappBooking />
      </Modal>
      <button onClick={() => setEmailOpen(true)}>Book Via Email</button>
      <Modal isOpen={isEmailOpen} onClose={() => setEmailOpen(false)}>
        <EmailBooking />
        </Modal></div>
      <div className="bg-blue-500 w-full col-span-2">
      <img src={car} alt="car" className="w-full h-80 object-cover" />
      </div>
      

    </div>
  );
};

export default Bookings;
