import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import NewsletterModal from './NewsletterModal';

function Footer() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-primary/10 bg-[#F0F7F4] px-[5%] py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-sm text-text-primary/80">
              Building a sustainable, community-owned grocery store that serves everyone.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-text-primary">About</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/three-sisters" className="text-sm text-text-primary/80 hover:text-accent-3">Our Story</Link></li>
              <li><Link to="/coop-education" className="text-sm text-text-primary/80 hover:text-accent-3">Co-op Education</Link></li>
              <li><Link to="/food-justice" className="text-sm text-text-primary/80 hover:text-accent-3">Food Justice</Link></li>
              <li><Link to="/contact" className="text-sm text-text-primary/80 hover:text-accent-3">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-text-primary">Get Involved</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/ownership" className="text-sm text-text-primary/80 hover:text-accent-3">Become an Owner</Link></li>
              <li><Link to="/team" className="text-sm text-text-primary/80 hover:text-accent-3">Meet Our Team</Link></li>
              <li><Link to="/contact" className="text-sm text-text-primary/80 hover:text-accent-3">Volunteer</Link></li>
              <li><Link to="/donate" className="text-sm text-text-primary/80 hover:text-accent-3">Donate</Link></li>
              <li><Link to="/contact" className="text-sm text-text-primary/80 hover:text-accent-3">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-text-primary">Connect</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/contact" className="text-sm text-text-primary/80 hover:text-accent-3">Contact Us</Link></li>
              <li>
                <button 
                  onClick={() => setIsNewsletterModalOpen(true)}
                  className="text-sm text-text-primary/80 hover:text-accent-3 transition-colors duration-200"
                >
                  Newsletter
                </button>
              </li>
              
              <li><a href="https://www.instagram.com/3smclt/" target="_blank" rel="noopener noreferrer" className="text-sm text-text-primary/80 hover:text-accent-3">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col gap-6 border-t border-border-primary/20 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/privacy-policy" className="text-text-primary/80 hover:text-accent-3">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-text-primary/80 hover:text-accent-3">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-text-primary/80 hover:text-accent-3">Cookie Policy</Link>
            <Link to="/media-disclaimer" className="text-text-primary/80 hover:text-accent-3">Media Disclaimer</Link>
          </div>
          <p className="text-sm text-text-primary/80">© {currentYear} Three Sisters Market Co-op. All rights reserved.<br className="md:hidden" />  Designed by <a href="https://www.sitesonpolaris.com" className="text-light hover:text-accent-3 transition-colors">Sites on Polaris.</a>
</p>
        </div>
      </div>

      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </footer>
  );
}

export default Footer;
