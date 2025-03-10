import React from 'react';
import ThreeSistersHero from '../components/ThreeSistersHero';
import ThreeSistersMeet from '../components/ThreeSistersMeet';
import ThreeSistersAgricultural from '../components/ThreeSistersAgricultural';
import ThreeSistersLegacy from '../components/ThreeSistersLegacy';
import ThreeSistersCallToAction from '../components/ThreeSistersCallToAction';

function ThreeSisters() {
  return (
    <div className="min-h-screen bg-white">
      <ThreeSistersHero />
      <ThreeSistersMeet />
      <ThreeSistersAgricultural />
      <ThreeSistersLegacy />
      <ThreeSistersCallToAction />
    </div>
  );
}

export default ThreeSisters;