import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import FoodIllustration from './FoodIllustration';

function CallToAction() {
  const opportunities = [
    {
      title: "Become an Owner",
      description: "Ownership at Three Sisters Market comes with serious perks. When you join, you're purchasing a piece of our community!",
      image: "https://static.wixstatic.com/media/c73eb8_3b97634282b44d2aa514d113de567f59~mv2.jpg",
      buttonText: "learn more",
      buttonLink: "/ownership"
    },
    {
      title: "Become a Supplier",
      description: "Are you interested in becoming a supplier for our store? We hope to make the process as simple as possible for you!",
      image: "https://static.wixstatic.com/media/c73eb8_68d7ac7c88d34648a425993f3ecec698~mv2.jpg",
      buttonText: "learn more",
      buttonLink: "/contact"
    },
    {
      title: "Join Our Team",
      description: "Would you like to use your skills and passions to work at the store? See our current volunteer opportunities.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot%202.jpg",
      buttonText: "learn more",
      buttonLink: "/contact"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-15"></div>
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Get Involved
          </h2>
          <div className="absolute top-0 right-10 w-24 h-24 opacity-20">
            <FoodIllustration type="sunflower" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent-3/20 group-hover:bg-accent-3/0 transition-colors duration-300 z-10"></div>
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent-3">
                  {opportunity.title}
                </h3>
                <p className="mb-6 text-text-primary">
                  {opportunity.description}
                </p>
                <Link 
                  to={opportunity.buttonLink}
                  className="inline-flex items-center gap-2 text-accent-3 font-semibold group-hover:text-accent-1 transition-colors duration-300"
                >
                  {opportunity.buttonText}
                  <IoChevronForward className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
                <FoodIllustration type="leaf" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/ownership"
            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
          >
            Join Our Community Today
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;