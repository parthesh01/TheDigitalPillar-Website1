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
      <Link to="/" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src="\logo.png"
          className="w-auto h-12"
        />
      </Link>
      <Link to="/" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src="\name.png"
          className="w-auto h-20"
        />
      </Link>
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
    { label: "Blogs", href: "/blogs" },
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
    <nav className="fixed top-0 left-0 z-50 w-full h-20 bg-white shadow-sm">
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          {logo}
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          {links.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <div className="flex items-center">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center text-gray-700 transition-colors hover:text-yellow-500"
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
                  className="text-gray-700 transition-colors hover:text-yellow-500"
                  onClick={() => {
                    if (link.href === "/") window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <Button className="text-black bg-yellow-400 hover:bg-yellow-500">
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
        <div className="container px-4 py-4 mx-auto">
          {links.map((link) => (
            <div key={link.label} className="py-2">
              {link.subLinks ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-yellow-500"
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
                        className="block py-1 text-gray-600 hover:text-yellow-500"
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
                  className="block py-2 text-gray-700 hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-4">
            <Button className="w-full text-black bg-yellow-400 hover:bg-yellow-500">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
