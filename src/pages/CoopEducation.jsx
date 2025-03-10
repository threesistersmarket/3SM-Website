import React from 'react';
import CoopEducationHero from '../components/CoopEducationHero';
import CoopEducationPrinciples from '../components/CoopEducationPrinciples';
import CoopEducationBenefits from '../components/CoopEducationBenefits';
import CoopEducationResources from '../components/CoopEducationResources';
import CoopEducationCallToAction from '../components/CoopEducationCallToAction';
import Gallery2 from '../components/Gallery2';


function CoopEducation() {
  return (
    <div className="min-h-screen bg-white">
      <CoopEducationHero />
      <CoopEducationPrinciples />
      <Gallery2 />
      <CoopEducationBenefits />
      <CoopEducationResources />
      <CoopEducationCallToAction />
    </div>
  );
}

export default CoopEducation;