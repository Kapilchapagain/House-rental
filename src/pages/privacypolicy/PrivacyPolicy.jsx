import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-10 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-gray-600">Last Updated: January 2026</p>

      <p className="mb-6">
        This Privacy Policy explains how we collect, use, and protect your information
        when you use our platform. By using our services, you agree to the terms outlined below.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Personal details such as name and email address</li>
        <li>Account and login information</li>
        <li>Property request activity and interactions</li>
        <li>Technical data such as IP address and browser type</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>To provide and improve our services</li>
        <li>To manage property requests and user interactions</li>
        <li>To communicate updates, notifications, or support</li>
        <li>To ensure platform security and prevent misuse</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Data Sharing</h2>
      <p>
        We do not sell your personal data. Information may only be shared with
        relevant landlords or service providers to fulfill platform functionality.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Security</h2>
      <p>
        We implement industry-standard measures to protect your data, but no system
        is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <p>
        You may request to access, update, or delete your personal information at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Changes to This Policy</h2>
      <p>
        We may update this policy periodically. Continued use of the platform means
        you accept the updated policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;