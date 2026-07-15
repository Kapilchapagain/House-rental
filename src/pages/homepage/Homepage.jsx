import React from 'react'
import { useNavigate } from "react-router-dom";
import Heropage from '../../section/Heropage'
import Stats from '../../section/Stats'
import Testimonials from '../../section/Testimonials'
import WhyChooseUs from '../../section/WhyChooseUs'
import PropertyCard from '../../components/Propertycard'
import properties from '../../data'

const Homepage = () => {
  const navigate = useNavigate();

  const featured = properties.slice(0, 6);

  return (
    <div>
      <Heropage/>

      
      <div className="px-8 py-12 bg-gray-100">

        
        <div className="flex justify-between items-center ">
          
        
          <h2 className="text-xl font-bold">
            Featured Properties
          </h2>

          
          <button
            onClick={() => navigate("/properties")}
            className="text-black text-sm font-semibold hover:text-green-600"
          >
            View All →
          </button>

        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <PropertyCard key={item._id} {...item} />
          ))}
        </div>

      </div>

      <Stats/>
      <Testimonials/>
      <WhyChooseUs/>
    </div>
  )
}

export default Homepage