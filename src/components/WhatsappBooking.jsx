import React, { useState } from 'react';

const WhatsappBooking = () => {
  const handleWhatsappClick = () => {
    const phoneNumber = "27719270935";
    const message = `Hi, my name is ${formData.name} and I would like to book a ${formData.type} service on ${formData.date}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const [selected, setSelected] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    date: ''
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
    console.log(formData);
  };

  const handleClick = (value) => {
    setSelected(value);
    setFormData(prevData => ({
      ...prevData,
      type: value
    }));
  };

  const handleDateChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      date: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md"> {/* Form styling */}
      <div className="mb-4"> {/* Input group styling */}
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required // Make name input required
        />
      </div>

      <div className="mb-4"> {/* Button group styling */}
        <label className="block text-gray-700 font-medium mb-2">Service Type:</label> {/* Label for buttons */}
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"> {/* Button spacing */}
          <button
            className={`px-4 py-2 rounded ${selected === "small" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 hover:text-white focus:outline-none`}  
            type="button"
            onClick={() => handleClick("small")}
          >
            Small Car
          </button>
          <button
            className={`px-4 py-2 rounded ${selected === "medium" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 hover:text-white focus:outline-none`}
            type="button"
            onClick={() => handleClick("medium")}
          >
            Medium Car
          </button>
          <button
            className={`px-4 py-2 rounded ${selected === "large" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 hover:text-white focus:outline-none`}
            type="button"
            onClick={() => handleClick("large")}
          >
            Large Car
          </button>
        </div>
      </div>

      <div className="mb-4"> {/* Date selection styling */}
        <label className="block text-gray-700 font-medium mb-2">Select Date:</label>
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"> {/* Date button spacing */}
          <button
            className={`px-4 py-2 rounded ${formData.date === "Saturday" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 hover:text-white focus:outline-none`}
            type="button"
            onClick={() => handleDateChange("Saturday")}
          >
            Saturday
          </button>
          <button
            className={`px-4 py-2 rounded ${formData.date === "Sunday" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 hover:text-white focus:outline-none`}
            type="button"
            onClick={() => handleDateChange("Sunday")}
          >
            Sunday
          </button>
        </div>
      </div>

      <button type="submit" className="w-full bg-green-400 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"> {/* Submit button styling */}
        Send Message
      </button>
    </form>
  );
};

export default WhatsappBooking;
