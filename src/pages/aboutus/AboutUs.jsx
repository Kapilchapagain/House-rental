import React from "react";
import Button from "../../components/Button";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619153.png"
              alt="home"
              className="w-64"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a modern property platform designed to help users find,
              compare, and manage real estate easily. Our system provides
              powerful filters and a clean dashboard experience to simplify
              property searching.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make property searching simple, fast, and
              reliable by combining smart filtering tools with an intuitive
              interface.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2942/2942789.png"
              alt="mission"
              className="w-64"
            />
          </div>
        </div>

        {/* Features (same style as cards in dashboard) */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="border rounded-lg p-5 hover:shadow-md transition">
            <h3 className="font-semibold mb-2 text-gray-800">
              Smart Filtering
            </h3>
            <p className="text-gray-600 text-sm">
              Search properties easily using advanced filters.
            </p>
          </div>

          <div className="border rounded-lg p-5 hover:shadow-md transition">
            <h3 className="font-semibold mb-2 text-gray-800">
              Clean Dashboard
            </h3>
            <p className="text-gray-600 text-sm">
              Manage and explore properties in a simple interface.
            </p>
          </div>

          <div className="border rounded-lg p-5 hover:shadow-md transition">
            <h3 className="font-semibold mb-2 text-gray-800">
              Trusted Data
            </h3>
            <p className="text-gray-600 text-sm">
              Reliable and verified property listings.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;