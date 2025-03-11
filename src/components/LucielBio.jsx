import React from 'react';
import { IoClose } from 'react-icons/io5';
import FoodIllustration from './FoodIllustration';

function LucielBio({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
<div className="fixed inset-0 z-50 flex items-start justify-center pt-40 p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">      
      <div className="relative w-full max-w-4xl bg-white rounded-lg p-8 shadow-xl overflow-hidden ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="w-6 h-6" />
        </button>

        <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10">
          <FoodIllustration type="sunflower" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="organic-border overflow-hidden natural-shadow">
              <img
                src="https://static.wixstatic.com/media/c73eb8_35565fedec974dbc96266742adfd1442~mv2.jpg"
                alt="Luciel McNeel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
              <FoodIllustration type="leaf" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Luciel McNeel</h2>
              <p className="text-accent-3 text-lg">1915-2001</p>
            </div>
            
            <div className="prose">
              <p>
                Luciel McNeel succeeded in “putting West Boulevard on the map” by pushing the city to recognize the legitimate needs of local residents for their fair share of public services. Her legacy includes senior nutrition and children’s programs, utility and street improvements, a recreation center and a park.
              </p>
              <p>
                McNeel came to Charlotte from her native South Carolina to work in a defense factory during World War II. The good wages and working conditions she found were lost to her at the end of the war when she had to return to domestic work. Thus began a lifetime of activism for social and economic justice. She became a leader of the local “War on Poverty” agency and stood as a candidate for City Council in 1969 on the slate of the Black Political Organization.
              </p>
              
              <p>
                McNeel moved to the newly built Little Rock Apartments on West Boulevard in 1970 and became a champion for the neighborhood. She led the creation of the West Boulevard Neighborhood Coalition and provided its strong, undeniable voice. 
              </p>
            </div>

            <blockquote className="border-l-4 border-accent-3 pl-4 italic">
              "In our lives we sometimes run into a person carved out of granite, and maybe the Lord threw the mold away. She exemplifies the strong women who spoke out and people listened."
            </blockquote>
            <p>-Ron Leeper, Charlotte City Councilor</p>
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
          <FoodIllustration type="leaf" />
        </div>
      </div>
    </div>
  );
}

export default LucielBio;