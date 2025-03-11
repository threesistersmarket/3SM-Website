import React from 'react';
import { IoClose, IoMail, IoCall, IoGlobe } from 'react-icons/io5';

function TeamMemberModal({ isOpen, onClose, member }) {
  if (!isOpen || !member) return null;

  return (
<div className="fixed inset-0 z-50 flex items-start justify-center pt-40 p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="w-6 h-6" />
        </button>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">  <div>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
            <p className="text-accent-3 text-lg mb-4">{member.title}</p>
            
            {member.credentials && (
              <div className="mb-4">
                <h3 className="font-bold mb-2">Credentials</h3>
                <p>{member.credentials}</p>
              </div>
            )}

            <div className="mb-4">
              <h3 className="font-bold mb-2">About</h3>
              <p className="text-gray-600">{member.bio}</p>
            </div>

            {member.contact && (
              <div className="space-y-2">
                {member.contact.email && (
                  <a 
                    href={`mailto:${member.contact.email}`}
                    className="flex items-center gap-2 text-accent-3 hover:text-accent-1"
                  >
                    <IoMail className="w-5 h-5" />
                    {member.contact.email}
                  </a>
                )}
                {member.contact.phone && (
                  <a 
                    href={`tel:${member.contact.phone}`}
                    className="flex items-center gap-2 text-accent-3 hover:text-accent-1"
                  >
                    <IoCall className="w-5 h-5" />
                    {member.contact.phone}
                  </a>
                )}
                {member.contact.website && (
                  <a 
                    href={member.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-3 hover:text-accent-1"
                  >
                    <IoGlobe className="w-5 h-5" />
                    Website
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberModal;