import React, { useState } from 'react';
import { 
  IoPeople, 
  IoCheckmarkCircle, 
  IoWallet, 
  IoShield,
  IoSchool,
  IoPeople as IoPeopleGroup,
  IoEarth
} from 'react-icons/io5';

function CoopEducationPrinciples() {
  const [flippedCard, setFlippedCard] = useState(null);

  const coopPrinciples = [
    {
      number: "1",
      title: "Voluntary Membership",
      description: "Open to all who can use its services and accept responsibilities of membership.",
      details: "This principle ensures that cooperatives remain accessible to anyone willing to participate, regardless of their background. Members join voluntarily and accept the responsibilities that come with membership, creating a diverse and inclusive community.",
      icon: <IoPeople className="w-full h-full" />
    },
    {
      number: "2",
      title: "Democratic Control",
      description: "One member, one vote - members actively participate in setting policies.",
      details: "Democracy is at the heart of cooperatives. Each member has an equal voice in decision-making, regardless of their financial investment. This ensures that the co-op truly serves its members' interests and maintains accountability.",
      icon: <IoCheckmarkCircle className="w-full h-full" />
    },
    {
      number: "3",
      title: "Economic Participation",
      description: "Members contribute equitably and democratically control the capital.",
      details: "Members contribute fairly to the cooperative's capital and participate in decisions about how to use and distribute it. This ensures financial sustainability while maintaining democratic control over economic resources.",
      icon: <IoWallet className="w-full h-full" />
    },
    {
      number: "4",
      title: "Autonomy & Independence",
      description: "Self-help organizations controlled by their members.",
      details: "Cooperatives maintain their independence even when entering into agreements with other organizations or raising capital from external sources. This ensures that member control and democratic principles are never compromised.",
      icon: <IoShield className="w-full h-full" />
    },
    {
      number: "5",
      title: "Education & Training",
      description: "Providing education and training for members, representatives, and the public.",
      details: "Continuous learning is essential for co-op success. Members, elected representatives, and employees receive education and training to contribute effectively to the cooperative's development and share knowledge with the broader community.",
      icon: <IoSchool className="w-full h-full" />
    },
    {
      number: "6",
      title: "Cooperation Among Co-ops",
      description: "Working together through local, national, and international structures.",
      details: "Cooperatives serve their members most effectively by working together. Through local, national, and international structures, co-ops strengthen the cooperative movement and support sustainable community development.",
      icon: <IoPeopleGroup className="w-full h-full" />
    },
    {
      number: "7",
      title: "Concern for Community",
      description: "Working for sustainable development of their communities.",
      details: "While focusing on member needs, cooperatives work for the sustainable development of their communities. This includes environmental stewardship, social responsibility, and economic development that benefits the entire community.",
      icon: <IoEarth className="w-full h-full" />
    }
  ];

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Co-op Principles</h2>
          <p className="max-w-2xl mx-auto">
            Our cooperative is built on internationally recognized principles that guide our operations and decision-making.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coopPrinciples.map((principle, index) => (
            <div 
              key={index}
              className={`relative h-[350px]  md:h-[400px] cursor-pointer perspective-1000`}
              onClick={() => handleCardClick(index)}
            >
              <div 
                className={`absolute inset-0 transition-transform duration-500 preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 bg-white p-6 rounded-lg shadow-lg backface-hidden">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-accent-3">
                      {principle.number}
                    </div>
                    <div className="flex-1">
                      <div className="w-16 h-16 mb-4 text-accent-3">
                        {principle.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                      <p className="text-sm">{principle.description}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-sm text-accent-3">
                    Click to learn more
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 bg-accent-3 text-white p-6 rounded-lg shadow-lg backface-hidden rotate-y-180">
                  <div className="h-full flex flex-col">
                    <div className="text-2xl font-bold mb-4">
                      {principle.number}. {principle.title}
                    </div>
                    <p className="flex-1 text-base">{principle.details}</p>
                    <div className="text-sm text-white/80 text-right">
                      Click to flip back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}

export default CoopEducationPrinciples;