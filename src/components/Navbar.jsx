// import { House } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "./Button";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("currentUser"));
//     setUser(loggedUser);
//   }, []);


//   const handleLogout = () => {
//     localStorage.removeItem("currentUser");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="flex bg-gray-900 items-center justify-between px-8 py-4 sticky top-0 z-50">

      
//       <div className="text-lg text-white font-semibold flex items-center gap-2">
//         <House onClick={()=>navigate("/")} />
//         HouseRent
//       </div>

     
//       <nav>
//         <ul className="flex gap-6 font-semibold text-white">
//           <li className="hover:text-green-600"><Link to="/">Home</Link></li>
//           <li className="hover:text-green-600"><Link to="/properties">Properties</Link></li>
//           <li className="hover:text-green-600"><Link to="/aboutus">About Us</Link></li>
//           <li className="hover:text-green-600"><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

      
//       <div className="flex gap-4">
//         {!user ? (
//           <>
//             <Link to="/login">
//               <button className="px-7 py-2 border text-white border-gray-300 rounded">
//                 Login
//               </button>
//             </Link>

//             <Link to="/register">
//               <Button text="Register" />
//             </Link>
//           </>
//         ) : (
//           <button
//             onClick={handleLogout}
//             className="px-7 py-2 bg-red-500 text-white rounded"
//           >
//             Logout
//           </button>
//         )}
//       </div>

//     </div>
//   );
// };

// export default Navbar;

import { House } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

 
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(loggedUser);
  }, []);

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex bg-gray-900 items-center justify-between px-8 py-4 sticky top-0 z-50">

      
      <div
        className="text-lg text-white font-semibold flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <House />
        HouseRent
      </div>

      
      <nav>
        <ul className="flex gap-6 font-semibold text-white">
          <li className="hover:text-green-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      
      <div className="flex gap-4 items-center">

        {!user ? (
          <>
            <Link to="/login">
              <button className="px-7 py-2 border text-white border-gray-300 rounded">
                Login
              </button>
            </Link>

            <Link to="/register">
              <Button text="Register" />
            </Link>
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>

            
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white cursor-pointer font-bold"
            >
              {user.name?.charAt(0).toUpperCase()}
            </div>

            
            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-lg py-2 text-black z-50">

                
                <div className="px-4 py-2 border-b text-sm text-gray-500">
                  <p className="font-semibold text-black">{user.name}</p>
                  <p className="text-xs">{user.email}</p>
                </div>

                
                <button
                  onClick={() => {
                    navigate("/tenant-profile");
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>

                
                {user.role === "landlord" && (
                  <button
                    onClick={() => {
                      navigate("/landlord");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </button>
                )}

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;