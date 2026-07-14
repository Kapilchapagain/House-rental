import React from "react";
import Sidebar from "../../components/Sidebar";

const TenantDashboard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="flex">
      <Sidebar role="tenant" />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome, {user?.name} 
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Browse Properties</h2>
            <p className="text-gray-500 text-sm">
              Explore available rentals
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">My Requests</h2>
            <p className="text-gray-500 text-sm">
              Track your applications
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Saved Homes</h2>
            <p className="text-gray-500 text-sm">
              Your wishlist properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;