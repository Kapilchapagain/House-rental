import { Bath, Bed, Scale3d } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ _id, title, location, price, beds, baths, area, image }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/property/${_id}`)}
      className="bg-white mt-5 min-h-39 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden cursor-pointer"
    >

      
      <div className="h-[180px] w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

     
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>

        <div className="flex gap-4 text-sm text-gray-600 mt-2">
          <span><Bed className="text-green-500" /> {beds} Beds</span>
          <span><Bath className="text-blue-300" /> {baths} Baths</span>
          <span><Scale3d className="text-black" /> {area} sqft</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-semibold">
            ${price} <span className="text-gray-500 text-sm">/ month</span>
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/property/${_id}`);
            }}
            className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;