import React from "react";

const ServiceCard = ({ car, type, description, price }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={car} className="w-20" />
      <p>{type}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ServiceCard;
