import React from 'react';
import { IoClose } from 'react-icons/io5';
import FoodIllustration from './FoodIllustration';

function AmayBio({ isOpen, onClose }) {
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
                src="https://static.wixstatic.com/media/c73eb8_b6de583f7c9f4a679d442f618c772799~mv2.jpg"
                alt="Amay M. James"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
              <FoodIllustration type="leaf" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Amay M. James</h2>
              <p className="text-accent-3 text-lg">1902-1989</p>
            </div>
            
            <div className="prose">
              <p>
                Amay Martin James, a dedicated teacher and community leader, began a Sunday School in 1922 that evolved into Amay James Presbyterian Church in 1942, serving West Boulevard with spiritual and social programs for over 40 years. A Charlotte teacher for more than four decades, she raised three sons and championed youth education, especially for young men. Her legacy lives on through the Amay James School (1959) and the Amay James Community Center (1977).
              </p>
              
              
            </div>

            <blockquote className="border-l-4 border-accent-3 pl-4 italic">
              "She did her best to guide, counsel and teach all who came to sit at her feet. The citizens in the community developed a great admiration for her and confidence in her. Those who came in contact with Miss Amay realized that her dedication was no ordinary thing but that it was a sincere offering of her talents in the hope that she could point them to a better and fuller life."
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

export default AmayBio;