import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Building,
  FileText,
  PlusSquare,
  User,
  LogOut,
  House,
} from "lucide-react";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const menuItems = role === "landlord"
      ? [
          { name: "Dashboard", icon: <Home />, path: "/" },
          { name: "My Properties", icon: <Building />, path: "/properties" },
          { name: "Requests", icon: <FileText />, path: "/requests" },
          { name: "Add Property", icon: <PlusSquare />, path: "/add-property" },
          { name: "Profile", icon: <User />, path: "/profile" },
        ]
      : [
          { name: "Dashboard", icon: <Home />, path: "/" },
          { name: "Browse Properties", icon: <Building />, path: "/browse" },
          { name: "My Requests", icon: <FileText />, path: "/my-requests" },
          { name: "Profile", icon: <User />, path: "/profile" },
        ];

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex flex-col p-4">

    
      <h1 className="text-xl font-bold mb-8 flex items-center gap-2">
        <House/> HouseRent
      </h1>

      
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600 transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

    
      <div className="mt-auto">
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-500 transition"
        >
          <LogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;