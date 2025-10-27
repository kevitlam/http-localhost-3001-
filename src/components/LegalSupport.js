import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LegalSupport = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const legalServices = [
    {
      icon: "⚖️",
      title: "Entity Formation & Structure",
      description: "Complete legal setup optimized for crypto operations, including jurisdiction selection, corporate structure, and regulatory compliance frameworks.",
      timeline: "Day 1 - Week 2",
      included: ["Delaware C-Corp formation", "Crypto-compliant bylaws", "Equity structure optimization", "Regulatory mapping"]
    },
    {
      icon: "📋",
      title: "Regulatory Compliance",
      description: "Navigate the complex regulatory landscape with expert guidance on securities law, crypto regulations, and international compliance requirements.",
      timeline: "Ongoing",
      included: ["Securities law compliance", "Token classification", "AML/KYC frameworks", "International regulations"]
    },
    {
      icon: "📄",
      title: "Smart Contract Auditing",
      description: "Comprehensive security audits and legal reviews of smart contracts to ensure both technical security and legal compliance.",
      timeline: "Pre-deployment",
      included: ["Security audits", "Legal compliance review", "Risk assessment", "Deployment guidance"]
    },
    {
      icon: "🤝",
      title: "Partnership & Investment Docs",
      description: "Draft and negotiate all partnership agreements, investment terms, and strategic alliance contracts with crypto-native considerations.",
      timeline: "As needed",
      included: ["Investment agreements", "Partnership contracts", "Token agreements", "IP licensing"]
    },
    {
      icon: "🛡️",
      title: "IP & Data Protection",
      description: "Protect your intellectual property and ensure compliance with data protection laws in the crypto and blockchain space.",
      timeline: "Ongoing",
      included: ["Patent applications", "Trademark protection", "GDPR compliance", "Data sovereignty"]
    },
    {
      icon: "🌐",
      title: "International Expansion",
      description: "Legal support for global expansion including international subsidiary formation, cross-border transactions, and regulatory compliance.",
      timeline: "Growth phase",
      included: ["International entities", "Cross-border compliance", "Tax optimization", "Global operations"]
    }
  ];

  const legalTeam = [
    {
      name: "Sarah Chen",
      role: "Chief Legal Officer",
      specialty: "Crypto & Securities Law",
      experience: "Former SEC, 15+ years",
      credentials: "Harvard Law, CFA"
    },
    {
      name: "Marcus Rodriguez",
      role: "Partner, Technology Law",
      specialty: "Smart Contracts & IP",
      experience: "BigLaw background, 12+ years",
      credentials: "Stanford Law, CS Degree"
    },
    {
      name: "Priya Patel",
      role: "International Counsel",
      specialty: "Global Compliance",
      experience: "International finance, 10+ years",
      credentials: "Oxford Law, Multiple bars"
    }
  ];

  return (
    <section id="legal" className="section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container-max"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary-400 font-semibold text-lg">Legal Excellence</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              <span className="text-gradient">Comprehensive Legal Support</span> From Day One
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every portfolio company receives dedicated legal support to navigate the complex 
              regulatory landscape of crypto and blockchain technology. Our expert legal team 
              ensures you're protected, compliant, and positioned for growth.
            </p>
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-lg border border-gold-500/20 rounded-2xl p-8 mb-16 crypto-glow"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">$0</div>
              <div className="text-gray-300">Additional Legal Fees</div>
              <div className="text-sm text-gray-400 mt-1">Included in investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-gray-300">Legal Access</div>
              <div className="text-sm text-gray-400 mt-1">Emergency support available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-gray-300">Compliance Rate</div>
              <div className="text-sm text-gray-400 mt-1">Zero regulatory issues</div>
            </div>
          </div>
        </motion.div>

        {/* Legal Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {legalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-3">
                  {service.timeline}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-primary-400">Included Services:</h4>
                {service.included.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Legal Dream Team</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              World-class legal experts with deep experience in crypto, blockchain, and traditional finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 crypto-glow">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-primary-400 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-300 mb-2">{member.specialty}</p>
                <p className="text-xs text-gray-400 mb-1">{member.experience}</p>
                <p className="text-xs text-gold-400">{member.credentials}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-lg border border-primary-500/20 rounded-2xl p-8 crypto-glow"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Legal Onboarding Process
            </h3>
            <p className="text-gray-300">From investment to launch in record time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "Week 1", title: "Legal Assessment", desc: "Complete legal audit and risk assessment" },
              { step: "Week 2", title: "Entity Setup", desc: "Corporate formation and structure optimization" },
              { step: "Week 3-4", title: "Compliance Framework", desc: "Regulatory compliance and documentation" },
              { step: "Ongoing", title: "Continuous Support", desc: "24/7 legal guidance and support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {index + 1}
                </div>
                <h4 className="text-primary-400 font-semibold mb-2">{phase.step}</h4>
                <h5 className="text-white font-semibold mb-2">{phase.title}</h5>
                <p className="text-sm text-gray-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Legally & Confidently?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let legal complexity slow down your innovation. Get comprehensive 
            legal support from day one with Miebach venture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Schedule Legal Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Download Legal Guide
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LegalSupport;
