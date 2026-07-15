import React, { useState } from 'react';
import PropertyFilter from '../../components/propertyfilter';
import Filtercard from '../../components/Filtercard';
import properties from "../../data.js";
import PropertyCard from "../../components/Propertycard";

const Properties = () => {

 //property filter ko logic
  const [filtered, setFiltered] = useState(properties);

  const handleSearch = (filters) => {
    const result = properties.filter((item) => {
      return (
        (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.type || item.type === filters.type) &&
        (!filters.minPrice || item.price >= Number(filters.minPrice)) &&
        (!filters.maxPrice || item.price <= Number(filters.maxPrice))
      );
    });

    setFiltered(result);
  };


  //side filter ko logic
  const handleFilterCard = ({ types, prices }) => {
  const result = properties.filter((item) => {
    
    
    const matchType =
      types.length === 0 || types.includes(item.type);

   
    const matchPrice =
      prices.length === 0 ||
      prices.some((range) => {
        if (range === "0-1000") return item.price <= 1000;
        if (range === "1000-2000") return item.price > 1000 && item.price <= 2000;
        if (range === "2000-3000") return item.price > 2000 && item.price <= 3000;
        if (range === "3000+") return item.price > 3000;
      });

    return matchType && matchPrice;
  });

  setFiltered(result);
};

  return (
    <div className='p-8'>

      
      <PropertyFilter onSearch={handleSearch} />

      <div className='flex space-x-5 mt-6'>

        
        <div>
          <Filtercard onApply={handleFilterCard} />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
  {filtered.length > 0 ? (
    filtered.map((item) => (
      <PropertyCard key={item._id} {...item} />
    ))
  ) : (
    <p className="text-gray-500 text-2xl font-bold col-span-full text-center">
      No properties found
    </p>
  )}
</div>

      </div>

    </div>
  );
};

export default Properties;