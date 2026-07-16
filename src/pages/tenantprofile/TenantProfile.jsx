import React, { useEffect, useState } from "react";

const TenantProfile = () => {
  const [user, setUser] = useState(null);
  const [myRequests, setMyRequests] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const allRequests = JSON.parse(localStorage.getItem("requests")) || [];

    setUser(currentUser);

    if (currentUser) {
      const filtered = allRequests.filter(
        (req) => req.tenantEmail === currentUser.email
      );
      setMyRequests(filtered);
    }
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* USER INFO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">My Profile</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      {/* REQUESTS */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">My Requests</h2>

        {myRequests.length === 0 ? (
          <p className="text-gray-500">No requests sent yet.</p>
        ) : (
          <div className="space-y-4">
            {myRequests.map((req) => (
              <div
                key={req.id}
                className="border p-4 rounded-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{req.propertyTitle}</h3>
                  <p className="text-sm text-gray-500">
                    Status: {req.status}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    req.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : req.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TenantProfile;