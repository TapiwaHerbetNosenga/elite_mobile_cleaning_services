import React from 'react'

const Modal = ({isOpen, onClose, children}) => {

 if (!isOpen) return null;

  return (
    <div  className="modal-overlay" onClick={onClose}> 
    <div className='modal-content flex flex-col justify-center items-center' onClick={e => e.stopPropagation()}>
       <button className='close-button absolute top-4 right-10 w-4 h-4' onClick={onClose}>&times;</button>
       {children}
    </div>
    </div>
  );
}

export default Modal;