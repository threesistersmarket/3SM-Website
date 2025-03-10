import React from 'react';
import FoodIllustration from './FoodIllustration';

function CoopEducationBenefits() {
  const benefits = [
    {
      title: "Community Ownership",
      description: "Direct stake in the success and direction of the market.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Democratic Decision-Making",
      description: "Equal voice in major decisions affecting the co-op.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Economic Benefits",
      description: "Member discounts and potential patronage refunds.",
      image: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-accent-3">Benefits</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Why Join Our Co-op?
            </h2>
            <p className="md:text-md">
              As a member-owner of Three Sisters Market, you'll enjoy exclusive benefits while supporting our mission of creating a sustainable and equitable food system.
            </p>
            <div className="grid grid-cols-1 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-accent-3 mb-2">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="organic-border overflow-hidden natural-shadow">
              <img
                src="https://static.wixstatic.com/media/c73eb8_5d691eedf21f46ed8f66abd420ceb4bd~mv2.png"
                alt="Community members"
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

export default CoopEducationBenefits;