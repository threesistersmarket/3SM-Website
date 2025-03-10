import React, { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function VolunteersSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  const volunteers = [
    {
      name: "David Park",
      title: "Community Garden Coordinator",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
      bio: "David leads our community garden program, sharing his expertise in urban farming and sustainable agriculture with fellow community members.",
      service: "2 years",
      impact: "Established 3 community gardens, trained over 50 residents in urban farming",
      areas: ["Garden Management", "Education", "Sustainability"]
    },
    {
      name: "Emily Martinez",
      title: "Events Coordinator",
      image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
      bio: "Emily organizes community events and workshops that bring neighbors together and promote food education and healthy living.",
      service: "1.5 years",
      impact: "Organized 24 community events, reaching over 1,000 residents",
      areas: ["Event Planning", "Community Outreach", "Education"]
    },
    {
      name: "Marcus Johnson",
      title: "Youth Program Leader",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      bio: "Marcus leads our youth education programs, inspiring the next generation to understand the importance of healthy food and community involvement.",
      service: "3 years",
      impact: "Mentored 30+ youth, developed curriculum for schools",
      areas: ["Youth Education", "Mentoring", "Program Development"]
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Volunteers</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Meet the dedicated community members who contribute their time and talents to make Three Sisters Market thrive.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent-3 hover:text-accent-1"
          >
            Interested in volunteering? Join us!
            <IoChevronForward className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((member, index) => (
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
                <p className="text-accent-3 mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-4">Service: {member.service}</p>
                <div className="flex flex-wrap gap-2">
                  {member.areas.map((area, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-accent-3/10 text-accent-3 px-2 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
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

export default VolunteersSection;