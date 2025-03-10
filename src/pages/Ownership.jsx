import React from 'react';
import OwnershipHero from '../components/OwnershipHero';
import OwnershipBenefits from '../components/OwnershipBenefits';
import OwnershipForm from '../components/OwnershipForm';
import NewsletterSection from '../components/NewsletterSection';

function Ownership() {
  return (
    <div className="min-h-screen bg-white">
      <OwnershipHero />
      <OwnershipForm />
      <OwnershipBenefits />
      <NewsletterSection />
    </div>
  );
}

export default Ownership;