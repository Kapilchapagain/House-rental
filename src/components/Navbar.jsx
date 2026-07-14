import { House } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(loggedUser);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex bg-gray-400 items-center justify-between px-8 py-4 sticky top-0 z-50">

      
      <div className="text-lg font-semibold flex items-center gap-2">
        <House />
        HouseRent
      </div>

     
      <nav>
        <ul className="flex gap-6 font-semibold text-black">
          <li className="hover:text-green-600"><Link to="/">Home</Link></li>
          <li className="hover:text-green-600"><Link to="/properties">Properties</Link></li>
          <li className="hover:text-green-600"><Link to="/aboutus">About Us</Link></li>
          <li className="hover:text-green-600"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      
      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="/login">
              <button className="px-7 py-2 border border-gray-300 rounded">
                Login
              </button>
            </Link>

            <Link to="/register">
              <Button text="Register" />
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-7 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        )}
      </div>

    </div>
  );
};

export default Navbar;