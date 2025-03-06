import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example",
    },
    details: {
      overview:
        "A full-featured e-commerce platform with modern design and seamless user experience.",
      challenges: [
        "Real-time inventory management",
        "Secure payment processing",
        "Responsive design",
      ],
      solutions: [
        "Implemented WebSocket for real-time updates",
        "Integrated Stripe for secure payments",
        "Used Tailwind CSS for responsive design",
      ],
    },
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses and sentiment analysis.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    category: "AI/ML",
    technologies: ["React", "Python", "TensorFlow", "WebSocket"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example",
    },
    details: {
      overview:
        "An intelligent chat application that provides context-aware responses and analyzes user sentiment.",
      challenges: [
        "Natural language processing",
        "Real-time communication",
        "Sentiment analysis accuracy",
      ],
      solutions: [
        "Implemented TensorFlow for NLP",
        "Used WebSocket for real-time chat",
        "Developed custom sentiment analysis model",
      ],
    },
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking application with biometric authentication.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da59675a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    category: "Mobile Development",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example",
    },
    details: {
      overview:
        "A secure and user-friendly mobile banking application with advanced security features.",
      challenges: [
        "Security implementation",
        "Cross-platform compatibility",
        "Performance optimization",
      ],
      solutions: [
        "Implemented biometric authentication",
        "Used React Native for cross-platform",
        "Optimized app performance",
      ],
    },
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for real-time data visualization and analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Data Science",
    technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example",
    },
    details: {
      overview:
        "A comprehensive data visualization platform for real-time analytics and reporting.",
      challenges: [
        "Real-time data updates",
        "Complex visualizations",
        "Data processing",
      ],
      solutions: [
        "Implemented WebSocket for real-time updates",
        "Used D3.js for complex charts",
        "Optimized data processing",
      ],
    },
  },
];

const categories = [
  "All",
  "Web Development",
  "AI/ML",
  "Mobile Development",
  "Data Science",
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <section
      id="portfolio"
      className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-500 rounded-full bg-yellow-500/10"
          >
            Our Work
          </motion.span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Explore our latest projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden border border-gray-800 group rounded-xl bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-2 font-medium text-black transition-shadow duration-300 bg-yellow-500 rounded-lg shadow-lg hover:shadow-xl"
                  >
                    View Details
                  </button>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-sm text-gray-300 bg-gray-800 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-500 transition-colors hover:text-yellow-400"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4" />
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden bg-gray-900 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute z-10 p-2 text-gray-400 transition-colors bg-gray-800 rounded-full top-4 right-4 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative overflow-hidden h-96">
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-cover w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute flex items-center justify-between bottom-4 left-4 right-4">
                  <motion.button
                    onClick={handlePrevImage}
                    className="p-2 text-white transition-colors rounded-full bg-black/50 hover:bg-black/70"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    onClick={handleNextImage}
                    className="p-2 text-white transition-colors rounded-full bg-black/50 hover:bg-black/70"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">
                  {selectedProject.title}
                </h3>
                <p className="mb-6 text-gray-400">
                  {selectedProject.details.overview}
                </p>

                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-lg font-semibold">Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.challenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-lg font-semibold">Solutions</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.solutions.map((solution) => (
                        <li
                          key={solution}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-gray-300 bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-500 transition-colors hover:text-yellow-400"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.a>
                  <motion.a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
