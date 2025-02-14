import React, { useState } from 'react';
import { GiSmallFire } from 'react-icons/gi';

const WhatsappBooking = () => {

     const handleWhatsappClick=()=> {
      const phoneNumber = "27719270935"; // Replace with the actual phone number
      const message = `Hi my name is ${formData.name} and I would like to book a ${formData.type} service on ${formData.date}.`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    }

  const [selected, setSelected] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    date: 'Saturday'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsappClick();
    // Create your object (formData is already the object)
    console.log(formData);
    // Now you can use formData for other purposes, e.g., sending to an API or updating the UI
  };

  const handleClick = (value) => {
    setSelected(value);
    setFormData(prevData => ({
        ...prevData,
        type: value
    })) // Directly update with the value
  };

  const handleDateChange = (value) => {
    setFormData(prevData => ({
        ...prevData,
        date: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Your:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name whatsapp"
      />

      <div>
        <button

          className={selected === "small" ? 'selectCar' : ''}
          type="button" // Use type="button" to prevent form submission
          onClick={() => handleClick("small")}
        >
          Small Car
        </button>
        <button
          className={selected === "medium" ? 'selectCar' : ''}
          type="button"
          onClick={() => handleClick("medium")}
        >
          Medium Car
        </button>
        <button
          className={selected === "large" ? 'selectCar' : ''}
          type="button"
          onClick={() => handleClick("large")}
        >
          Large Car
        </button>
      </div>
      <div>
        <div>Select date:</div>
        <button type="button" onClick={()=>handleDateChange("Saturday")}>Saturday</button>
        <button type="button"  onClick={()=>handleDateChange("Sunday")}>Sunday</button>
      </div>
      
      <button type="submit" >Submit</button>
    </form>
  );
};

export default WhatsappBooking;
