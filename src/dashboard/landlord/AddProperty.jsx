import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    type: "",
    beds: "",
    baths: "",
    area: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.title) newErrors.title = "Title is required";
    if (!form.location) newErrors.location = "Location is required";
    if (!form.price) newErrors.price = "Price is required";
    if (!form.type) newErrors.type = "Type is required";
    if (!form.beds) newErrors.beds = "Beds required";
    if (!form.baths) newErrors.baths = "Baths required";
    if (!form.area) newErrors.area = "Area required";
    if (!form.image) newErrors.image = "Image URL required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const existingProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    const newProperty = {
      _id: Date.now(), 
      ...form,
    };

    const updatedProperties = [...existingProperties, newProperty];

    localStorage.setItem("properties", JSON.stringify(updatedProperties));

    alert("Property Added Successfully!");

    navigate("/landlord-dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Add Property</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}

        
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.location && <p className="text-red-500">{errors.location}</p>}

        
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.price && <p className="text-red-500">{errors.price}</p>}

       
        <input
          type="text"
          name="type"
          placeholder="Type (Apartment, House...)"
          value={form.type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.type && <p className="text-red-500">{errors.type}</p>}

        
        <input
          type="number"
          name="beds"
          placeholder="Beds"
          value={form.beds}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.beds && <p className="text-red-500">{errors.beds}</p>}

        
        <input
          type="number"
          name="baths"
          placeholder="Baths"
          value={form.baths}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.baths && <p className="text-red-500">{errors.baths}</p>}

        
        <input
          type="number"
          name="area"
          placeholder="Area (sq ft)"
          value={form.area}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.area && <p className="text-red-500">{errors.area}</p>}

       
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.image && <p className="text-red-500">{errors.image}</p>}

        
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;