import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function OwnershipHero() {
  const handleJoinClick = () => {
    document.getElementById('ownershipForm').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ownershipHero" className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/30 to-transparent"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <h2 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
                Become an Owner
              </h2>
              <p className="md:text-md">
                Join our community-owned grocery store and help shape the future of food access in our neighborhood.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:gap-12 md:mt-8">
                <button
                  onClick={handleJoinClick}
                  className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
                >
                  Register Now
                </button>
                
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background-primary/20 to-transparent rounded-lg"></div>
            <div className="relative h-full organic-border overflow-hidden natural-shadow">
              <img
                src="https://static.wixstatic.com/media/c73eb8_062a9f5b17c44e02b876bc585dceceb3~mv2.jpg"
                alt="Community members"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnershipHero;