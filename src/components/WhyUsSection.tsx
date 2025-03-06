import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Award,
  LineChart,
  Zap,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Years of experience delivering exceptional digital solutions across various sectors.",
    color: "from-yellow-500 to-yellow-600",
    stats: "15+ Years Experience",
    highlight: "Proven Track Record",
  },
  {
    icon: LineChart,
    title: "Data-Driven Results",
    description:
      "Comprehensive reporting and analytics to track your success metrics.",
    color: "from-yellow-500 to-yellow-600",
    stats: "98% Success Rate",
    highlight: "Measurable Outcomes",
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description:
      "Efficient processes and agile methodologies for rapid project delivery.",
    color: "from-yellow-500 to-yellow-600",
    stats: "2x Faster Delivery",
    highlight: "Agile Methodology",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Long-term relationships built on trust, transparency, and mutual success.",
    color: "from-yellow-500 to-yellow-600",
    stats: "250+ Happy Clients",
    highlight: "Client-Centric Approach",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const WhyUsSection = () => {
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
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

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

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Why Choose Us
          </motion.span>
          <motion.h2
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforming Ideas into Digital Excellence
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Vision, Our Expertise, Unmatched Results
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl blur-xl group-hover:opacity-100" />
              <div className="relative p-8 transition-colors duration-300 border-2 border-black shadow-lg bg-white/50 backdrop-blur-sm rounded-xl hover:border-yellow-500/50 hover:shadow-yellow-500/10">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-8 h-8 text-yellow-600" />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="mb-2 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-yellow-600"
                      whileHover={{ x: 5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="mb-4 text-lg text-gray-600">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-base font-medium text-yellow-600">
                      <Sparkles className="w-5 h-5" />
                      <span>{feature.stats}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-base text-gray-500">
                      <Target className="w-5 h-5" />
                      <span>{feature.highlight}</span>
                    </div>
                    <motion.div
                      className="flex items-center mt-6 text-base font-medium text-gray-900 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-shadow duration-300 rounded-full shadow-lg group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:shadow-yellow-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Your Free Strategy
              <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </span>
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

export default WhyUsSection;
