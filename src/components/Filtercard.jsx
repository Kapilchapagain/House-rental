import React, { useState } from "react";
import Button from "./Button";

const Filtercard = ({onApply}) => {

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  // Handle type checkbox ko lagi
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  // Handle price checkbox ko lagi
  const handlePriceChange = (range) => {
    setSelectedPrices((prev) =>
      prev.includes(range)
        ? prev.filter((p) => p !== range)
        : [...prev, range]
    );
  };

  const handleApply = () => {
    if (onApply) {
      onApply({
        types: selectedTypes,
        prices: selectedPrices,
      });
    }
  };
  return (
    <div className="w-[230px] bg-white rounded-xl shadow-md mt-5 p-5 space-y-6">
      
      <h2 className="text-lg font-semibold border-b pb-2">Filters</h2>

      
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Property Type
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handleTypeChange("Apartment")} type="checkbox" className="accent-green-600" />
            Apartment
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handleTypeChange("Villa")} type="checkbox" className="accent-green-600" />
            Villa
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handleTypeChange("House")} type="checkbox" className="accent-green-600" />
            House
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handleTypeChange("Studio")} type="checkbox" className="accent-green-600" />
            Studio
          </label>
        </div>
      </div>

      
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Price Range
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handlePriceChange("0-1000")} type="checkbox" className="accent-green-600" />
            $0 - $1000
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handlePriceChange("1000-2000")} type="checkbox" className="accent-green-600" />
            $1000 - $2000
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handlePriceChange("2000-3000")} type="checkbox" className="accent-green-600" />
            $2000 - $3000
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={()=> handlePriceChange("3000+")} type="checkbox" className="accent-green-600" />
            $3000+
          </label>
        </div>
      </div>

      
      <div className="pt-2 flex justify-center">
        <Button onclick={handleApply} text="Apply Filters" />
      </div>
    </div>
  );
};

export default Filtercard;