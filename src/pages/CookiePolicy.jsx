import React from 'react';

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Cookie Policy</h1>
        <div className="text-sm text-gray-600 mb-8">
          Last Updated: January 24, 2024 (Version 1.0)
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you interact with our site.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-bold mb-2">2.1 Essential Cookies</h3>
            <p>Required for basic website functionality:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Authentication</li>
              <li>Security</li>
              <li>Basic functionality</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">2.2 Analytics Cookies</h3>
            <p>Help us understand how visitors use our site:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Page views</li>
              <li>Navigation paths</li>
              <li>User behavior</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">2.3 Functional Cookies</h3>
            <p>Remember your preferences:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Language settings</li>
              <li>Login information</li>
              <li>Customization options</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Managing Cookies</h2>
            <p>You can control cookies through your browser settings:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Block cookies</li>
              <li>Delete cookies</li>
              <li>Allow only certain cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p>Some third-party services may place cookies on your device:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Analytics providers</li>
              <li>Social media platforms</li>
              <li>Payment processors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Updates to This Policy</h2>
            <p>We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p>If you have questions about our Cookie Policy, please contact us at:</p>
            <p>Email: info@threesistersmarket.coop</p>
            <p>Address: 2201 Caronia St, Charlotte, NC 28208</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;