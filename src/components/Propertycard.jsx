import { Bath, Bed, Scale3d } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({_id,title,location,price,beds,baths,area,image,}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (_id !== undefined && _id !== null) {
      navigate(`/property/${_id}`);
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="bg-white mt-5 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden cursor-pointer h-fit">
      <div className="h-[180px] w-full">
        <img
          src={image || "https://via.placeholder.com/400"}
          alt={title}
          className="w-full h-full object-cover"/>
      </div>

     
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-800">
          {title || "No Title"}
        </h2>

        <p className="text-sm text-gray-500">
          {location || "No Location"}
        </p>

       
        <div className="flex gap-4 text-sm text-gray-600 mt-2">
          <span className="flex items-center gap-1">
            <Bed className="text-green-500 w-4 h-4" />
            {beds ?? 0} Beds
          </span>

          <span className="flex items-center gap-1">
            <Bath className="text-blue-400 w-4 h-4" />
            {baths ?? 0} Baths
          </span>

          <span className="flex items-center gap-1">
            <Scale3d className="text-gray-700 w-4 h-4" />
            {area ?? 0} sqft
          </span>
        </div>

        
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-semibold">
            ${price ?? 0}
            <span className="text-gray-500 text-sm"> / month</span>
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation(); 
              handleNavigate();
            }}
            className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;