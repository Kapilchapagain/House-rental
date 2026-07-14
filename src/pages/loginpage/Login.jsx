import React, { useState } from "react"; // ✅ FIXED
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
  e.preventDefault();

  let error = {};

  if (!email.trim()) error.email = "Email is required";
  if (!password.trim()) error.password = "Password is required";

  if (Object.keys(error).length > 0) {
    setErrors(error);
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

 
  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!validUser) {
    setErrors({ general: "Invalid email or password " });
    return;
  }


  localStorage.setItem("currentUser", JSON.stringify(validUser));

  console.log("Login Success", validUser);


  if (validUser.role === "landlord") {
    navigate("/landlord");
  } else {
    navigate("/tenant");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[800px] bg-white rounded-xl shadow-lg overflow-hidden">

       
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

        
        <div className="w-[500px] p-8">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="text-right">
              <span
                onClick={() => navigate("/forgotpassword")}
                className="text-sm text-green-600 hover:underline cursor-pointer"
              >
                Forgot Password?
              </span>
            </div>

            <div className="flex justify-center">
             
              <Button text="Login" type="submit" />
            </div>

            <p className="text-center text-sm mt-2">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-green-600 hover:underline cursor-pointer"
              >
                Register
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;