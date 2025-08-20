import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Michael Miebach",
      role: "Founder & Managing Partner",
      background: "Former CEO of Mastercard",
      expertise: "Fintech, Payments, Global Strategy"
    },
    {
      name: "Sarah Chen",
      role: "Partner & CTO",
      background: "Former VP Engineering at Stripe",
      expertise: "Crypto Infrastructure, Blockchain"
    },
    {
      name: "David Rodriguez",
      role: "Principal",
      background: "Former Goldman Sachs VP",
      expertise: "Financial Markets, Due Diligence"
    },
    {
      name: "Emily Zhang",
      role: "Investment Director",
      background: "Former Sequoia Capital Associate",
      expertise: "Early-stage Investing, Portfolio"
    },
    {
      name: "James Thompson",
      role: "Head of Legal",
      background: "Former Coinbase General Counsel",
      expertise: "Crypto Law, Regulatory Compliance"
    },
    {
      name: "Lisa Patel",
      role: "Head of Operations",
      background: "Former Andreessen Horowitz COO",
      expertise: "Fund Operations, Portfolio Support"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Our Team</h2>
            <p className="text-body-large">
              World-class expertise in venture capital, technology, and crypto innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center group-hover:from-accent-100 group-hover:to-accent-200 transition-all duration-300">
                  <span className="text-2xl font-bold text-stone-700 group-hover:text-accent-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-stone-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-body-small text-stone-600 mb-2">
                  {member.background}
                </p>
                <p className="text-body-small text-stone-500">
                  {member.expertise}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
