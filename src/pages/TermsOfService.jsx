import React from 'react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Terms of Service</h1>
        <div className="text-sm text-gray-600 mb-8">
          Last Updated: January 24, 2024 (Version 1.0)
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>By accessing or using Three Sisters Market Co-op's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Membership</h2>
            <p>2.1 Eligibility</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Must be 18 years or older</li>
              <li>Provide accurate information</li>
              <li>Maintain current contact details</li>
            </ul>

            <p>2.2 Member Responsibilities</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pay membership fees</li>
              <li>Follow co-op policies</li>
              <li>Participate in governance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Website Use</h2>
            <p>3.1 Acceptable Use</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal and non-commercial use</li>
              <li>No unauthorized access</li>
              <li>No harmful activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p>All content on this website is the property of Three Sisters Market Co-op and is protected by copyright and other intellectual property laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p>Three Sisters Market Co-op shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p>For questions about these terms, please contact us at:</p>
            <p>Email: info@threesistersmarket.coop</p>
            <p>Address: 456 Community Lane, West Boulevard, CA 90001</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;