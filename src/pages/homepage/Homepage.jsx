import React from 'react'
import Heropage from '../../section/Heropage'
import AboutUs from '../aboutus/AboutUs'
import Stats from '../../section/Stats'
import Testimonials from '../../section/Testimonials'
import WhyChooseUs from '../../section/WhyChooseUs'
import PropertyCard from '../../components/Propertycard'

const Homepage = () => {
  return (
    <div>
      <Heropage/>
      <Stats/>
      <Testimonials/>
      <WhyChooseUs/>
      
    </div>
  )
}

export default Homepage