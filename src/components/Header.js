import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-semibold text-stone-900 hover:text-accent-600 transition-colors"
          >
            Miebach venture
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#investments" className="nav-link">Investments</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200">
            <div className="container py-4">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="nav-link text-stone-600 hover:text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#investments" className="nav-link text-stone-600 hover:text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Investments</a>
                <a href="#contact" className="nav-link text-stone-600 hover:text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
