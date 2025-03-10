import React from 'react';
import FoodIllustration from './FoodIllustration';

function ContactHero() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/30 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10">
        <FoodIllustration type="sunflower" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
        <FoodIllustration type="leaf" />
      </div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <p className="mb-3 font-semibold md:mb-4 text-accent-3">Connect</p>
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="md:text-md bg-white/80 backdrop-blur-sm p-6 rounded-lg natural-shadow">
                We welcome your questions and feedback. Reach out to us anytime to learn more about Three Sisters Market Co-op and how you can get involved in our community!
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <button
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 hover:bg-accent-3 rounded-lg"
                >
                  Inquire
                </button>
                
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background-primary/20 to-transparent rounded-lg"></div>
            <div className="relative h-full organic-border overflow-hidden natural-shadow">
              <img
                src="https://static.wixstatic.com/media/c73eb8_802146f9688d459183fca03811e2b4b5~mv2.jpg"
                alt="Community members at farmers market"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24">
              <FoodIllustration type="leaf" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;