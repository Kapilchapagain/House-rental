import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Register = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="flex w-[850px] bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Side */}
        <div className="w-2/5 bg-green-50 flex flex-col items-center justify-center p-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/619/619153.png"
            alt="house"
            className="w-28 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Join Us!</h2>
          <p className="text-gray-600 text-sm text-center">
            Create your account to get started
          </p>
        </div>

        {/* Right Side */}
        <div className="w-3/5 p-8">
          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

          <form className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Button text="Register"/>

            </div>
          

            {/* Login Link */}
            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <a onClick={()=>navigate("/login")} href="#" className="text-green-600 hover:underline">
                Login
              </a>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;