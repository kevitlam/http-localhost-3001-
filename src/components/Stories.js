import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stories = [
    {
      category: "Success Story",
      title: "CryptoFlow Raises $50M Series A Led by Paradigm",
      excerpt: "Our portfolio company CryptoFlow has completed their Series A funding round, validating our thesis on cross-chain infrastructure.",
      date: "December 2024",
      readTime: "5 min read",
      tag: "Portfolio Update",
      image: "🌊"
    },
    {
      category: "Market Insight",
      title: "The Future of Institutional DeFi: Lessons from Mastercard",
      excerpt: "Michael Miebach shares insights on how traditional financial institutions can embrace DeFi protocols while maintaining regulatory compliance.",
      date: "November 2024",
      readTime: "8 min read",
      tag: "Thought Leadership",
      image: "🏦"
    },
    {
      category: "Legal Update",
      title: "Navigating Token Classification in 2024",
      excerpt: "Our legal team breaks down the latest regulatory developments and what they mean for crypto startups.",
      date: "November 2024",
      readTime: "6 min read",
      tag: "Legal Insights",
      image: "⚖️"
    },
    {
      category: "Technology Deep Dive",
      title: "Smart Contract Security: Lessons from 1000+ Audits",
      excerpt: "Key security patterns and common vulnerabilities we've identified across our portfolio companies' smart contracts.",
      date: "October 2024",
      readTime: "12 min read",
      tag: "Technical",
      image: "🔒"
    },
    {
      category: "Founder Spotlight",
      title: "Building AIx Labs: From PhD Research to $45M Valuation",
      excerpt: "The incredible journey of AIx Labs founders and how they're revolutionizing decentralized AI training.",
      date: "October 2024",
      readTime: "7 min read",
      tag: "Founder Story",
      image: "🤖"
    },
    {
      category: "Market Analysis",
      title: "Why We're Bullish on Climate Tech x Crypto",
      excerpt: "The convergence of environmental sustainability and blockchain technology represents a massive opportunity.",
      date: "September 2024",
      readTime: "10 min read",
      tag: "Investment Thesis",
      image: "🌱"
    }
  ];

  const categories = [
    { name: "All Stories", count: stories.length },
    { name: "Portfolio Updates", count: 3 },
    { name: "Market Insights", count: 5 },
    { name: "Legal Updates", count: 2 },
    { name: "Founder Stories", count: 4 }
  ];

  return (
    <section id="stories" className="section-padding bg-dark-800/30">
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
            <span className="text-primary-400 font-semibold text-lg">Stories & Insights</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              <span className="text-gradient">Latest</span> from Miebach Ventures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deep insights from the frontlines of crypto venture capital, featuring 
              portfolio updates, market analysis, and expert perspectives on the future of finance.
            </p>
          </motion.div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                index === 0
                  ? 'bg-primary-500 border-primary-500 text-white'
                  : 'border-dark-600 text-gray-400 hover:border-primary-500 hover:text-primary-400'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Featured Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-lg border border-primary-500/20 rounded-2xl p-8 crypto-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4">
                  Featured Story
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {stories[0].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {stories[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-sm text-gray-400">{stories[0].date}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{stories[0].readTime}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Read Full Story
                </motion.button>
              </div>
              <div className="lg:pl-8">
                <div className="aspect-w-16 aspect-h-10 bg-gradient-to-br from-primary-500/20 to-gold-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-8xl">{stories[0].image}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(1).map((story, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-10 bg-gradient-to-br from-primary-500/10 to-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-4xl">{story.image}</div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center px-2 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-semibold">
                  {story.tag}
                </span>
                <span className="text-xs text-gray-400">{story.date}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                {story.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {story.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{story.readTime}</span>
                <motion.span 
                  className="text-primary-400 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read more →
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-lg border border-gold-500/20 rounded-2xl p-8 text-center crypto-glow"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated with <span className="text-gradient">Miebach Insights</span>
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive insights, portfolio updates, and market analysis delivered 
            directly to your inbox. Join 10,000+ crypto professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold px-6 py-3 whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            Unsubscribe at any time. Read our privacy policy.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a Story to Share?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from founders, investors, and industry experts 
            who are shaping the future of crypto and blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Submit Guest Post
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Media Inquiries
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stories;
