import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavbarProps {
  logo?: React.ReactNode;
  links?: Array<{
    label: string;
    href: string;
    subLinks?: Array<{ label: string; href: string }>;
  }>;
}

const Navbar = ({
  logo = (
    <div className="flex items-center gap-2">
      <img src="\logo.png" className="w-auto h-12" />
      <img src="\name.png" className="w-auto h-20" />
    </div>
  ),
  links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      subLinks: [
        { label: "Web Development", href: "/services/web" },
        { label: "Mobile Apps", href: "/services/mobile" },
        { label: "UI/UX Design", href: "/services/design" },
        { label: "Custom Software", href: "/services/software" },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Main navbar */}
      <nav className="fixed top-0 left-0 z-40 w-full h-20 shadow-sm bg-white/95 backdrop-blur-md">
        <div className="container flex items-center justify-between h-full px-4 mx-auto">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex-shrink-0">
              {logo}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {links.map((link) => (
              <div key={link.label} className="relative group">
                {link.subLinks ? (
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-yellow-500 hover:bg-gray-50"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          openDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: openDropdown === link.label ? 1 : 0,
                        y: openDropdown === link.label ? 0 : 10,
                      }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md shadow-lg rounded-lg overflow-hidden border border-gray-100",
                        openDropdown === link.label
                          ? "pointer-events-auto"
                          : "pointer-events-none"
                      )}
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          to={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-yellow-50 hover:text-yellow-500"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-yellow-500 hover:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="px-6 py-2 text-sm font-medium text-black bg-yellow-400 shadow-sm hover:bg-yellow-500">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 transition-colors duration-200 rounded-md focus:outline-none hover:text-yellow-500 hover:bg-gray-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.3 }}
          className={cn(
            "md:hidden bg-white/95 backdrop-blur-md absolute w-full left-0 shadow-lg border-b border-gray-100",
            isMenuOpen ? "top-20" : "-top-96"
          )}
        >
          <div className="container px-4 py-4 mx-auto">
            {links.map((link) => (
              <div key={link.label} className="py-2">
                {link.subLinks ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex items-center justify-between w-full py-2 text-gray-700 transition-colors duration-200 hover:text-yellow-500"
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: openDropdown === link.label ? "auto" : 0,
                        opacity: openDropdown === link.label ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.label}
                            to={subLink.href}
                            className="block py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-yellow-500"
                            onClick={toggleMenu}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="block py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-yellow-500"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-4">
              <Button className="w-full text-sm font-medium text-black bg-yellow-400 shadow-sm hover:bg-yellow-500">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
