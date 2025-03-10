import React, { useState, useEffect } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import FoodIllustration from './FoodIllustration';

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
     {
      url: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot.jpg",
      title: "Community Strength",
      description: "West Blvd Coalition Fest"
    },
    {
      url: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//gardening%20picture.jpg",
      title: "Community Garden",
      description: "Growing together in our shared spaces"
    },
    {
      url: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//garden%20shot.jpg",
      title: "Fresh Produce",
      description: "Local, sustainable, and nutritious"
    },
    {
      url: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//school%20shot.jpg",
      title: "Community Events",
      description: "Building connections within the community"
    },
    {
      url: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//seeds%20for%20change.jpg",
      title: "Local Farmers",
      description: "Supporting our regional food system"
    }
  ];

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
  };

  // Resume autoplay when mouse leaves the gallery
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Pause autoplay when mouse enters the gallery
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/30 to-transparent"></div>
      
      <div className="container relative">
        <div className="text-center mb-12">
          <p className="mb-3 font-semibold md:mb-4 text-accent-3">Our Community</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Growing Together
          </h2>
          <p className="max-w-2xl mx-auto md:text-md">
            Explore moments from our community as we build a sustainable and equitable food system.
          </p>
        </div>

        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10">
            <FoodIllustration type="sunflower" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
            <FoodIllustration type="leaf" />
          </div>

          {/* Gallery */}
          <div 
            className="relative h-[600px] organic-border overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="relative min-w-full h-full"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-accent-3 hover:bg-white transition-colors duration-300"
              aria-label="Previous slide"
            >
              <IoChevronBack className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-accent-3 hover:bg-white transition-colors duration-300"
              aria-label="Next slide"
            >
              <IoChevronForward className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="mt-4 text-center text-sm text-gray-600">
            * Some images may be used from the Weaver St locations. See our{' '}
            <Link to="/media-disclaimer" className="text-accent-3 hover:text-accent-1 underline">
              Media Disclaimer
            </Link>{' '}
            for more information.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;