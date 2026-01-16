'use client';

import Image from "next/image";
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/my-logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 sm:gap-8 md:gap-10">
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-base sm:text-lg font-medium hover:text-blue-700 transition-colors"
            >
              About me
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="text-base sm:text-lg font-medium hover:text-blue-700 transition-colors"
            >
              Projects
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                className="text-lg font-medium hover:text-blue-700 transition-colors py-2"
                onClick={(e) => {
                  handleSmoothScroll(e, 'about');
                  setMobileMenuOpen(false);
                }}
              >
                About me
              </a>
              <a 
                href="#projects" 
                className="text-lg font-medium hover:text-blue-700 transition-colors py-2"
                onClick={(e) => {
                  handleSmoothScroll(e, 'projects');
                  setMobileMenuOpen(false);
                }}
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
