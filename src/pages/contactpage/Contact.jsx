import React from "react";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Have questions? We'd love to hear from you.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 text-center">
            <Button text="Send Message"/>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Contact;