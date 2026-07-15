import React from "react";
import { Home, Target, ShieldCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">
            About Our Platform
          </h1>
          <p className="text-gray-500 mt-2">
            Making property search simple, fast, and reliable
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619153.png"
              alt="home"
              className="w-56 hover:scale-105 transition"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <Home className="text-green-600" /> Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a modern property platform designed to help users find,
              compare, and manage real estate easily. Our system provides
              powerful filters and a clean dashboard experience to simplify
              property searching.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <Target className="text-blue-500" /> Our Mission
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
              className="w-56 hover:scale-105 transition"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl border hover:shadow-lg transition text-center">
              <Home className="mx-auto text-green-600 mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-2">
                Smart Filtering
              </h3>
              <p className="text-gray-600 text-sm">
                Search properties easily using advanced filters.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg transition text-center">
              <Target className="mx-auto text-blue-500 mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-2">
                Clean Dashboard
              </h3>
              <p className="text-gray-600 text-sm">
                Manage and explore properties in a simple interface.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg transition text-center">
              <ShieldCheck className="mx-auto text-purple-500 mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-2">
                Trusted Data
              </h3>
              <p className="text-gray-600 text-sm">
                Reliable and verified property listings.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;