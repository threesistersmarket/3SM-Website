import React, { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';
import { IoMail, IoCall, IoChevronForward } from 'react-icons/io5';
import FoodIllustration from './FoodIllustration';

function StaffSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  const staff = [
    {
      name: "Janiqua Jackson",
      title: "General Manager",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//Janiqua%20Jackson.jpg",
      bio: "Janiqua is passionate about the Three Sisters Market, our initiatives, and community engagement in creating a healthy, inclusive food system. It's inspiring to see the efforts being made to provide fresh and affordable food options to all community members, and the dedication of individuals like Janiqua Jackson, the General Manager of Three Sisters' Market, is truly commendable. The principles and values of the cooperative are also something to be admired, with a focus on democratic participation, autonomy, education, cooperation, and concern for the community. It's heartening to see the success and progress made by other food co-ops around the country, and Three Sisters Market is next up!",
      credentials: "20 years in Grocery Retail Business",
      contact: {
        email: "info@threesistersmarket.coop",
      }
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/30 to-transparent"></div>
      
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Meet Our General Manager</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Leading Three Sisters Market with passion, expertise, and dedication to our community's vision.
          </p>
        </div>

        {staff.map((member, index) => (
          <div 
            key={index}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10">
              <FoodIllustration type="sunflower" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <div className="organic-border overflow-hidden natural-shadow h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
                  <FoodIllustration type="leaf" />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-xl text-accent-3">{member.title}</p>
                </div>

                <div className="bg-accent-3/10 p-4 rounded-lg">
                  <p className="font-semibold text-accent-3 mb-2">Experience</p>
                  <p>{member.credentials}</p>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-600">{member.bio}</p>
                </div>

                <div className="space-y-3 pt-4">
                  <a 
                    href={`mailto:${member.contact.email}`}
                    className="flex items-center gap-3 text-accent-3 hover:text-accent-1 transition-colors"
                  >
                    <IoMail className="w-5 h-5" />
                    <span>{member.contact.email}</span>
                  </a>
                  
                </div>

               
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
              <FoodIllustration type="leaf" />
            </div>
          </div>
        ))}
      </div>

      <TeamMemberModal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </section>
  );
}

export default StaffSection;