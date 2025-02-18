import React, { useState } from "react";
import Modal from "./Modal";
import car from "/carwash.jpg";
import WhatsappBooking from "./WhatsappBooking";
import EmailBooking from "./EmailModal";

const Bookings = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mb-8 "  id="book-now" >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  px-6 py-8  bg-blue-400  w-9/10" >
      {/* Booking Options */}
      <div className="flex flex-col justify-center items-center space-y-6" >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Book Your Car Wash</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="w-2/4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-lg shadow-md transition duration-300"
        >
          Book Via WhatsApp
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <WhatsappBooking />
        </Modal>

        <button
          onClick={() => setEmailOpen(true)}
          className="w-2/4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-md transition duration-300"
        >
          Book Via Email
        </button>
        <Modal isOpen={isEmailOpen} onClose={() => setEmailOpen(false)}>
          <EmailBooking />
        </Modal>
      </div>

      {/* Carwash Image */}
      <div className="w-full">
        <img src={car} alt="Car wash" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>
    </div>
    </div>
  );
};

export default Bookings;
