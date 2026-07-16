import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Login from "./pages/loginpage/Login";
import Register from "./pages/registerpage/Register";
import AboutUs from "./pages/aboutus/AboutUs";
import Homepage from "./pages/homepage/Homepage";
import Properties from "./pages/propertypage/Properties";
import Contact from "./pages/contactpage/Contact";
import PropertyDetails from "./pages/propertydetails/PropertyDetails";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import TenantDashboard from "./dashboard/tenant/TenantDashboard";
import LandlordDashboard from "./dashboard/landlord/LandlordDashboard";
import AddProperty from "./dashboard/landlord/AddProperty";

import properties from "./data";
import TenantProfile from "./pages/tenantprofile/TenantProfile";
import HelpCenter from "./pages/helpcenter/HelpCenter";
import TermsOfService from "./pages/termsofservice/TermsOfService";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";

const App = () => {
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, []);

  return (
    <Routes>

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      {/* Main Layout Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="properties" element={<Properties />} />
        <Route path="property/:id" element={<PropertyDetails />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tenant-profile" element={<TenantProfile/>}/>
        <Route path="helpcenter" element={<HelpCenter/>}/>
        <Route path="termsofservice" element={<TermsOfService/>}/>
        <Route path="privacypolicy" element={<PrivacyPolicy/>}/>
      </Route>

      
      {/* landlord */}
      <Route path="/landlord" element={<LandlordDashboard />} />
      <Route path="/add-property" element={<AddProperty />} />

    </Routes>
  );
};

export default App;