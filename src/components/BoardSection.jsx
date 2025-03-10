import React, { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';

function BoardSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = [
    {
      name: "Guy Cousins",
      title: "Board Chair",
      organization: "Freedmen Law Group",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Guy%20Cousins.jpg",
      bio: "Guy Cousins brings extensive legal expertise and community leadership experience to his role as Board Chair. His commitment to social justice and community empowerment aligns perfectly with Three Sisters Market's mission.",
      credentials: "J.D., Community Development Law",
      currentRole: "Partner, Freedmen Law Group"
    },
    {
      name: "Pastor Major Stewart",
      title: "Vice Chair",
      organization: "Greater Mt. Sinai",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Pastor%20Major%20Stewart.jpg",
      bio: "As Vice Chair, Pastor Major Stewart leverages his deep community connections and leadership experience to help guide Three Sisters Market's community engagement and outreach efforts.",
      credentials: "M.Div., Community Leadership",
      currentRole: "Pastor, Greater Mt. Sinai"
    },
    {
      name: "Byron White",
      title: "Secretary",
      organization: "UNC Charlote",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Bryon%20White.jpg",
      bio: "Byron White brings academic expertise and research experience from UNCC, helping to ensure our initiatives are data-driven and evidence-based.",
      credentials: "Ed.D., Higher Education, Community Engagement",
      currentRole: "Professor, University of North Carolina at Charlotte"
    },
    {
      name: "Dr. Debra Terrell",
      title: "Treasurer",
      organization: "JCSU",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Debra%20Terrell_f2023(2).jpg",
      bio: "Dr. Debra Terrell, a Health Psychologist from Johnson C. Smith University, provides critical oversight of our financial strategies and sustainability planning, ensuring the cooperative's financial health and community impact.",
      credentials: "Ph.D., Psychology, Professor at JCSU",
      currentRole: "Professor, Johnson C. Smith University"
    },
    {
      name: "Rickey Hall",
      title: "Board Member",
      organization: "WBNC",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Rickey%20Hall_edited.jpg",
      bio: "Rickey Hall represents the West Boulevard Neighborhood Coalition, bringing grassroots perspective and community advocacy experience to the board.",
      credentials: "Community Organizer, WBNC Leader",
      currentRole: "Community Leader, West Boulevard Neighborhood Coalition"
    },
    {
      name: "Mac Everett",
      title: "Board Member",
      organization: "",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//IMG_0893.jpg",
      bio: "Mac Everett contributes valuable business expertise and strategic planning experience to help guide Three Sisters Market's growth and development.",
      credentials: "Business Strategy Expert",
      currentRole: "Strategic Advisor"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Board of Directors</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Meet our dedicated board members who guide Three Sisters Market's mission and strategic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
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
                {member.organization && (
                  <p className="text-sm text-gray-600 mb-4">{member.organization}</p>
                )}
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

export default BoardSection;