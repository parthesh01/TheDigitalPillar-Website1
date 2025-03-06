import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUp,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "Github" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  ];

  const footerLinks = {
    Company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/careers" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Decorative Star */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4], rotate: 360 }}
        transition={{
          opacity: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          },
          rotate: {
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          },
        }}
        className="absolute top-20 right-20 text-yellow-400/70"
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform scale-[2]"
        >
          <path
            d="M42.993 69L34.5 51.2698L26.007 69L16.1104 64.9008L22.6419 46.3582L4.09932 52.8899L0 42.993L17.7302 34.5L0 26.007L4.09932 16.1103L22.6419 22.6418L16.1104 4.09921L26.007 0L34.5 17.7302L42.993 0L52.8899 4.09921L46.3582 22.6418L64.9008 16.1103L69 26.007L51.2698 34.5L69 42.993L64.9008 52.8899L46.3582 46.3582L52.8899 64.9008L42.993 69Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Decorative Star (Left) */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4], rotate: -360 }}
        transition={{
          opacity: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1,
          },
          rotate: {
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          },
        }}
        className="absolute bottom-32 left-20 text-yellow-400/70"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform scale-150"
        >
          <path
            d="M42.993 69L34.5 51.2698L26.007 69L16.1104 64.9008L22.6419 46.3582L4.09932 52.8899L0 42.993L17.7302 34.5L0 26.007L4.09932 16.1103L22.6419 22.6418L16.1104 4.09921L26.007 0L34.5 17.7302L42.993 0L52.8899 4.09921L46.3582 22.6418L64.9008 16.1103L69 26.007L51.2698 34.5L69 42.993L64.9008 52.8899L46.3582 46.3582L52.8899 64.9008L42.993 69Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LET'S CREATE SOMETHING AMAZING
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Transform your digital presence with our innovative solutions
          </p>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6">
              Get Started
            </Button>
          </div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@company.com"
                className="flex items-center text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                info@company.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-lg">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-full shadow-lg transition-all ${
          !showScrollTop && "pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
