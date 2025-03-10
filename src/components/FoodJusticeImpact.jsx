import React from 'react';
import FoodIllustration from './FoodIllustration';

function FoodJusticeImpact() {
  return (
    <section id="impact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-accent-3">Impact</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Making a Difference
            </h2>
            <p className="md:text-md">
              Through our cooperative model and community initiatives, we're creating lasting change in food accessibility and community health. Our impact extends beyond providing fresh food – we're building a sustainable, equitable food system for generations to come.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-accent-3 mb-2">1,000+</h3>
                <p className="text-sm">Community Members Served</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-accent-1 mb-2">50+</h3>
                <p className="text-sm">Local Partnerships</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="organic-border overflow-hidden natural-shadow">
              <video
                src="https://video.wixstatic.com/video/c73eb8_4fa14cc656a641679506ef4991577e83/1080p/mp4/file.mp4"
                className="w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
              <FoodIllustration type="sunflower" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodJusticeImpact;