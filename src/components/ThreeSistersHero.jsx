import React from 'react';
import FoodIllustration from './FoodIllustration';

function ThreeSistersHero() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="fade-in">
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Honoring Legacy, Inspiring Change
            </h1>
            <h2 className="mb-4 text-3xl font-semibold md:mb-5 md:text-4xl lg:text-5xl text-accent-3">
              A Tribute to Our Community's Pioneers
            </h2>
            <p className="md:text-md bg-white/80 backdrop-blur-sm p-6 rounded-lg natural-shadow">
              The Three Sisters Market is dedicated to uplifting our community by honoring three remarkable women from the West Boulevard Corridor. Their legacy serves as a beacon of inspiration, guiding us towards a future of collaboration, sustainability, and resilience, much like the agricultural 'Three Sisters' of corn, beans, and squash.
            </p>
          </div>
          <div className="relative slide-in-right">
            <div className="organic-border overflow-hidden natural-shadow">
              <img
                src="https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot%204.jpg"
                alt="Community impact"
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
              <FoodIllustration type="leaf" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeSistersHero;