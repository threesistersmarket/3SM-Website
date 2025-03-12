import React, { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import FoodIllustration from './FoodIllustration';
import TestimonialModal from './TestimonialModal';

function Community() {
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);

  const neighbors = [
    {
      name: "Dorothy Waddy",
      role: "Sister",
      quote: "Give a man a fish to feed him for a day...Teach a man to fish to feed him for a lifetime.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Dorothy%20Waddy.gif"
    },
    {
      name: "Luciel McNeel",
      role: "Sister",
      quote: "She exemplifies the strong women who spoke out and people listened.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Luciel.jpg"
    },
    {
      name: "Amay M. James",
      role: "Sister",
      quote: "Served West Boulevard with spiritual and social programs for over 40 years.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Amay%20James.jpg"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="absolute inset-0 bg-[url('https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//raindrops.jpg')] bg-cover bg-center opacity-5"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-accent-3">Our Neighborhood</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Stories from Our Community
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Every neighbor has a story, and together we're writing a new chapter of food accessibility and community connection.
            </p>
            
            <div className="relative p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg border-l-4 border-accent-3 mt-8">
              <div className="absolute -top-4 -right-4 w-16 h-16 opacity-20">
                <FoodIllustration type="tomato" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Impact</h3>
              <p className="text-sm">
                "Despite numerous setbacks in securing a grocery store, members of the West Boulevard Neighborhood Coalition say the opening of Three Sisters Market, a community-owned food cooperative that is planned for the corner of Romare Bearden Drive and West Boulevard, is now within sight."
              </p>
              <p className="text-accent-3 font-semibold mt-2">- Queens University News Service</p>
            </div>
          </div>

          <div className="grid gap-6 relative">
            {neighbors.map((neighbor, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`
                }}
              >
                <img 
                  src={neighbor.image} 
                  alt={neighbor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent-3"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{neighbor.name}</h3>
                    <span className="text-sm text-accent-3">• {neighbor.role}</span>
                  </div>
                  <p className="text-sm mt-1 italic">"{neighbor.quote}"</p>
                </div>
              </div>
            ))}

            <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20">
              <FoodIllustration type="leaf" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => setIsTestimonialModalOpen(true)}
            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
          >
            Share Your Story
          </button>
          <Link 
            to="/three-sisters"
            className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 group hover:text-accent-3"
          >
            More About 3SM
            <IoChevronForward className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <TestimonialModal 
        isOpen={isTestimonialModalOpen}
        onClose={() => setIsTestimonialModalOpen(false)}
      />
    </section>
  );
}

export default Community;
