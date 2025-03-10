import React from 'react';
import FoodIllustration from './FoodIllustration';

function ThreeSistersAgricultural() {
  const plants = [
    {
      name: "Corn",
      description: "Provides strong stalks for support",
      image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "corn"
    },
    {
      name: "Beans",
      description: "Enriches soil with nitrogen",
      image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "bean"
    },
    {
      name: "Squash",
      description: "Provides ground cover",
      image: "https://images.pexels.com/photos/28316955/pexels-photo-28316955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: "squash"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="fade-in">
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              The Agricultural Three Sisters
            </h1>
            <h2 className="mb-4 text-3xl font-semibold md:mb-5 md:text-4xl lg:text-5xl text-accent-3">
             A Model of Sustainability
            </h2>
            <p className="md:text-md bg-white/80 backdrop-blur-sm p-6 rounded-lg natural-shadow">
              The Three Sisters planting technique, rooted in Indigenous agriculture, showcases a harmonious relationship where corn supports, beans enrich, and squash protects. This practice embodies our co-op's commitment to mutual support, nourishment, and community protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 slide-in-right">
            {plants.map((plant, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                    <h3 className="text-xl font-bold">{plant.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 z-20">
                    <FoodIllustration type={plant.icon} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-text-primary">{plant.description}</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 opacity-20">
                  <FoodIllustration type={plant.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeSistersAgricultural;