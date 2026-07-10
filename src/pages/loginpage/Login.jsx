import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  const navigate=useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="flex w-[800px] bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Side */}
        <div className="w-2/5 bg-green-50 flex flex-col items-center justify-center p-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/619/619153.png"
            alt="home"
            className="w-28 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-gray-600 text-sm">
            Please login to your account
          </p>
        </div>

        {/* Right Side */}
        <div className="w-3/5 p-8">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          <form className="space-y-4">
            
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-right">
              <a onClick={()=>navigate("/forgotpassword")} href="#" className="text-sm text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="flex justify-center">
<Button text="Login"/>
            </div>

            

            <p className="text-center text-sm mt-2">
              Don't have an account?{" "}
              <a onClick={()=>navigate("/register")} href="#" className="text-green-600 hover:underline">
                Register
              </a>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;