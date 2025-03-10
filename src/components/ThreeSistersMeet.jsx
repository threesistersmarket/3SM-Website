import React, { useState } from 'react';
import FoodIllustration from './FoodIllustration';
import DorothyBio from './DorothyBio';
import LucielBio from './LucielBio';
import AmayBio from './AmayBio';

function ThreeSistersMeet() {
  const [isDorothyBioOpen, setIsDorothyBioOpen] = useState(false);
  const [isLucielBioOpen, setIsLucielBioOpen] = useState(false);
  const [isAmayBioOpen, setIsAmayBioOpen] = useState(false);

  const sisters = [
    {
      name: "Dorothy Waddy",
      years: "1923-2010",
      role: "Social Justice Advocate",
      description: "A dedicated advocate for social justice and equality, whose influence shaped the West Boulevard Corridor. Her commitment to community empowerment continues to guide our mission.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Dorothy%20Waddy.gif"
    },
    {
      name: "Luciel McNeel",
      years: "1915-2001",
      role: "Community Leader",
      description: "A transformative leader whose dedication to community welfare and empowerment continues to inspire. Her work in establishing community programs created lasting positive change.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Luciel.jpg"
    },
    {
      name: "Amay M. James",
      years: "1902-1989",
      role: "Education Pioneer",
      description: "A trailblazer who dedicated her life to education and community empowerment in the West Boulevard Corridor. Her vision for inclusive education and social justice laid the foundation for future generations.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Amay%20James.jpg"
    }
  ];

  const handleImageClick = (name) => {
    switch (name) {
      case "Dorothy Waddy":
        setIsDorothyBioOpen(true);
        break;
      case "Luciel McNeel":
        setIsLucielBioOpen(true);
        break;
      case "Amay M. James":
        setIsAmayBioOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#F7F3E9] opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(39, 174, 96, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(230, 126, 34, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(142, 68, 173, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c10 10 20-10 30 0s20-10 30 0v60c-10-10-20 10-30 0s-20 10-30 0z' fill='%2327AE60' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Meet the Women Who Inspire Our Community
          </h2>
          <p className="mb-5 md:mb-6 md:text-md max-w-2xl mx-auto">
            The Three Sisters are pivotal figures in our community's history, embodying resilience, empowerment and servant leadership. Their legacies inspire the values of our cooperative market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sisters.map((sister, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(sister.name)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <img
                  src={sister.image}
                  alt={sister.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-1">{sister.name}</h3>
                  <p className="text-sm opacity-90">{sister.years}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-accent-3">{sister.role}</h4>
                <p className="text-text-primary mb-4">{sister.description}</p>
                <button
                  onClick={() => handleImageClick(sister.name)}
                  className="text-accent-3 hover:text-accent-1 font-semibold transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DorothyBio 
        isOpen={isDorothyBioOpen}
        onClose={() => setIsDorothyBioOpen(false)}
      />
      <LucielBio 
        isOpen={isLucielBioOpen}
        onClose={() => setIsLucielBioOpen(false)}
      />
      <AmayBio 
        isOpen={isAmayBioOpen}
        onClose={() => setIsAmayBioOpen(false)}
      />
    </section>
  );
}

export default ThreeSistersMeet;