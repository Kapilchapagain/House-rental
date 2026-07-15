import React from "react";
import Propertyfilter from "../components/propertyfilter";
import { Navigate, useNavigate } from "react-router-dom";

const Heropage = ({ handleSearch }) => {
  const navigate = useNavigate();

  const handleHeroSearch = (filters) => {

    const filteredData = handleSearch(filters);


    navigate("/properties", { state: filteredData });
  };
  return (

    <div
      className="relative h-screen px-4 w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=3000&q=60')",
      }}>
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 flex flex-col items-start justify-center h-full text-center text-white px-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Home
        </h1>

        <p className="text-md md:text-xl mb-6">
          Discover the best rental properties that suit your lifestyle.
        </p>

        <button onClick={() => navigate("/properties")} className="bg-green-600 px-6 py-3 mb-6 rounded">
          Explore Properties
        </button>

        {/* Filter */}
        <div className="w-full flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-5xl">
            <Propertyfilter onSearch={handleSearch} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Heropage;