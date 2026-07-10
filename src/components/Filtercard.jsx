

import React from "react";
import Button from "./Button";

const Filtercard = () => {
  return (
    <div className="w-[230px] bg-white rounded-xl shadow-md mt-5 p-5 space-y-6">
      
      <h2 className="text-lg font-semibold border-b pb-2">Filters</h2>

      {/* Property Type */}
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Property Type
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            Apartment
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            Villa
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            House
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            Studio
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Price Range
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            $0 - $1000
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            $1000 - $2000
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            $2000 - $3000
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-green-600" />
            $3000+
          </label>
        </div>
      </div>

      {/* Button */}
      <div className="pt-2 flex justify-center">
        <Button text="Apply Filters" />
      </div>
    </div>
  );
};

export default Filtercard;