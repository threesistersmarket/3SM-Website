import React from 'react';
import FoodIllustration from './FoodIllustration';

function DonateHero() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <p className="mb-3 font-semibold text-accent-3 md:mb-4">Support</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Empower Our Community
            </h1>
            <p className="md:text-md">
              Your contributions help us build a sustainable food co-op for everyone in our community.
            </p>
            <div className="mt-6">
              <button
                onClick={() => document.getElementById('ways-to-contribute').scrollIntoView({ behavior: 'smooth' })}
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3 hover:bg-accent-1 rounded-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border-t-4 border-accent-3">
            <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
            <p className="mb-6 text-gray-600">
              Support our mission to create a community-owned grocery store that serves everyone.
            </p>
            <div className="flex justify-center w-full">
              <a 
                href="https://crm.bloomerang.co/HostedDonation?ApiKey=pub_577af9c6-e790-11ee-8862-0a3287177f03&WidgetId=563200"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300 w-full"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-5 w-40 h-40 opacity-15">
        <FoodIllustration type="sunflower" />
      </div>
    </section>
  );
}

export default DonateHero;