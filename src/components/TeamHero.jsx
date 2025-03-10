import React from 'react';
import { IoHeart } from 'react-icons/io5';

function TeamHero() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/30 to-transparent"></div>
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent-3/10">
            <IoHeart className="w-8 h-8 text-accent-3" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated individuals who make Three Sisters Market Co-op a vibrant and thriving community hub.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamHero;