import React from 'react';
import { IoClose } from 'react-icons/io5';
import FoodIllustration from './FoodIllustration';

function DorothyBio({ isOpen, onClose }) {
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
                src="https://static.wixstatic.com/media/c73eb8_e195831fa21143eeaafb2e3a0a70743b~mv2.gif"
                alt="Dorothy Waddy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
              <FoodIllustration type="leaf" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Dorothy Waddy</h2>
              <p className="text-accent-3 text-lg">1923-2010</p>
            </div>
            
            <div className="prose">
              <p>
                Ms. Dorothy Waddy was born on March 1, 1939 in Warrenton, VA. Ms. Waddy moved to Clanton Park in 1968 where she raised her family and later became a prominent community leader. She joined Friendship Missionary Baptist Church in November of 1968 and immediately joined Sunday School, which she taught for many years as a Sunday School Teacher, Department Superintendent and Superintendent. She also formed a youth group and managed it for several years.
              </p>
              <p>
                In 1998 Dorothy felt a calling to go back and do more work in the area where she lived. Her belief was "to whom much is given, much is required.” In 2002 Ms. Waddy spearheaded the West Boulevard Neighborhood Coalition that later received its non-profit status in 2007.
              </p>
              <p>
                Her legacy lives on through our cooperative's commitment to:
              </p>
            </div>

            <blockquote className="border-l-4 border-accent-3 pl-4 italic">
              "Give a man a fish to feed him for a day...Teach a man to fish to feed him for a lifetime."
            </blockquote>
            <p>-Rose Leary Love, Plum Thickets and Field Daisies: A Memoir</p>
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
          <FoodIllustration type="leaf" />
        </div>
      </div>
    </div>
  );
}

export default DorothyBio;