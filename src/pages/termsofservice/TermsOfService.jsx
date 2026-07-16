import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen px-10 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4 text-gray-600">Last Updated: January 2026</p>

      <p className="mb-6">
        These Terms of Service govern your use of our platform. By accessing or using
        our services, you agree to comply with these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. User Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and providing accurate information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Platform Usage</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>You agree to use the platform lawfully</li>
        <li>You must not misuse or exploit the system</li>
        <li>Fake requests or fraudulent activity are prohibited</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Property Listings</h2>
      <p>
        We do not guarantee the accuracy of property listings. Users must verify
        details independently.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Limitation of Liability</h2>
      <p>
        We are not responsible for disputes between landlords and tenants.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Account Termination</h2>
      <p>
        We reserve the right to suspend or terminate accounts that violate these terms.
      </p>
    </div>
  );
};

export default TermsOfService;