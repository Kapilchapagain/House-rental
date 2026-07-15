import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const LandlordDashboard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests =
      JSON.parse(localStorage.getItem("requests")) || [];
    setRequests(storedRequests);
  }, []);

  
  const updateStatus = (index, status) => {
    const updated = [...requests];
    updated[index].status = status;

    setRequests(updated);
    localStorage.setItem("requests", JSON.stringify(updated));
  };

  return (
    <div className="flex">
      <Sidebar role="landlord" />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">
          Welcome, {user?.name} 👋
        </h1>

        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">My Properties</h2>
            <p className="text-gray-500 text-sm">
              Manage your listings
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Requests</h2>
            <p className="text-gray-500 text-sm">
              {requests.length} pending requests
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Add Property</h2>
            <p className="text-gray-500 text-sm">
              List a new property
            </p>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Tenant Requests
          </h2>

          {requests.length === 0 ? (
            <p className="text-gray-500">No requests yet</p>
          ) : (
            <div className="space-y-4">
              {requests.map((req, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">
                      {req.propertyTitle}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Tenant: {req.tenantName}
                    </p>
                    <p className="text-sm">
                      Status:{" "}
                      <span
                        className={`font-semibold ${
                          req.status === "pending"
                            ? "text-yellow-500"
                            : req.status === "accepted"
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {req.status}
                      </span>
                    </p>
                  </div>

                 
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(index, "accepted")}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => updateStatus(index, "rejected")}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;           