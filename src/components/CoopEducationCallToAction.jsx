import React from 'react';
import { Link } from 'react-router-dom';

function CoopEducationCallToAction() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ready to Join Our Co-op?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Become a member-owner today and help shape the future of food access in our community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/ownership"
            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
          >
            Become an Owner
          </Link>
          <Link
            to="/contact"
            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3 hover:bg-accent-3 hover:text-white rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CoopEducationCallToAction;