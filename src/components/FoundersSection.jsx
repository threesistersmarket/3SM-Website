import React, { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';

function FoundersSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  const founders = [
    {
      name: "Dorothy Waddy",
      title: "Founding Member",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Dorothy%20Waddy.gif",
      bio: "Dorothy Waddy was a dedicated advocate for social justice and equality, whose influence shaped the West Boulevard Corridor. Her commitment to community empowerment continues to guide our mission.",
      vision: "To create a community where everyone has access to healthy, affordable food and the opportunity to build generational wealth through cooperative ownership.",
      highlights: [
        "Founded West Boulevard Neighborhood Coalition",
        "Established community food programs",
        "Advocated for food justice and accessibility"
      ]
    },
    {
      name: "Luciel McNeel",
      title: "Founding Member",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Luciel.jpg",
      bio: "Luciel McNeel was a transformative leader whose dedication to community welfare and empowerment continues to inspire. Her work in establishing community programs created lasting positive change.",
      vision: "To build a self-sustaining community through cooperative economics and food sovereignty.",
      highlights: [
        "Led community development initiatives",
        "Championed cooperative ownership model",
        "Created educational programs"
      ]
    },
    {
      name: "Amay M. James",
      title: "Founding Member",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Amay%20James.jpg",
      bio: "Amay M. James was a trailblazer who dedicated her life to education and community empowerment in the West Boulevard Corridor. Her vision for inclusive education and social justice laid the foundation for future generations.",
      vision: "To empower communities through education and economic opportunity.",
      highlights: [
        "Established educational initiatives",
        "Created youth development programs",
        "Built community partnerships"
      ]
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">The Three Sisters</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Honoring the visionary leaders who laid the foundation for Three Sisters Market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent-3 mb-4">{member.title}</p>
                <p className="text-gray-600 line-clamp-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TeamMemberModal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </section>
  );
}

export default FoundersSection;