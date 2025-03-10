import React from 'react';
import { IoLeaf, IoPeople, IoNutrition, IoHeart, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import FoodIllustration from './FoodIllustration';

function CoopModel() {
  return (
    <section id="coop-model" className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-br from-background-secondary to-background-primary">
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <FoodIllustration type="leaf" />
      </div>
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Co-op</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Understanding Our Cooperative Model
            </h2>
            <p className="md:text-md">
              At Three Sisters Market, we believe in the power of community ownership. Our cooperative model fosters collaboration, ensuring that every member has a voice in shaping our market.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-5 text-4xl text-accent-3 md:mb-6">
                <IoLeaf className="animate-bounce" />
              </div>
              <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  What is a Co-op?
                </h3>
                <p>
                  A co-op is a member-owned business that prioritizes community needs and shared benefits.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-5 text-4xl text-accent-3 md:mb-6">
                <IoPeople className="animate-bounce" />
              </div>
              <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Why Choose This Model?
                </h3>
                <p>
                  This model empowers local residents, ensuring access to fresh food and fostering economic resilience.
                </p>
              </div>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <div className="relative">
              <img
                src="https://static.wixstatic.com/media/c73eb8_19e4c6e7b9154194a6a76b72873c8661~mv2.jpg"
                alt="Fresh produce at farmers market"
                className="h-auto w-full rounded-lg object-cover shadow-lg transform hover:rotate-2 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24">
                <FoodIllustration type="tomato" />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-5 text-4xl text-accent-3 md:mb-6">
                <IoNutrition className="animate-bounce" />
              </div>
              <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Community Benefits
                </h3>
                <p>
                  Members enjoy lower prices, quality products, and a direct say in market operations.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-5 text-4xl text-accent-3 md:mb-6">
                <IoHeart className="animate-bounce" />
              </div>
              <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Join Us Today
                </h3>
                <p>
                  Become part of a movement that nurtures our community and supports local farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Link 
            to="/ownership"
            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
          >
            Join
          </Link>
          <Link 
            to="/coop-education"
            className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 group hover:text-accent-3"
          >
            Learn
            <IoChevronForward className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CoopModel;