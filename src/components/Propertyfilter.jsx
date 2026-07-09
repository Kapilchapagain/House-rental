import React from "react";
import Button from "./Button";

const PropertyFilter = () => {
  return (
    <div className="w-full bg-white border text-black border-gray-200 shadow-xl rounded-xl p-6 flex items-end justify-between gap-4">
      
      {/* Location */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          className="px-3 py-2 border rounded-md focus:outline-none "
        />
      </div>

      {/* Property Type */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Property Type</label>
        <select className="px-3 py-2 border rounded-md focus:outline-none ">
          <option>Select type</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>
      </div>

      {/* Min Price */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Min Price</label>
        <input
          type="number"
          placeholder="Min price"
          className="px-3 py-2 border rounded-md focus:outline-none "
        />
      </div>

      {/* Max Price */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Max Price</label>
        <input
          type="number"
          placeholder="Max price"
          className="px-3 py-2 border rounded-md focus:outline-none "
        />
      </div>

      {/* Button */}
      <div>
        <Button text="Search"/>
      </div>

    </div>
  );
};

export default PropertyFilter;