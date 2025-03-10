import React from 'react';
import FoodJusticeHero from '../components/FoodJusticeHero';
import FoodJusticeMission from '../components/FoodJusticeMission';
import FoodJusticeInitiatives from '../components/FoodJusticeInitiatives';
import FoodJusticeImpact from '../components/FoodJusticeImpact';
import FoodJusticeCallToAction from '../components/FoodJusticeCallToAction';

function FoodJustice() {
  return (
    <div className="min-h-screen bg-white">
      <FoodJusticeHero />
      <FoodJusticeMission />
      <FoodJusticeInitiatives />
      <FoodJusticeImpact />
      <FoodJusticeCallToAction />
    </div>
  );
}

export default FoodJustice;