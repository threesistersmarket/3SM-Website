import React from 'react';
import TeamHero from '../components/TeamHero';
import StaffSection from '../components/StaffSection';
import BoardSection from '../components/BoardSection';
import FoundersSection from '../components/FoundersSection';
import VolunteersSection from '../components/VolunteersSection';

function Team() {
  return (
    <div className="min-h-screen bg-white">
      <TeamHero />
      <StaffSection />
      <BoardSection />
      <FoundersSection />
    </div>
  );
}

export default Team;