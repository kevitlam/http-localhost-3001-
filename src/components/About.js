import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-subtle">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          
          {/* About Miebach venture */}
          <div className="text-center mb-20">
            <h2 className="text-display mb-8">About Miebach venture</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-body-large mb-6">
                Founded by Michael Miebach, CEO of Mastercard, Miebach venture is a venture capital firm 
                focused on empowering the next generation of innovators. With deep expertise in financial technology, 
                payments, and crypto, we partner with bold founders building transformative solutions for a global economy.
              </p>
              <p className="text-body-large mb-6">
                Our mission is to accelerate the adoption of breakthrough technologies by providing capital, 
                strategic guidance, and access to a world-class network.
              </p>
              <p className="text-body-large font-medium text-stone-700">
                We believe in a future where finance is open, instant, and accessible to all.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-display mb-6">Our Approach</h3>
            <p className="text-body-large">
              We believe the most transformative companies emerge at the intersection of creativity and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-heading text-xl mb-3">Early Stage Focus</h3>
              <p className="text-body">
                We lead pre-seed rounds, often investing the full round ourselves to give founders maximum control.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-heading text-xl mb-3">Creative Technologists</h3>
              <p className="text-body">
                We seek founders who are artists, inventors, and entrepreneurs building at technology's frontiers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-heading text-xl mb-3">Long-term Partnership</h3>
              <p className="text-body">
                We provide ongoing support beyond capital, helping build sustainable, world-changing companies.
              </p>
            </div>

          </div>

          {/* Crypto-Native Approach */}
          <div className="border-t border-stone-200 pt-16 mt-16">
            
            {/* Bold Future Statement */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-lg">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  The Future of Funding and Investment
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              <div>
                <h3 className="text-heading mb-6">Crypto-Native Infrastructure</h3>
                <p className="text-body-large mb-6">
                  We conduct all investments and transactions using cryptocurrency, 
                  providing our portfolio companies with instant, global, and cost-effective financial operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Instant settlements</span> - Capital deployment in minutes, not days
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Reduced costs</span> - 90% lower transaction fees compared to traditional banking
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Global accessibility</span> - Operate anywhere without currency conversion delays
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Complete transparency</span> - All transactions recorded on immutable blockchain
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-heading mb-6">Comprehensive Growth Tools</h3>
                <p className="text-body-large mb-6">
                  Every portfolio company receives access to our complete suite of growth tools and services 
                  designed to accelerate their path to market leadership.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Legal & compliance</span> - Full regulatory support and smart contract auditing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Technical infrastructure</span> - Blockchain development and security expertise
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Market expansion</span> - Go-to-market strategy and international scaling support
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      <span className="font-medium">Network access</span> - Connections to industry leaders, partners, and customers
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
