import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "tenant", 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.find(
      (user) => user.email === form.email
    );

    if (userExists) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
    };

    const updatedUsers = [...existingUsers, newUser];

  
    localStorage.setItem("users", JSON.stringify(updatedUsers));

  
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    console.log("Registered & Logged in:", newUser);

   
    if (newUser.role === "landlord") {
      navigate("/landlord");
    } else {
      navigate("/tenant");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[850px] bg-white rounded-xl shadow-lg overflow-hidden">
        
        
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

       
        <div className="w-[500px] p-8">
          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

           
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            
            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            
            <div>
              <label className="block text-sm mb-1">Register As</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              >
                <option value="tenant">Tenant</option>
                <option value="landlord">Landlord</option>
              </select>
            </div>

           
            <div className="flex justify-center">
              <Button text="Register" />
            </div>

            
            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-green-600 hover:underline cursor-pointer"
              >
                Login
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;