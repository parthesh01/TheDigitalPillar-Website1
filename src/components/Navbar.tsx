import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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
      <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
        <div className="h-4 w-6 border-2 border-black transform rotate-45"></div>
      </div>
      <span className="font-bold text-xl">DigitalAgency</span>
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
    <nav className="w-full h-20 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          {logo}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <div className="flex items-center">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center text-gray-700 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform",
                        openDropdown === link.label ? "rotate-180" : "",
                      )}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 origin-top-right",
                      openDropdown === link.label
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none",
                    )}
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="text-gray-700 hover:text-yellow-500 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-yellow-500 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden bg-white absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-20 opacity-100" : "-top-96 opacity-0",
        )}
      >
        <div className="container mx-auto px-4 py-4">
          {links.map((link) => (
            <div key={link.label} className="py-2">
              {link.subLinks ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-yellow-500 py-2"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openDropdown === link.label ? "rotate-180" : "",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "pl-4 space-y-2 overflow-hidden transition-all duration-200",
                      openDropdown === link.label
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.href}
                        className="block text-gray-600 hover:text-yellow-500 py-1"
                        onClick={toggleMenu}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="block text-gray-700 hover:text-yellow-500 py-2"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-4">
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
