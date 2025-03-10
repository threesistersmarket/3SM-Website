import React from 'react';

function DonateCallToAction() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-alternative text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">Support Our Community Today</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Your contribution helps us build a sustainable food co-op for our West Boulevard neighborhoods.
        </p>
        <a
          href="https://crm.bloomerang.co/HostedDonation?ApiKey=pub_577af9c6-e790-11ee-8862-0a3287177f03&WidgetId=563200"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white px-6 py-3 hover:bg-white hover:text-background-alternative rounded-lg"
        >
          Make a Donation
        </a>
      </div>
    </section>
  );
}

export default DonateCallToAction;