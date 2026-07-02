import React from 'react'
import Propertyfilter from '../components/propertyfilter'

const Heropage = () => {
  return (
    <div 
      className={`relative bg-[url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjByZW50YWx8ZW58MHx8MHx8fDA%3D")] h-screen bg-cover bg-center`}
      
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Home
        </h1>

        <h2 className="text-lg md:text-xl mb-6">
          Discover the best rental properties that suit your lifestyle.
        </h2>

        <button className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">
          Explore Properties
        </button>
         <Propertyfilter />

      </div>
     

    </div>
  )
}

export default Heropage