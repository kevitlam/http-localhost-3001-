import React from 'react';

const Hero = () => {
  return (
    <section className="section-large pt-32">
      <div className="container">
        <div className="grid-responsive items-center">
          
          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-display">
                Building the future at the intersection of 
                <span className="text-accent"> technology</span> and 
                <span className="text-accent"> design</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-body-large">
                  Miebach Ventures is a $500M venture fund dedicated to leading pre-seed investments in companies at the frontiers of technology and design.
                </p>
                <p className="text-body">
                  We partner with creative technologists who are artists, inventors, and entrepreneurs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#investments" className="btn btn-primary">
                  View Portfolio
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Send Your Pitch
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="image-container aspect-[4/5]">
              <img 
                src="/images/michael-miebach.jpg" 
                alt="Michael Miebach, Founder & Managing Partner"
                className="image-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <p className="text-caption mt-4">
              Michael Miebach, Founder & Managing Partner
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
