import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import FoodIllustration from './FoodIllustration';

// Move options outside component to prevent recreation on each render
const membershipOptions = [
    {
      title: "Pay in Full Membership",
      price: "$100",
      benefits: [
        "Impactful Voting Power",
        "Member-only discounts",
        "Become a Co-op Leader",
        "Access to VIP Perks"
      ],
      image: "https://static.wixstatic.com/media/c73eb8_ef16fc06fef44694b1b27b0a6dddfa60~mv2.png",
      planType: "full"
    },
    {
      title: "Payment Plan",
      price: "$27.50 x 4",
      benefits: [
        "Support community access",
        "Exclusive Member Discounts",
        "Voice in Important Decisions",
        "Special Member-Only Offers"
      ],
      image: "https://static.wixstatic.com/media/c73eb8_bd543d3303d74e189df6b8fc7cfe92bb~mv2.png",
      planType: "payment"
    },
    {
      title: "Sponsor a Membership",
      price: "$100",
      benefits: [
        "Exclusive Discounts and Perks",
        "Voting Rights",
        "Board Candidacy",
        "Community Strength"
      ],
      image: "https://static.wixstatic.com/media/c73eb8_22ccdea609ea456494a5d129de996b65~mv2.png",
      planType: "sponsor"
    }
  ];

// Memoize the component to prevent unnecessary re-renders
function Membership() {
  const handleOptionClick = (planType) => {
    window.location.href = '/ownership#ownershipForm';
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <FoodIllustration type="tree" />
      </div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <p className="text-accent-3 font-semibold mb-4">Membership Options</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Join Our Growing Community
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Choose the membership that best fits your needs and become part of our cooperative movement for better food access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipOptions.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleOptionClick(option.planType)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-background-secondary/20">
                <div className="absolute inset-0 bg-accent-3/20 group-hover:bg-accent-3/0 transition-colors duration-300 z-10"></div>
                <img
                  src={option.image}
                  alt={option.title}
                  loading="lazy"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-3xl font-bold">
                    {option.price}
                  </p>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                <ul className="space-y-3 mb-6 flex-1">
                  {option.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <span className="text-accent-3 flex-shrink-0">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                {option.planType === 'full' || option.planType === 'payment' ? (
                  <Link
                    to="/ownership#ownershipForm"
                    className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-accent-1 bg-accent-1 text-text-alternative px-8 py-2 text-lg rounded-lg hover:text-white/80 hover:bg-accent-1/90 hover:border-accent-1/90 transition-colors duration-300 w-full"
                  >
                    <img 
                      src={option.image}
                      alt={`${option.title} icon`}
                      loading="lazy"
                      className="w-6 h-6 object-contain"
                    />
                    <span>Join Now</span>
                  </Link>
                ) : (
                  <Link
                    to="/ownership#ownershipForm"
                    className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-accent-1 bg-accent-1 text-text-alternative px-8 py-2 text-lg rounded-lg hover:text-white/80 hover:bg-accent-1/90 hover:border-accent-1/90 transition-colors duration-300 w-full"
                  >
                    <img 
                      src={option.image}
                      alt="Sponsor icon"
                      loading="lazy"
                      className="w-6 h-6 object-contain"
                    />
                    <span>Sponsor a Member</span>
                  </Link>
                )}
              </div>

              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
                <FoodIllustration type="leaf" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Membership);