import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronForward, IoSwapHorizontal, IoPeople, IoSchool, IoHandLeft, IoPlay } from 'react-icons/io5';

function CoopEducationHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "https://video.wixstatic.com/video/c73eb8_c49c4da77a0e4593851defd9233aab5e/1080p/mp4/file.mp4",
    "https://video.wixstatic.com/video/c73eb8_e46ad9da33354f8bb6de7406d9cd3a22/1080p/mp4/file.mp4"
  ];

  const handlePlayClick = () => {
    const video = document.getElementById('hero-video');
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoSwitch = () => {
    setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
    setIsPlaying(false);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <div className="fade-in">
            <h1 className="text-5xl font-bold md:text-9xl lg:text-10xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent mb-8">
              Understanding Co-ops
            </h1>
            
            {/* Cooperative Education Graphic */}
            <div className="relative p-8 bg-white rounded-lg shadow-lg border-t-4 border-accent-3">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-3/10 rounded-full">
                    <IoPeople className="w-8 h-8 text-accent-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Community Ownership</h3>
                    <p className="text-sm text-gray-600">Democratic control and shared benefits</p>
                  </div>
                </div>
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-1 h-full bg-accent-3/20 transform rotate-45"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-1/10 rounded-full">
                    <IoSchool className="w-8 h-8 text-accent-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Continuous Learning</h3>
                    <p className="text-sm text-gray-600">Education and skill development</p>
                  </div>
                </div>
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-1 h-full bg-accent-1/20 transform -rotate-45"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-2/10 rounded-full">
                    <IoHandLeft className="w-8 h-8 text-accent-2" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Mutual Support</h3>
                    <p className="text-sm text-gray-600">Cooperation among cooperatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slide-in-right">
            <div className="relative organic-border overflow-hidden natural-shadow">
              <video
                id="hero-video"
                src={videos[currentVideo]}
                className="w-full object-cover [&::-webkit-media-controls-panel]:opacity-0 hover:[&::-webkit-media-controls-panel]:opacity-100 [&::-webkit-media-controls-panel]:transition-opacity"
                controls
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 hover:bg-black/40"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-100 group-hover:scale-90 transition-transform duration-300">
                    <IoPlay className="w-10 h-10 text-accent-3 transform translate-x-0.5" />
                  </div>
                </button>
              )}
              <button
                onClick={handleVideoSwitch}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-accent-3 hover:bg-white transition-colors duration-300"
                aria-label="Switch video"
              >
                <IoSwapHorizontal className="w-6 h-6" />
              </button>
            </div>
            <p className="mt-6 md:text-md bg-white/80 backdrop-blur-sm p-6 rounded-lg natural-shadow">
              Discover how co-ops are carefully constructed through a thoughtful process that emphasizes collaboration and shared values. The active participation of the community is key to ensuring the co-op’s growth and sustainability, making it a truly collective effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoopEducationHero;