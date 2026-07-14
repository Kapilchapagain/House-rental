import React, { useState } from "react";
import Button from "./Button";
import properties from "../data.js";

const PropertyFilter = ({onSearch}) => {
   const [filters,setFilters]=useState({
    location:"",
    type:"",
    minPrice:"",
    maxPrice:""
   })

   const handleChange = (e) => {
  const updatedFilters = {
    ...filters,
    [e.target.name]: e.target.value,
  };

  setFilters(updatedFilters);

  if (onSearch) {
    onSearch(updatedFilters); 
  }
};

   const handleSearch=()=>{
     if(onSearch){
      onSearch(filters)
     }
   }
  return (
    <div className="w-full bg-white border text-black border-gray-200 shadow-xl rounded-xl p-6 flex items-end justify-between gap-4">
      
      
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={filters.location}
          onChange={handleChange}
          className="px-3 py-2 border rounded-md focus:outline-none "
        />
      </div>

      
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Property Type</label>
        <select value={filters.type} name="type" onChange={handleChange} className="px-3 py-2 border rounded-md focus:outline-none ">
          <option value="">All</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Studio">Studio</option>
          
        </select>
      </div>

      
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Min Price</label>
        <input
          type="number"
          value={filters.minPrice}
          name="minPrice"
          onChange={handleChange}
          placeholder="Min price"
          className="px-3 py-2 border rounded-md focus:outline-none "
        />
      </div>

      
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          placeholder="Max price"
          className="px-3 py-2 border rounded-md focus:outline-none "
        />
      </div>

      
      <div>
        <Button classname="hover:transition-opacity" onClick={handleSearch} text="Search"/>
      </div>

    </div>
  );
};

export default PropertyFilter;