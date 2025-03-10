import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Privacy Policy</h1>
        <div className="text-sm text-gray-600 mb-8">
          Last Updated: January 24, 2024 (Version 1.0)
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>Three Sisters Market Co-op ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-bold mb-2">2.1 Personal Information</h3>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Membership details</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process your membership</li>
              <li>Communicate with you</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Your Rights (GDPR & CCPA)</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p>For privacy-related inquiries, please contact us at:</p>
            <p>Email: info@threesistersmarket.coop</p>
            <p>Address: 2201 Caronia St, Charlotte, NC 28208</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;