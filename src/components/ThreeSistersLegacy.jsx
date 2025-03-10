import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IoChevronForward, 
  IoLeaf, 
  IoFlower, 
  IoNutrition 
} from 'react-icons/io5';

function ThreeSistersLegacy() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="fade-in">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <IoLeaf className="w-12 h-12 text-accent-3" />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Carrying the Legacy
                  </h1>
                  <p>
                    The co-op embodies collaboration, sustainability, and community care inspired by the three remarkable women.
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <IoFlower className="w-12 h-12 text-accent-3" />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Supporting Our Community
                  </h1>
                  <p>
                    The market enhances food security, fosters community spaces, and drives economic development in West Boulevard.
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <IoNutrition className="w-12 h-12 text-accent-3" />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Empowering Change Together
                  </h1>
                  <p>
                    Join us in creating a sustainable future where everyone has access to fresh, healthy food.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                to="/ownership"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
              >
                Join
              </Link>
              <Link
                to="/contact"
                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 group hover:text-accent-3"
              >
                Contact Us
                <IoChevronForward className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="relative slide-in-right">
            <div className="organic-border overflow-hidden natural-shadow">
              <img
                src="https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//bicycle%20pic.jpg"
                alt="Community impact"
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
              <IoLeaf className="w-full h-full text-accent-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeSistersLegacy;