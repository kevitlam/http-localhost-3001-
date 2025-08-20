import React from 'react';

const Hero = () => {
  return (
    <main className="mx-auto max-w-xxxl overflow-hidden px-4 md:px-8">
      <div 
        className="flex min-h-[calc(min(100vh,1000px))] flex-col justify-end pb-6 md:min-h-[calc(min(100vh,960px))] lg:min-h-[calc(min(100vh,1300px))]" 
        data-sal="custom"
      >
        {/* Invisible header spacer (matches Baukunst exactly) */}
        <div aria-hidden="true" className="invisible">
          <header 
            className="mx-auto max-w-xxxl bg-black px-4 py-4 shadow-md md:px-8"
            style={{ fontSize: '15px' }}
          >
            <nav 
              className="flex flex-row flex-wrap items-baseline italic leading-[0.8]"
              style={{ fontSize: '2.25em' }}
            >
              <a className="mr-[0.4em] block overflow-hidden" href="#">
                <span className="font-bold text-baukunst">Miebach</span>
              </a>
              <a className="nav-link overflow-hidden leading-[0.8] px-1" href="#collective">
                Collective
              </a>
              <a className="nav-link overflow-hidden leading-[0.8] px-1" href="#investments">
                Investments
              </a>
              <a className="nav-link overflow-hidden leading-[0.8] px-1" href="#stories">
                Stories
              </a>
            </nav>
          </header>
        </div>

        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:gap-16">
          {/* Video section - matches Baukunst */}
          <div className="aspect-square md:flex-1">
            <div>
              <video 
                width="100%" 
                height="100%" 
                preload="auto" 
                loop 
                muted 
                autoPlay 
                playsInline
              >
                {/* Using a placeholder video URL - you can add actual video later */}
                <source 
                  type="video/mp4" 
                  src="https://cdn.sanity.io/files/k55gw5z9/production/07bba3efd968750ff8473b9a96396a089254c4e8.mp4"
                />
              </video>
            </div>
          </div>

          {/* Text content */}
          <div className="md:mb-5 md:w-1/2">
            <h1 className="font-liga text-40 italic md:hidden">
              The Art of Building
            </h1>
            <div className="richtext text-large mt-4">
              <p>
                Miebach Ventures is a collective of creative technologists advancing the art of building.
              </p>
              <p>
                Our inaugural $100M venture fund is dedicated to leading pre-seed investments in companies at the frontiers of technology and design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Large centered text section - exactly like Baukunst */}
      <div className="mx-auto my-20 flex max-w-6xl flex-col items-center justify-center lg:my-0 lg:h-screen">
        <h2 
          className="font-liga text-xlarge max-w-[28ch] whitespace-pre-line text-center italic" 
          data-sal="custom"
        >
          {`Seeking Creative Technologists:
those who are artists, 
inventors, and entrepreneurs`}
        </h2>
      </div>
    </main>
  );
};

export default Hero;
