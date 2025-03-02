import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  logo?: string;
  companyName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  navigationLinks?: {
    title: string;
    href: string;
  }[];
}

const Footer = ({
  logo = "/vite.svg",
  companyName = "Digital Agency",
  address = "123 Innovation Street, Tech City, TC 10101",
  phone = "+1 (555) 123-4567",
  email = "contact@digitalagency.com",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ],
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">{companyName}</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              We create digital experiences that matter. Transforming ideas into
              impactful digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">{address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">{phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">{email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>
            &copy; {currentYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
