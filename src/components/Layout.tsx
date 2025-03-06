import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import ScrollProgress from "./ScrollProgress";
import "@/styles/scrollbar.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // Navbar background opacity based on scroll
  const navbarBackground = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
              isScrolled
                ? "bg-black/80 backdrop-blur-md shadow-lg"
                : "bg-transparent"
            }`}
            style={{
              backgroundColor: isScrolled
                ? `rgba(0, 0, 0, ${navbarBackground.get() * 0.8})`
                : "transparent",
            }}
          >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="flex-shrink-0"
                >
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text">
                    DigitalPillar
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {["Home", "Services", "Portfolio", "About", "Contact"].map(
                      (item, i) => (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="relative px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                          variants={navItemVariants}
                          custom={i}
                          whileHover={{ scale: 1.05, color: "#eab308" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item}
                          <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      )
                    )}
                  </div>
                </div>

                {/* Theme Toggle */}
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-300" />
                  )}
                </motion.button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <motion.div
              className="md:hidden"
              initial={false}
              animate={{
                height: isMenuOpen ? "auto" : 0,
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md">
                {["Home", "Services", "Portfolio", "About", "Contact"].map(
                  (item, i) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block px-3 py-2 text-base font-medium text-gray-300 transition-colors rounded-md hover:text-white hover:bg-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10, color: "#eab308" }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-md">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-yellow-500">
                DigitalPillar
              </h3>
              <p className="text-gray-400">
                Transforming digital experiences through innovation and
                creativity.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-300">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Digital Marketing",
                  "Branding",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-yellow-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-300">
                Company
              </h4>
              <ul className="space-y-2">
                {["About", "Portfolio", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-yellow-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-300">
                Connect
              </h4>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-400 transition-colors hover:text-yellow-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
            <p>
              &copy; {new Date().getFullYear()} DigitalPillar. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
