import React, { useState } from 'react';

const EmailBooking = () => {
  const handleEmailClick = () => {
    const email = "herbetnosenga5@gmail.com@example.com"; // Replace with the actual email address
    const subject = "Booking Request";
    const message = `Hi, my name is ${formData.name} and I would like to book a ${formData.type} service on ${formData.date}.`;
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoURL;
  };

  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    date: 'Saturday',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.type) {
      alert("Please fill out all fields.");
      return;
    }

    handleEmailClick();
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Your namer:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
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
        <button type="button" onClick={() => handleDateChange("Saturday")}>Saturday</button>
        <button type="button" onClick={() => handleDateChange("Sunday")}>Sunday</button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailBooking;
