import { House } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
return ( 
<div className="flex items-center justify-between px-8 py-4">



  <div className="text-lg font-semibold flex">
    <House className='text-green-600'/>
    HouseRent
  </div>


  <nav>
    <ul className="flex gap-6 font-semibold text-gray-500 ">
      <li className='hover:text-green-600'><Link to="/">Home</Link></li>
      <li className='hover:text-green-600'><Link to="/properties">Properties</Link></li>
      <li className='hover:text-green-600'><Link to="/about">About Us</Link></li>
      <li className='hover:text-green-600'><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>

  
  <div className="flex gap-4">
    <Link to="/login">
      <button className="px-6 py-2 border border-gray-300 rounded font-mono ">Login</button>
    </Link>
    <Link to="/register">
      <button className="px-6 py-2 bg-green-600 rounded text-white font-mono">Register</button>
    </Link>
  </div>

</div>

);
};

export default Navbar;
