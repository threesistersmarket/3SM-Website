import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoPlay, IoPeople } from 'react-icons/io5';
import FoodIllustration from './FoodIllustration';
import VideoModal from './VideoModal';

function Hero() {
  const location = useLocation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const targetCount = 200; // Current member count

  useEffect(() => {
    // Check if we have a hash in the location and scroll to it
    if (location.hash === '#ownership-form') {
      const element = document.getElementById('ownership-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    // Animate member count
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= targetCount) {
        setMemberCount(targetCount);
        clearInterval(timer);
      } else {
        setMemberCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="z-5 px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden z-20">
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url('https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Grocery%20Store.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: 'transform 0.1s linear',
          willChange: 'transform'
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="fade-in relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 opacity-20 animate-spin-slow">
              <FoodIllustration type="sunflower" />
            </div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl 
bg-gradient-to-r from-orange-300 via-accent-1 to-accent-3 
bg-clip-text text-transparent 
drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] 
[text-shadow:_0_1px_20px_rgb(255_255_255_/_10%)]">
              Three Sisters Market
            </h1>
            <h2 className="mb-4 text-3xl font-semibold md:mb-5 md:text-4xl lg:text-5xl text-white">Building a Community-Driven Co-op</h2>

            {/* Member Counter */}
            <div className="mb-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm inline-flex items-center gap-6 border-t-4 border-accent-3">
              <div className="text-accent-3">
                <IoPeople className="w-12 h-12" />
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-3">
                  {memberCount.toLocaleString()}
                </div>
                <div className="text-left">
                  <div className="text-lg font-medium text-gray-900">
                    Growing Community
                  </div>
                  <div className="text-sm text-gray-500">
                    Member-Owners and Counting
                  </div>
                </div>
              </div>
            </div>

            <p className="md:text-md relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-lg natural-shadow text-text-primary">
              Welcome to Three Sisters Market, where community and nourishment thrive. Join us in creating a cooperative grocery store that empowers local residents and addresses food insecurity.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link 
                to="/ownership"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 hover-lift organic-border"
              >
                Join
              </Link>
              <Link 
                to="/coop-education"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white bg-transparent px-6 py-3 hover-lift organic-border hover:bg-white hover:text-text-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="fade-in relative" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-10 -left-10 w-24 h-24 rotate-12">
              <FoodIllustration type="tomato" />
            </div>
            <div className="organic-border overflow-hidden natural-shadow relative group border-4 border-white/80 backdrop-blur-sm">
              <img
                src="https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//West%20Blvd%20Coalition%20Fest-29%20(1).jpg"
                alt="Video thumbnail"
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 hover:bg-black/40"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-100 group-hover:scale-90 transition-transform duration-300">
                  <IoPlay className="w-10 h-10 text-accent-3 transform translate-x-0.5" />
                </div>
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 -rotate-12">
              <FoodIllustration type="apple" />
            </div>
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}

export default Hero;