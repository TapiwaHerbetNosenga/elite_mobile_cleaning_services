import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const EmailBooking = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", date: "" });
  const [status, setStatus] = useState("");
  const [selected, setSelected] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_5qxu9dg",
      "template_8fim1sg",
      {
        name: formData.name,
        email: formData.email,
        type: formData.type,
        date: formData.date
      },
      "tQOc7YZrLIDrzk1wY"
    )
      .then(() => setStatus("Email sent successfully!"))
      .catch(() => setStatus("Failed to send email."));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.type || !formData.date) {
      alert("Please fill out all fields.");
      return;
    }

    sendEmail(e);
    console.log(formData);
  };

  const handleClick = (value) => {
    setSelected(value);
    setFormData(prevData => ({
      ...prevData,
      type: value,
    }));
  };

  const handleDateChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      date: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md"> {/* Form styling */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Your Name"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Service Type:</label>
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          {/* Changed to flex-col for vertical stacking on small screens */}
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

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Select Date:</label>
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          {/* Changed to flex-col for vertical stacking on small screens */}
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

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        Send Email
      </button>
      {status && <p className="mt-2 text-green-500">{status}</p>} {/* Added margin-top */}
    </form>
  );
};

export default EmailBooking;
