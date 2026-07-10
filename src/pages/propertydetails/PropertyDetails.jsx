import React from "react";
import { useParams } from "react-router-dom";
import properties from "../../data.js";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = properties.find((item) => item._id === Number(id));

  if (!property) {
    return <h2 className="text-center mt-10">Property not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      {/* Image */}
      <div className="w-full h-[350px] rounded-xl overflow-hidden mb-6">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title + Location */}
      <h1 className="text-2xl font-bold text-gray-800">
        {property.title}
      </h1>
      <p className="text-gray-500 mb-4">{property.location}</p>

      {/* Price */}
      <p className="text-green-600 text-xl font-semibold mb-4">
        ${property.price} / month
      </p>

      {/* Details */}
      <div className="flex gap-6 text-gray-700 mb-6">
        <span>🛏 {property.beds} Beds</span>
        <span>🛁 {property.baths} Baths</span>
        <span>📐 {property.area} sqft</span>
        <span>🏠 {property.type}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        This is a beautiful {property.type.toLowerCase()} located in{" "}
        {property.location}. It offers modern facilities, spacious rooms,
        and a comfortable living experience. Perfect for families or
        individuals looking for a great place to stay.
      </p>

    </div>
  );
};

export default PropertyDetails;