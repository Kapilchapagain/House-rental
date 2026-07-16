import React from "react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen px-10 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Help Center</h1>

      <p className="mb-6">
        Need help? Find answers to common questions below.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">How do I send a request?</h2>
          <p>
            Open a property and click "Send Request". Your request will appear in your profile.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">How can I view my requests?</h2>
          <p>
            Go to your profile page to track all your submitted requests.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">What if I face an issue?</h2>
          <p>
            Contact support through the contact page or email us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;