import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            HouseRent
          </h2>
          <p className="text-sm">
            Find your dream home with ease. Browse verified rental properties
            tailored to your needs.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/properties" className="hover:text-green-400">Properties</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Help Center</a></li>
            <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@houserent.com</li>
            <li>Phone: +977-9815993593</li>
            <li>Location: Birtamode, Nepal</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} HouseRent. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;