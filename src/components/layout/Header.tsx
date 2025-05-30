import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className={`py-4 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">UPWIZZ</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="#news" className="text-gray-300 hover:text-white transition-colors">News</a>
            <Button variant="accent">Contact Us</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-gray-900 absolute w-full transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          <a 
            href="#services" 
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#team" 
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </a>
          <a 
            href="#news" 
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            News
          </a>
          <Button 
            variant="accent" 
            className="w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;