import React, { useState } from 'react';
import { IoChevronForward, IoShareSocial } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ShareModal from './ShareModal';
import NewsletterModal from './NewsletterModal';

function Timeline() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 slide-in-left md:sticky md:top-20 md:z-auto md:pr-4 md:pt-12">
            <p className="mb-3 font-semibold md:mb-4">Progress</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl gradient-text">
              Our Journey Towards Community Empowerment
            </h1>
            <p className="md:text-md">
              Join us as we build a cooperative grocery store. Together, we can combat food insecurity and foster community wealth.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                to="/donate"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
              >
                Donate
              </Link>
              <button 
                onClick={() => setIsShareModalOpen(true)}
                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 group hover:text-accent-3"
              >
                Share
                <IoShareSocial className="transform group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-2 h-16 w-1 bg-gradient-to-b from-[#F7F3E9] to-transparent"></div>
            <div className="sticky top-0 mt-[-10vh] h-[50vh] w-[3px] bg-neutral-black"></div>
            <div className="h-full w-[3px] bg-neutral-lighter"></div>
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-[#F7F3E9]"></div>
            <div className="absolute top-[-10vh] h-[15vh] w-full bg-[#ffffff]"></div>
          </div>
          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            {[
              {
                year: "2024",
                title: "City of Charlotte Funding",
                description: "In 2024, we received $1.5 million in funding from the City of Charlotte, marking another significant milestone in our development.",
                primaryButton: "Support",
                secondaryButton: "Share"
              },
              {
                year: "2023",
                title: "Construction Commitment",
                description: "We received a $3,000,000 commitment for construction from Mecklenburg County in 2023. This funding is essential for bringing our vision to life.",
                primaryButton: "Support",
                secondaryButton: "Follow"
              },
              {
                year: "2023",
                title: "Lease Agreement Signed",
                description: "In 2023, we signed a 99-year lease with Inlivian. This partnership secures our future location.",
                primaryButton: "Explore",
                secondaryButton: "Follow"
              },
              {
                year: "2022",
                title: "Funding Secured",
                description: "In 2022, we secured $750,000 in earmarked funds from Congresswoman Alma Adams. This support is vital for our development.",
                primaryButton: "Join",
                secondaryButton: "Connect"
              },
              {
                year: "2022",
                title: "Incorporation Filed",
                description: "We officially filed our Articles of Incorporation with the NC Secretary of State in 2022. This crucial step laid the foundation for our cooperative.",
                primaryButton: "Donate",
                secondaryButton: "Subscribe"
              }
            ].map((item, index) => (
              <div className="relative scale-in" style={{ animationDelay: `${index * 0.2}s` }} key={index}>
                <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
                  <div className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#F7F3E9] md:mt-8 pulse" style={{backgroundColor: "rgba(44, 85, 48, 1)"}}></div>
                </div>
                <div className="ml-12 mt-4 flex flex-col md:ml-0">
                  <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl gradient-text">
                    {item.year}
                  </h2>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Link 
                      to={item.primaryButton === "Support" || item.primaryButton === "Donate" ? "/donate" : "/ownership"}
                      className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
                    >
                      {item.primaryButton}
                    </Link>
                    <button 
                      onClick={() => setIsNewsletterModalOpen(true)}
                      className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 hover:text-accent-3 transition-colors"
                    >
                      {item.secondaryButton}
                      <IoChevronForward className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </section>
  );
}

export default Timeline;