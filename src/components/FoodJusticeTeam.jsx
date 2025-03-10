import React from 'react';
import FoodIllustration from './FoodIllustration';

function FoodJusticeTeam() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Project Manager",
      description: "Passionate about community empowerment and sustainable food access for all.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Mark Smith",
      role: "Community Leader",
      description: "Advocating for local ownership and collaboration within our neighborhoods.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sarah Lee",
      role: "Marketing Director",
      description: "Creating awareness and engagement through innovative outreach strategies.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Brown",
      role: "Finance Officer",
      description: "Ensuring financial sustainability and transparency for our co-op.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="team" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Team</h2>
          <p className="max-w-2xl mx-auto">
            Meet the dedicated individuals working to bring food justice to our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-accent-3"
              />
              <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
              <p className="text-accent-3 text-center mb-4">{member.role}</p>
              <p className="text-sm text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodJusticeTeam;