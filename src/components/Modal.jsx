// import React from 'react';

// const Modal = ({ isOpen, onClose, children }) => {

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content flex flex-col justify-center items-center p-4 md:p-6" onClick={e => e.stopPropagation()}>
//         <button className="close-button absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 text-2xl md:text-3xl" onClick={onClose}>&times;</button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-200 bg-opacity-10 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl p-2"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
