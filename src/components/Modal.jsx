import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content flex flex-col justify-center items-center p-4 md:p-6" onClick={e => e.stopPropagation()}>
        <button className="close-button absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 text-2xl md:text-3xl" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
