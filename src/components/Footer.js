import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="section bg-stone-900 text-white">
      <div className="container">
        
        {/* Pitch Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Send us your pitch and join the next generation of transformative companies.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-lg max-w-md mx-auto">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-stone-600 text-sm font-medium">Send your pitch to</div>
              <a href="mailto:hello@michealmiebach.com" className="text-xl sm:text-2xl font-bold text-stone-900 hover:text-accent-600 transition-colors break-all">
                hello@michealmiebach.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t border-stone-700 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-4">Miebach Ventures</h3>
              <p className="text-stone-400 leading-relaxed">
                A $500M venture fund empowering the next generation of innovators 
                at the intersection of technology and design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-stone-400 hover:text-white transition-colors">About</a>
                <a href="#investments" className="block text-stone-400 hover:text-white transition-colors">Portfolio</a>
                <a href="#team" className="block text-stone-400 hover:text-white transition-colors">Team</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-stone-400">
                <p>General Inquiries:<br/>
                <a href="mailto:hello@michealmiebach.com" className="hover:text-white transition-colors">hello@michealmiebach.com</a></p>
                <p>New York, San Francisco, London</p>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-stone-700 pt-8 text-center">
            <p className="text-stone-500">
              © 2025 Miebach Ventures. All rights reserved. 
              <span className="mx-2">•</span>
              The future of funding and investment.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
