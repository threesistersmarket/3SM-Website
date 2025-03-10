import React from 'react';

function MediaDisclaimer() {
  return (
    <div className="min-h-screen bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Media Disclaimer</h1>
        <div className="text-sm text-gray-600 mb-8">
          Last Updated: March 19, 2024 (Version 1.0)
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <p>Some of the images and videos featured on this website are sourced from locations outside of Three Sisters Market. These visuals are used for illustrative purposes to showcase the vision, mission, and community values of the market.</p>
          </section>

          <section className="mb-8">
            <p>Whenever possible, we credit original sources and ensure proper permissions for usage. If you recognize content that requires attribution or removal, please contact us at janiqua@threesistersmarket.coop.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Image Usage</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Stock photos and illustrations are used to represent our future market and community vision</li>
              <li>Community event photos are used with permission from participants</li>
              <li>Partner logos are used with explicit permission from respective organizations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Attribution</h2>
            <p>We make every effort to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Credit photographers and content creators where required</li>
              <li>Obtain proper licenses for commercial use</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain accurate records of media permissions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>For questions about media usage or to request content removal, please contact us at:</p>
            <p>Email: info@threesistersmarket.coop</p>
            <p>Address: 2201 Caronia St, Charlotte, NC 28208</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MediaDisclaimer;