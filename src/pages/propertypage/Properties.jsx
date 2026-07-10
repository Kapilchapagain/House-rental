import React from 'react'
import PropertyFilter from '../../components/propertyfilter'
import Filtercard from '../../components/Filtercard'
import properties from "../../data.js";
import PropertyCard from "../../components/Propertycard";

const Properties = () => {
  return (
    <div>
      <PropertyFilter/>
      <div className='flex  space-x-102'>

        <div>
         <Filtercard/>
      </div>
        
<div className="space-y-4">
  {properties.map((item) => (
    <PropertyCard key={item._id} {...item} />
  ))}
</div>

      </div>
      
      

      </div>
     
  )
}

export default Properties