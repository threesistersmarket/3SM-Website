import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-[5%] py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <span className={`block w-6 h-0.5 bg-current mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current mb-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <div className={`lg:flex items-center gap-8 ${
            isOpen 
              ? 'absolute top-full left-0 right-0 bg-white p-4 border-b border-border-primary/10 shadow-lg' 
              : 'hidden'
          } lg:static lg:bg-transparent lg:border-none lg:shadow-none`}>
            <Link 
              to="/" 
              className={`block py-2 text-base hover:text-accent-1 lg:inline-block ${isActive('/') ? 'text-accent-3' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/three-sisters" 
              className={`block py-2 text-base hover:text-accent-1 lg:inline-block ${isActive('/three-sisters') ? 'text-accent-3' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Three Sisters
            </Link>
            <Link 
              to="/coop-education" 
              className={`block py-2 text-base hover:text-accent-1 lg:inline-block ${isActive('/coop-education') ? 'text-accent-3' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Co-op Education
            </Link>
            <Link 
              to="/food-justice" 
              className={`block py-2 text-base hover:text-accent-1 lg:inline-block ${isActive('/food-justice') ? 'text-accent-3' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Food Justice
            </Link>
            <Link 
              to="/ownership" 
              className={`block py-2 text-base hover:text-accent-1 lg:inline-block ${isActive('/ownership') ? 'text-accent-3' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Ownership
            </Link>
            <Link 
              to="/team" 
              className={`block py-2 text-base hover:text-accent-1 lg:inline-block ${isActive('/team') ? 'text-accent-3' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Staff
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 text-base hover:text-accent-1 lg:inline-block ${isActive('/contact') ? 'text-accent-3' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col lg:flex-row gap-4 pt-6 lg:pt-0 ">
              <Link 
                to="/ownership"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary hover:bg-accent-3 hover:text-white hover:border-accent-3 px-4 py-2 pt-6bg-white rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Join
              </Link>
              <Link 
                to="/donate"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;