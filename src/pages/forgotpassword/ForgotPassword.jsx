import React, { useState } from "react";
import Button from "../../components/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Replace with your API call
    console.log("Reset link sent to:", email);

    setMessage("Password reset link has been sent to your email.");
    setEmail("");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Forgot Password
        </h2>

        <p className="text-gray-500 text-center mb-6 text-sm">
          Enter your email and we’ll send you a reset link
        </p>

        {/* Success Message */}
        {message && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm text-center">
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-center">
            <Button text="Send Link"/>
          </div>

          
        </form>

        {/* Back to login */}
        <div className="text-center mt-4 text-sm">
          <a href="/login" className="text-green-600 hover:underline">
            Back to Login
          </a>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;