import React from 'react';
import { IoLeaf, IoEarth, IoPeople } from 'react-icons/io5';
import FoodIllustration from './FoodIllustration';

function FoodJusticeMission() {
  const values = [
    {
      title: "Self-Help",
      description: "Members support their own development and strengthen the cooperative through active participation.",
      icon: <IoLeaf className="w-8 h-8" />,
      image: "https://static.wixstatic.com/media/c73eb8_b1a9cfa38d8a4bd98a03bae60428b47a~mv2.jpg"
    },
    {
      title: "Self-Responsibility",
      description: "Members take ownership of their roles and commitments to ensure the co-op's success.",
      icon: <IoPeople className="w-8 h-8" />,
      image: "https://static.wixstatic.com/media/c73eb8_af3736898d944bac8c97d22bfcc75152~mv2.jpg"
    },
    {
      title: "Democracy",
      description: "Members actively participate in setting policies and making decisions through democratic processes.",
      icon: <IoEarth className="w-8 h-8" />,
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot%202.jpg"
    },
    {
      title: "Equality",
      description: "All members have equal rights and responsibilities within the cooperative.",
      icon: <IoLeaf className="w-8 h-8" />,
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//seeds%20for%20change%20group.jpg"
    },
    {
      title: "Equity",
      description: "Members contribute fairly and receive benefits in proportion to their participation.",
      icon: <IoPeople className="w-8 h-8" />,
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot%203.jpg"
    },
    {
      title: "Solidarity",
      description: "Members work together to create a stronger community and support mutual growth.",
      icon: <IoEarth className="w-8 h-8" />,
      image: "https://static.wixstatic.com/media/c73eb8_fb4bfb05acbc474a974c5f2b3c5eb2be~mv2.jpg"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F7F3E9] opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(135, 158, 60, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(208, 97, 41, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(230, 179, 116, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="container relative">
        {/* Mission & Vision Banner */}
        <div className="relative mb-16">
          <div className="absolute -top-4 -left-4 w-24 h-24 opacity-10">
            <FoodIllustration type="sunflower" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent-3/10 rounded-lg transform -rotate-2"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-accent-3 transform hover:rotate-2 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-16 h-16 opacity-10">
                  <FoodIllustration type="leaf" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-accent-3">Our Mission</h2>
                <p className="text-lg">
                  To create a community-owned grocery store that provides access to healthy, affordable food while building community wealth and promoting environmental sustainability.
                </p>
                <div className="mt-6 h-48 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Fresh produce"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-accent-1/10 rounded-lg transform rotate-2"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-accent-1 transform hover:-rotate-2 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-16 h-16 opacity-10">
                  <FoodIllustration type="sunflower" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-accent-1">Our Vision</h2>
                <p className="text-lg">
                  A thriving West Boulevard corridor where all residents have access to fresh, nutritious food and opportunities for economic empowerment through cooperative ownership.
                </p>
                <div className="mt-6 h-48 rounded-lg overflow-hidden">
                  <img 
                    src="https://static.wixstatic.com/media/c73eb8_300fc3c59d9f46d5b8ef62fa47d0b093~mv2.jpg"
                    alt="Community celebration"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            These values guide our decisions, shape our culture, and define our commitment to the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-accent-3">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {value.description}
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <FoodIllustration type={index % 2 === 0 ? "leaf" : "sunflower"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodJusticeMission;