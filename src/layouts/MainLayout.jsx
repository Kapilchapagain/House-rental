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
      <main className="px-3 sm:px-6 md:px-8 lg:px-10 py-4 max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* footer */}
      <Footer/>

    </div>
  );
};

export default MainLayout;