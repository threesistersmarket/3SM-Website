import React from 'react';
import { IoWallet, IoCheckmarkCircle, IoTrendingUp } from 'react-icons/io5';

function OwnershipBenefits() {
  return (
    <section id="ownershipBenefits" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Ownership Benefits</h2>
          <p className="max-w-2xl mx-auto">
            As an owner of Three Sisters Market, you'll enjoy exclusive benefits while supporting our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Member Discounts",
              description: "Enjoy special pricing on select items throughout the store.",
              icon: <IoWallet className="w-12 h-12" />
            },
            {
              title: "Voting Rights",
              description: "Have a voice in co-op decisions and board elections.",
              icon: <IoCheckmarkCircle className="w-12 h-12" />
            },
            {
              title: "Dividend Returns",
              description: "Share in the co-op's profits through annual dividend payments.",
              icon: <IoTrendingUp className="w-12 h-12" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mb-4 text-accent-3">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OwnershipBenefits;