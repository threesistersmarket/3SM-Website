import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IoGift, 
  IoCalendar, 
  IoNutrition 
} from 'react-icons/io5';

function DonateWays() {
  return (
    <section id="ways-to-contribute" className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#F7F3E9] opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(135, 158, 60, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(208, 97, 41, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(230, 179, 116, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c10 10 20-10 30 0s20-10 30 0v60c-10-10-20 10-30 0s-20 10-30 0z' fill='%23879e3c' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Support</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Ways to Contribute to Our Mission
            </h2>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Your contributions make a significant impact in our community. Whether through a one-time gift or a recurring donation, every dollar helps us build a sustainable future.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 text-accent-3">
                  <IoGift className="w-full h-full" />
                </div>
                <span>Make a one-time donation today.</span>
              </li>
              <li className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 text-accent-3">
                  <IoCalendar className="w-full h-full" />
                </div>
                <span>Join our monthly giving program for ongoing support.</span>
              </li>
              <li className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 text-accent-3">
                  <IoNutrition className="w-full h-full" />
                </div>
                <span>Support local food initiatives with your donation.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
             <a 
                href="https://crm.bloomerang.co/HostedDonation?ApiKey=pub_577af9c6-e790-11ee-8862-0a3287177f03&WidgetId=563200"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300 w-full"
              >
                Donate Now
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="organic-border overflow-hidden natural-shadow">
              <img
                src="https://static.wixstatic.com/media/c73eb8_ed1b0dd0e51443ffb9374665543cc741~mv2.png"
                alt="Community garden"
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-80">
              <IoNutrition className="w-full h-full text-accent-3/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateWays;