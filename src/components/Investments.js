import React from 'react';

const Investments = () => {
  const currentInvestments = [
    { name: "Bindery Books", url: "https://binderybooks.com/", description: "Platform turning online book tastemakers into publishers", amount: "$2.5M Pre-Seed" },
    { name: "Dig Energy", url: "https://dig.energy/", description: "Affordable geothermal energy solutions", amount: "$3.2M Pre-Seed" },
    { name: "Direct Booker", url: "https://www.directbooker.com/", description: "Compare hotels, then book direct", amount: "$1.8M Pre-Seed" },
    { name: "Dobby", url: "https://app.getdobby.ai/", description: "AI-powered supply chain automation", amount: "$4.1M Pre-Seed" },
    { name: "Estes", url: "https://www.estes.energy/home", description: "Next generation battery systems for electric vehicles", amount: "$5.5M Pre-Seed" },
    { name: "Eyebot", url: "https://eyebot.co/", description: "Self-serve rapid eye exams and prescriptions", amount: "$2.9M Pre-Seed" },
    { name: "Five Flute", url: "https://www.fiveflute.com/", description: "Design review and issue tracking for engineering teams", amount: "$1.5M Pre-Seed" },
    { name: "GOB", url: "https://www.gob.earth/", description: "Sustainable hearing protection", amount: "$2.1M Pre-Seed" },
    { name: "Motif", url: "https://motif.io/", description: "Next-generation design platform for buildings", amount: "$3.8M Pre-Seed" },
    { name: "Offe Market", url: "https://offe.market/", description: "The future of off-price retail", amount: "$2.7M Pre-Seed" },
    { name: "Orange Charger", url: "https://www.orangecharger.com/", description: "EV charging for multi-family residential", amount: "$4.3M Pre-Seed" },
    { name: "Output", url: "https://output.app/", description: "Workplace communications for ambitious teams", amount: "$1.9M Pre-Seed" },
    { name: "Picture Studio", url: "https://picturestudio.ai/", description: "AI-powered image tools for designers", amount: "$2.4M Pre-Seed" },
    { name: "Recess", url: "https://hello-recess.com/Austin/", description: "After school programs and camps discovery", amount: "$1.6M Pre-Seed" },
    { name: "Software Defined Automation", url: "https://www.softwaredefinedautomation.io/", description: "Industrial DevOps for automation engineers", amount: "$3.5M Pre-Seed" },
    { name: "Sylvie", url: "https://sylvie.co/about", description: "Marketplace for vintage home furnishings", amount: "$2.2M Pre-Seed" },
    { name: "Threaded Manufacturing", url: "https://threadedmfg.com/", description: "Collaborative manufacturing development", amount: "$3.1M Pre-Seed" }
  ];

  const pastInvestments = [
    { name: "Bobbie", url: "https://www.hibobbie.com/", description: "Direct to consumer infant formula", amount: "$15M Exit" },
    { name: "Onshape", url: "https://www.onshape.com/", description: "Cloud-based 3D CAD platform", amount: "$470M Exit" },
    { name: "Fyto", url: "https://www.fyto.us/", description: "Advanced plant breeding technology", amount: "$25M Exit" },
    { name: "Solidworks", url: "https://www.solidworks.com/", description: "3D CAD design software", amount: "$310M Exit" }
  ];

  return (
    <section id="investments" className="section">
      <div className="container">
        
        {/* Introduction */}
        <div className="grid-responsive items-center mb-20">
          <div>
            <h2 className="text-display mb-6">Portfolio</h2>
            <p className="text-body-large">
              We invest in ambitious companies at the frontiers of technology and design, 
              leading pre-seed rounds and often investing the full round ourselves.
            </p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-4xl font-bold text-stone-900 mb-2">$500M</div>
            <div className="text-body">Fund Size</div>
          </div>
        </div>

        {/* Current Investments */}
        <div className="mb-20">
          <h3 className="text-heading mb-8">Current Investments</h3>
          <div className="space-y-0">
            {currentInvestments.map((investment, index) => (
              <div key={index} className="portfolio-item">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-stone-900 mb-1">
                      {investment.url ? (
                        <a 
                          href={investment.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-accent-600 transition-colors"
                        >
                          {investment.name}
                        </a>
                      ) : (
                        investment.name
                      )}
                    </h4>
                    <p className="text-body">
                      {investment.description}
                    </p>
                  </div>
                  <div className="text-right md:min-w-[120px]">
                    <span className="text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                      {investment.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Investments */}
        <div>
          <h3 className="text-heading mb-8">Past Investments</h3>
          <div className="space-y-0">
            {pastInvestments.map((investment, index) => (
              <div key={index} className="portfolio-item">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-stone-900 mb-1">
                      <a 
                        href={investment.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-accent-600 transition-colors"
                      >
                        {investment.name}
                      </a>
                    </h4>
                    <p className="text-body">
                      {investment.description}
                    </p>
                  </div>
                  <div className="text-right md:min-w-[120px]">
                    <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {investment.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Investments;
