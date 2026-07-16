import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import properties from "../../data";
import { Bed, Bath, Scale, ArrowLeft } from "lucide-react";
import Button from "../../components/Button";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSendRequest = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("Please login first!");
    navigate("/login");
    return;
  }

  const requests = JSON.parse(localStorage.getItem("requests")) || [];

  const newRequest = {
    id: Date.now(),
    propertyId: property._id, 
    propertyTitle: property.title,
    landlordId: property.landlordId || "landlord1", 
    tenantName: currentUser.name, 
    tenantEmail: currentUser.email, 
    status: "pending",
  };

  const updatedRequests = [...requests, newRequest];

  localStorage.setItem("requests", JSON.stringify(updatedRequests));

  console.log("Saved Requests:", updatedRequests); // debug

  alert("Request sent successfully!");


  const alreadyRequested = requests.find(
  (req) =>
    req.propertyId === property._id &&
    req.tenantEmail === currentUser.email
);

if (alreadyRequested) {
  alert("You already sent a request for this property!");
  return;
}
};

  const property = properties.find(
    (p) => p._id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    property?.image
  );

  if (!property) {
    return (
      <h2 className="text-center mt-10 text-red-500">
        Property Not Found
      </h2>
    );
  }

  const gallery = [
    property.image,
    property.image,
    property.image,
    property.image,
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">


      <button
        onClick={() => navigate("/properties")}
        className="flex items-center gap-2 hover:text-black text-gray-400 mb-4"
      >
        <ArrowLeft size={18} /> Back to Properties
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        <div>

          <img
            src={selectedImage}
            alt={property.title}
            className="w-full h-[350px] object-cover rounded-xl"
          />

          <div className="flex gap-3 mt-4">
            {gallery.map((img, index) => (
              <img key={index} src={img} alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img
                    ? "border-green-500"
                    : "border-transparent"
                  }`}
              />
            ))}
          </div>
        </div>


        <div>
          <h1 className="text-3xl font-bold mb-2">
            {property.title}
          </h1>

          <p className="text-gray-500 mb-3">
            {property.location}
          </p>

          <p className="text-green-600 text-2xl font-semibold mb-4">
            ${property.price} / month
          </p>


          <div className="flex gap-6 mb-6 text-gray-700">
            <span className="flex items-center gap-1">
              <Bed /> {property.beds} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath /> {property.baths} Baths
            </span>
            <span className="flex items-center gap-1">
              <Scale /> {property.area} sqft
            </span>
          </div>


          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              Description
            </h2>
            <p className="text-gray-600">
              {property.description ||
                "Beautiful modern apartment in the heart of the city. Close to all amenities, public transportation, and shopping centers."}
            </p>
          </div>

          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              Amenities
            </h2>

            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <p>✔ WiFi</p>
              <p>✔ Balcony</p>
              <p>✔ Parking</p>
              <p>✔ Washing Machine</p>
              <p>✔ Air Conditioning</p>
              <p>✔ Security</p>
            </div>
          </div>

          
          <div className="flex justify-center">
            <Button onClick={handleSendRequest} text="Send Request"/>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;