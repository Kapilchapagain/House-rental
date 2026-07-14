import React from "react";
import Sidebar from "../../components/Sidebar";

const LandlordDashboard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="flex">
      <Sidebar role="landlord" />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome, {user?.name} 👋
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">My Properties</h2>
            <p className="text-gray-500 text-sm">
              Manage your listings
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Requests</h2>
            <p className="text-gray-500 text-sm">
              View tenant requests
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Add Property</h2>
            <p className="text-gray-500 text-sm">
              List a new property
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;