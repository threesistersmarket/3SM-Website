import React from 'react';

function DonateImpact() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Your Impact</h2>
          <p className="max-w-2xl mx-auto">
            See how your donations help create lasting change in our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Food Access",
              description: "Support local farmers and enhance food accessibility for all residents.",
              image: "https://static.wixstatic.com/media/c73eb8_fa98ddff8abe4d4fb0eec757146d85aa~mv2.png"
            },
            {
              title: "Education",
              description: "Fund educational programs on nutrition and sustainable food practices.",
              image: "https://static.wixstatic.com/media/c73eb8_0e954791a2164a1c81387bf16104f0c2~mv2.png"
            },
            {
              title: "Community",
              description: "Help build a stronger, more connected neighborhood through food.",
              image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot.jpg"
            }
          ].map((impact, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={impact.image}
                alt={impact.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                <p>{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DonateImpact;