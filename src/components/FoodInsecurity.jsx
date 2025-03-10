import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import FoodIllustration from './FoodIllustration';

function FoodInsecurity() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="absolute inset-0 bg-background-alternative/5  z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20">
              <FoodIllustration type="carrot" />
            </div>
            <p className="mb-3 font-semibold md:mb-4 text-accent-3">Together</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl relative">
              Understanding Food Insecurity in Our Community
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
                <FoodIllustration type="leaf" />
              </div>
            </h2>
          </div>
          <div className="relative p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="mb-4 w-150 h-24 mx-auto">
              <img
                src="https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//garden%20shot.jpg"
                alt="Fresh produce"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="md:text-md relative z-10">
              Food insecurity is a pressing issue in the West Boulevard corridor, affecting many families and individuals. The Three Sisters Market aims to combat this challenge by providing access to fresh, nutritious food and fostering community resilience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                to="/ownership"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
              >
                Join
              </Link>
              <Link 
                to="/food-justice"
                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 group hover:text-accent-3"
              >
                Learn More
                <IoChevronForward className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodInsecurity;