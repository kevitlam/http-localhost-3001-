import React, { useEffect } from 'react';

const MovingArtwork = () => {
  useEffect(() => {
    // Initialize SAL animation system
    const initSAL = () => {
      const elements = document.querySelectorAll('[data-sal]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sal-animate');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      elements.forEach(el => observer.observe(el));

      return () => {
        elements.forEach(el => observer.unobserve(el));
      };
    };

    const cleanup = initSAL();
    return cleanup;
  }, []);

  return (
    <>
      {/* Artwork elements with proper data-sal animations */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ mixBlendMode: 'normal' }}
      >
        {/* Main floating logo elements */}
        <div 
          className="absolute top-[20%] left-[15%] w-24 h-24 opacity-[0.05] transition-all duration-[2000ms] ease-out"
          data-sal="custom"
          data-sal-delay="500"
          data-sal-duration="2000"
          style={{
            transform: 'translateY(20px)',
            animation: 'artworkFloat 15s ease-in-out infinite'
          }}
        >
          <svg 
            className="w-full h-full text-accent" 
            viewBox="0 0 153 28" 
            fill="none"
          >
            <path 
              d="M36.281 18.192a12.934 12.934 0 0 1-3.363 4.956c-1.462 1.314-2.923 1.97-4.385 1.968a2.193 2.193 0 0 1-1.456-.433 1.421 1.421 0 0 1-.51-1.14c0-1.417.715-2.577 2.144-3.481 1.429-.905 3.896-1.974 7.4-3.207l.787-.274-.617 1.611Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        <div 
          className="absolute top-[60%] right-[20%] w-16 h-16 border border-accent rounded-full opacity-[0.08]"
          data-sal="custom"
          data-sal-delay="1000"
          data-sal-duration="1500"
          style={{
            transform: 'translateY(20px)',
            animation: 'artworkRotate 20s linear infinite'
          }}
        />

        <div 
          className="absolute bottom-[30%] left-[25%] w-20 h-20 opacity-[0.06]"
          data-sal="custom"
          data-sal-delay="1500"
          data-sal-duration="1800"
          style={{
            transform: 'translateY(20px)',
            animation: 'artworkPulse 12s ease-in-out infinite'
          }}
        >
          <div className="w-full h-full bg-accent rounded-full" />
        </div>

        <div 
          className="absolute top-[45%] left-[70%] w-12 h-12 opacity-[0.04]"
          data-sal="custom"
          data-sal-delay="2000"
          data-sal-duration="1200"
          style={{
            transform: 'translateY(20px)',
            animation: 'artworkFloat 18s ease-in-out infinite reverse'
          }}
        >
          <svg 
            className="w-full h-full text-accent" 
            viewBox="0 0 100 100"
          >
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        <div 
          className="absolute bottom-[60%] right-[15%] w-28 h-28 opacity-[0.03]"
          data-sal="custom"
          data-sal-delay="800"
          data-sal-duration="2200"
          style={{
            transform: 'translateY(20px)',
            animation: 'artworkFloat 22s ease-in-out infinite'
          }}
        >
          <svg 
            className="w-full h-full text-accent" 
            viewBox="0 0 153 28" 
            fill="none"
          >
            <path 
              d="M22.141 7.056c-.433 2.708-3.015 5.153-5.756 5.446-.3.028-.6.04-.902.038H8.955c.72-1.99 1.42-3.916 2.121-5.84.299-.823.625-1.645.907-2.467.102-.299.217-.45.57-.447 2.366.02 4.734 0 7.1.025 1.759.03 2.784 1.406 2.488 3.242v.003Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Subtle gradient overlay */}
        <div 
          className="absolute bottom-[20%] left-[50%] w-32 h-32 transform -translate-x-1/2 opacity-[0.02]"
          data-sal="custom"
          data-sal-delay="1800"
          data-sal-duration="1600"
          style={{
            transform: 'translateY(20px)',
            animation: 'artworkPulse 16s ease-in-out infinite'
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-primary-500 to-accent rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes artworkFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.05;
          }
          25% { 
            transform: translateY(-20px) translateX(8px) rotate(2deg); 
            opacity: 0.08;
          }
          50% { 
            transform: translateY(-15px) translateX(-8px) rotate(-1deg); 
            opacity: 0.12;
          }
          75% { 
            transform: translateY(-25px) translateX(5px) rotate(1deg); 
            opacity: 0.06;
          }
        }

        @keyframes artworkRotate {
          0% { 
            transform: rotate(0deg) scale(1); 
            opacity: 0.08;
          }
          50% { 
            transform: rotate(180deg) scale(1.1); 
            opacity: 0.12;
          }
          100% { 
            transform: rotate(360deg) scale(1); 
            opacity: 0.08;
          }
        }

        @keyframes artworkPulse {
          0%, 100% { 
            opacity: 0.06; 
            transform: scale(1) rotate(0deg); 
          }
          33% { 
            opacity: 0.12; 
            transform: scale(1.15) rotate(2deg); 
          }
          66% { 
            opacity: 0.08; 
            transform: scale(1.05) rotate(-1deg); 
          }
        }
      `}</style>
    </>
  );
};

export default MovingArtwork;
