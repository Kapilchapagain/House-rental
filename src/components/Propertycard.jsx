import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ title, location, price, beds, baths, area, image }) => {
  const navigate=useNavigate();
  return (
    <div className="flex mt-5 items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      
      {/* Left - Image */}
      <div className="w-[120px] h-[90px] rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle - Details */}
      <div className="flex-1 px-4">
        <h2 className="text-md font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>

        <div className="flex gap-4 text-sm text-gray-600 mt-2">
          <span>🛏 {beds} Beds</span>
          <span>🛁 {baths} Baths</span>
          <span>📐 {area} sqft</span>
        </div>
      </div>

      {/* Right - Price + Button */}
      <div className="text-right space-y-2">
        <p className="text-green-600 font-semibold text-md">
          ${price} <span className="text-gray-500 text-sm">/ month</span>
        </p>

        <Button onclick={()=>navigate("/propertydetails")} text="View Details" />
      </div>

    </div>
  );
};

export default PropertyCard;