import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CryptoAdvantage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const advantages = [
    {
      icon: "⚡",
      title: "Instant Settlements",
      description: "All transactions settle in minutes, not days. Our crypto-native infrastructure eliminates traditional banking delays and reduces transaction costs by up to 90%.",
      benefit: "90% Lower Costs"
    },
    {
      icon: "🌐",
      title: "Global Accessibility",
      description: "Invest and operate globally without currency conversion fees or international transfer delays. Our blockchain infrastructure works 24/7 across all time zones.",
      benefit: "24/7 Operations"
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description: "Blockchain-based transactions provide immutable records and multi-signature security. Every investment and distribution is cryptographically secured and auditable.",
      benefit: "Military-Grade Security"
    },
    {
      icon: "📊",
      title: "Real-Time Reporting",
      description: "Get instant visibility into your investments with real-time blockchain analytics. Track performance, distributions, and portfolio metrics in real-time.",
      benefit: "Instant Analytics"
    },
    {
      icon: "🔄",
      title: "Smart Contracts",
      description: "Automated investment terms and distributions through smart contracts. Reduce legal overhead and ensure consistent, transparent execution of agreements.",
      benefit: "Zero Manual Errors"
    },
    {
      icon: "💎",
      title: "Token Innovation",
      description: "Early access to token-based equity models and DeFi opportunities. Position your startup at the forefront of the new tokenized economy.",
      benefit: "Future-Ready Structure"
    }
  ];

  return (
    <section id="crypto" className="section-padding">
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
            <span className="text-primary-400 font-semibold text-lg">The Crypto Advantage</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Why <span className="text-gradient">Crypto-Native</span> Infrastructure Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Traditional venture capital is slow, expensive, and geographically limited. 
              Our crypto-first approach eliminates friction and unlocks new possibilities for both investors and startups.
            </p>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {advantage.description}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold">
                {advantage.benefit}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-lg border border-primary-500/20 rounded-2xl p-8 crypto-glow"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Crypto Infrastructure Impact
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real metrics from our crypto-native investment platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2.3s</div>
              <div className="text-gray-400">Average Settlement Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">0.02%</div>
              <div className="text-gray-400">Transaction Fees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-400">Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-400">Availability</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing number of startups leveraging crypto-native infrastructure 
            for faster, cheaper, and more transparent operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More About Our Process
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CryptoAdvantage;