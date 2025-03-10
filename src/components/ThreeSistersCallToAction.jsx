import React from 'react';
import { Link } from 'react-router-dom';

function ThreeSistersCallToAction() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
            Honor Their Legacy Together
          </h2>
          <p className="text-white md:text-md">
            Join us in building a brighter future by becoming a member, donating, or volunteering today.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Link
              to="/ownership"
              className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white px-6 py-3 hover:bg-white hover:text-background-alternative rounded-lg"
            >
              Join
            </Link>
            <Link
              to="/donate"
              className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white px-6 py-3 hover:bg-white hover:text-background-alternative rounded-lg"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//landscape.jpg"
          className="h-full w-full object-cover"
          alt="Garden landscape"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-50"></div>
      </div>
    </section>
  );
}

export default ThreeSistersCallToAction;