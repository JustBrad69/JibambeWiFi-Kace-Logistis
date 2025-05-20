import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md">
        Skip to main content
      </a>
      
      <nav className="container mx-auto px-4 py-3 md:py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-3" aria-label="Home">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-900 rounded-full flex items-center justify-center">
                <Wifi className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-blue-900">Jibambe <span className="text-blue-500">Wifi</span></span>
                <div className="text-sm text-gray-600">by Kace Logistics Limited</div>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8" aria-label="Primary navigation">
              <a href="#packages" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Packages</a>
              <a href="#coverage" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Coverage</a>
              <a href="#payment" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Payment</a>
              <a href="tel:0707374749" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Call Us</a>
            </nav>
          </div>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-6" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4">
              <a 
                href="#packages" 
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Packages
              </a>
              <a 
                href="#coverage" 
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Coverage
              </a>
              <a 
                href="#payment" 
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Payment
              </a>
              <a 
                href="tel:0707374749" 
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Call Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;