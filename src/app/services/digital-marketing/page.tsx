'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function DigitalMarketingPage() {
  const sections = [
    {
      title: "Content Marketing",
      description: "We are a digital marketing company curating content strategies that lead to maximum clicks and eventually satisfying conversions. Our brimming creativity focuses on penning engaging content that meets user intent.",
      details: "We dive deep into keyword-driven insights, understand consumer behavior and create content that drives traffic. Our experience in crafting engaging content and channeling through the right platforms has shaped numerous growth stories. The next can be yours.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
      color: "bg-yellow-400"
    },
    {
      title: "Search Engine Optimization",
      description: "Boost your website's visibility and rank higher in search results with our comprehensive SEO strategies. We implement the latest SEO techniques to improve your online presence.",
      details: "Our SEO experts analyze your website's performance, conduct thorough keyword research, and optimize your content to ensure maximum visibility in search engine results. We focus on both on-page and off-page SEO to drive organic traffic.",
      image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1000&auto=format&fit=crop",
      color: "bg-blue-400"
    },
    {
      title: "Social Media Marketing",
      description: "Engage with your target audience across all major social media platforms. We create compelling social media campaigns that build brand awareness and drive engagement.",
      details: "From content creation to community management, we handle every aspect of your social media presence. Our team crafts tailored strategies for each platform to maximize your reach and engagement.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop",
      color: "bg-green-400"
    },
    {
      title: "Email Marketing",
      description: "Build lasting relationships with your customers through targeted email campaigns. We design and implement email marketing strategies that convert subscribers into loyal customers.",
      details: "Our email marketing experts create personalized campaigns that resonate with your audience. We focus on segmentation, automation, and analytics to ensure your messages reach the right people at the right time.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop",
      color: "bg-purple-400"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Drive immediate results with targeted PPC campaigns. Our PPC experts create and manage campaigns that deliver measurable ROI and help you reach your business goals.",
      details: "We develop comprehensive PPC strategies across multiple platforms, including Google Ads and social media advertising. Our team continuously optimizes your campaigns to maximize conversions while minimizing cost.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      color: "bg-red-400"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing Services</h1>
            <p className="text-lg md:text-xl opacity-90">
              Transform your online presence with data-driven digital marketing strategies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {sections.map((section, index) => (
        <section key={section.title} className={`py-16 ${section.color}`}>
          <div className="container mx-auto px-4 md:px-16">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? '' : 'md:grid-flow-dense'
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <div className="text-white text-lg">
                  <p>{section.description}</p>
                  <p className="mt-4">{section.details}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-gray-800 rounded-full font-semibold text-lg 
                  hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'md:order-last' : 'md:order-first'}`}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SEO Optimization",
                description: "Boost your website's visibility and rank higher in search results",
                icon: "🔍"
              },
              {
                title: "Social Media Marketing",
                description: "Engage with your audience across all social platforms",
                icon: "📱"
              },
              {
                title: "Email Marketing",
                description: "Create compelling email campaigns that convert",
                icon: "📧"
              },
              {
                title: "PPC Advertising",
                description: "Drive targeted traffic with effective paid campaigns",
                icon: "🎯"
              },
              {
                title: "Content Strategy",
                description: "Develop content that resonates with your audience",
                icon: "📝"
              },
              {
                title: "Analytics & Reporting",
                description: "Track and measure your marketing success",
                icon: "📊"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create a customized digital marketing strategy for your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary rounded-full font-semibold text-lg 
              hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
} 