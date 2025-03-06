import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Code2,
  Palette,
  BarChart3,
  Globe,
  Cpu,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  CheckCircle2,
  Star,
  Circle,
  Hexagon,
  Triangle,
} from "lucide-react";
import FlipCard from "./FlipCard";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies.",
    icon: Code2,
    logo: (
      <svg
        className="w-8 h-8 text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly"],
    stats: "100+ Projects",
    highlight: "Latest Technologies",
    shape: Star,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    icon: Palette,
    logo: (
      <svg
        className="w-8 h-8 text-purple-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    features: ["User Research", "Wireframing", "Prototyping"],
    stats: "50+ Designs",
    highlight: "User-Centric",
    shape: Circle,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to grow your online presence.",
    icon: BarChart3,
    logo: (
      <svg
        className="w-8 h-8 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
    features: ["SEO", "Social Media", "Content Strategy"],
    stats: "200% Growth",
    highlight: "Data-Driven",
    shape: Hexagon,
  },
  {
    title: "Global Solutions",
    description: "Worldwide reach with localized content and strategies.",
    icon: Globe,
    logo: (
      <svg
        className="w-8 h-8 text-orange-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: "from-orange-500 to-red-500",
    features: ["Localization", "Multi-language", "Global SEO"],
    stats: "20+ Countries",
    highlight: "Global Reach",
    shape: Triangle,
  },
  {
    title: "AI Integration",
    description:
      "Smart solutions powered by artificial intelligence and machine learning.",
    icon: Cpu,
    logo: (
      <svg
        className="w-8 h-8 text-indigo-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 2v2" />
        <path d="M15 2v2" />
        <path d="M9 20v2" />
        <path d="M15 20v2" />
        <path d="M2 9h2" />
        <path d="M2 15h2" />
        <path d="M20 9h2" />
        <path d="M20 15h2" />
      </svg>
    ),
    color: "from-indigo-500 to-purple-500",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Predictive Analytics",
    ],
    stats: "AI-Powered",
    highlight: "Future-Ready",
    shape: Star,
  },
  {
    title: "Cybersecurity",
    description: "Robust security measures to protect your digital assets.",
    icon: Shield,
    logo: (
      <svg
        className="w-8 h-8 text-yellow-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "from-yellow-500 to-amber-500",
    features: ["Security Audits", "Threat Detection", "Data Protection"],
    stats: "99.9% Security",
    highlight: "Enterprise-Grade",
    shape: Circle,
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast loading times and smooth user experiences.",
    icon: Zap,
    logo: (
      <svg
        className="w-8 h-8 text-pink-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
      </svg>
    ),
    color: "from-pink-500 to-rose-500",
    features: ["Speed Optimization", "Caching", "CDN Integration"],
    stats: "2x Faster",
    highlight: "Lightning Fast",
    shape: Hexagon,
  },
  {
    title: "Team Collaboration",
    description: "Seamless teamwork and communication tools for your business.",
    icon: Users,
    logo: (
      <svg
        className="w-8 h-8 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "from-teal-500 to-cyan-500",
    features: [
      "Project Management",
      "Team Communication",
      "Workflow Automation",
    ],
    stats: "24/7 Support",
    highlight: "Team-Focused",
    shape: Triangle,
  },
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative px-4 py-20 overflow-hidden bg-white sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Rotating shapes */}
        {services.map((service, index) => {
          const Shape = service.shape;
          return (
            <motion.div
              key={`shape-${index}`}
              className="absolute"
              style={{
                top: `${(index % 4) * 25}%`,
                left: `${(index % 2) * 50}%`,
                opacity: 0.1,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 20 + index * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Shape className="w-32 h-32 text-yellow-500" />
            </motion.div>
          );
        })}

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-yellow-500/10"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-500/10"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-600 rounded-full bg-yellow-500/10"
          >
            Our Services
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We offer a comprehensive range of digital services to help your
            business thrive in the modern digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative h-[300px] [perspective:1000px]"
            >
              <motion.div
                className="relative w-full h-full [transform-style:preserve-3d]"
                animate={{
                  rotateY: hoveredService === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="relative bg-white p-6 rounded-xl shadow-lg h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div
                      className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                      style={{
                        background: `linear-gradient(to right, ${
                          service.color.split(" ")[1]
                        }, ${service.color.split(" ")[3]})`,
                      }}
                    />
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="flex items-center justify-center w-12 h-12 transition-transform duration-300 transform rounded-lg bg-gradient-to-br group-hover:scale-110"
                        style={{
                          background: `linear-gradient(to bottom right, ${
                            service.color.split(" ")[1]
                          }, ${service.color.split(" ")[3]})`,
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div
                        className="w-12 h-12 overflow-hidden rounded-lg flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110"
                        style={{
                          background: `linear-gradient(to bottom right, ${
                            service.color.split(" ")[1]
                          }, ${service.color.split(" ")[3]})`,
                        }}
                      >
                        <div className="w-8 h-8 text-white">{service.logo}</div>
                      </div>
                    </div>
                    <motion.h3
                      className="mb-2 text-xl font-semibold text-gray-900"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="mb-4 text-gray-600">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-yellow-600">
                      <Sparkles className="w-4 h-4" />
                      <span>{service.stats}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <Target className="w-4 h-4" />
                      <span>{service.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="relative h-full p-6 transition-all duration-300 bg-yellow-50 shadow-lg rounded-xl hover:shadow-2xl">
                    <div
                      className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                      style={{
                        background: `linear-gradient(to right, ${
                          service.color.split(" ")[1]
                        }, ${service.color.split(" ")[3]})`,
                      }}
                    />
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
                        >
                          <CheckCircle2
                            className="w-4 h-4"
                            style={{
                              color: service.color.split(" ")[1],
                            }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 overflow-hidden font-medium text-white transition-shadow duration-300 rounded-lg shadow-lg group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:shadow-xl"
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
