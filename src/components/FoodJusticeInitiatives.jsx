import React from 'react';
import { 
  IoNutrition, 
  IoSchool, 
  IoPeople, 
  IoLeaf 
} from 'react-icons/io5';

function FoodJusticeInitiatives() {
  const initiatives = [
    {
      title: "Food Access",
      description: "Creating equitable access to fresh, nutritious food through our community-owned market.",
      icon: <IoNutrition className="w-full h-full" />
    },
    {
      title: "Education",
      description: "Providing nutrition education and cooking classes to empower healthy food choices.",
      icon: <IoSchool className="w-full h-full" />
    },
    {
      title: "Community",
      description: "Building strong community connections through food-centered programs and events.",
      icon: <IoPeople className="w-full h-full" />
    },
    {
      title: "Sustainability",
      description: "Supporting local farmers and implementing environmentally conscious practices.",
      icon: <IoLeaf className="w-full h-full" />
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Our Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 text-accent-3">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
              <p>{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodJusticeInitiatives;