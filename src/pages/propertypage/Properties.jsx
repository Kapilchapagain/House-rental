import React from 'react'
import PropertyFilter from '../../components/propertyfilter'
import Filtercard from '../../components/Filtercard'
import properties from "../../data.js";
import PropertyCard from "../../components/Propertycard";

const Properties = () => {
  return (
    <div>
      <PropertyFilter/>
      <div className='flex  space-x-5'>

        <div>
         <Filtercard/>
      </div>
        
<div className="gap-4 flex flex-wrap">
  {properties.map((item) => (
    <PropertyCard key={item._id} {...item} />
  ))}
</div>

      </div>
      
      

      </div>
     
  )
}

export default Properties