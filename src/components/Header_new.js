import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Collective', href: '#about' },
    { name: 'Investments', href: '#investments' },
    { name: 'Stories', href: '#stories' },
  ];

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 mx-auto max-w-xxxl bg-black px-4 py-4 shadow-md md:px-8 transition-header ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{ fontSize: '15px' }}
      data-sal="fade" 
      data-sal-delay="300" 
      data-sal-duration="500"
    >
      <nav 
        className="flex flex-row flex-wrap items-baseline italic leading-[0.8]"
        style={{ fontSize: '2.25em' }}
      >
        <a 
          href="#" 
          className="mr-[0.4em] block overflow-hidden"
        >
          <span className="font-bold text-baukunst">Miebach</span>
        </a>
        
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-link overflow-hidden leading-[0.8] px-1"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
