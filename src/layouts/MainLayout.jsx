import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100   ">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" mx-auto">
        <Outlet />
      </main>

      {/* footer */}
      <Footer/>

    </div>
  );
};

export default MainLayout;