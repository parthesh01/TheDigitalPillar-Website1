import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  }>;
}

const ServicesSection = ({
  title = "Our Services",
  subtitle = "We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.",
  services = [
    {
      title: "Web Development",
      description:
        "We create responsive, user-friendly websites that engage visitors and drive conversions. Our development team uses cutting-edge technologies to build scalable solutions.",
      icon: <Globe className="h-10 w-10" />,
      color: "#FFD700",
    },
    {
      title: "Mobile App Development",
      description:
        "Transform your ideas into powerful mobile applications for iOS and Android platforms. We focus on creating intuitive user experiences with robust functionality.",
      icon: <Smartphone className="h-10 w-10" />,
      color: "#FFD700",
    },
    {
      title: "UI/UX Design",
      description:
        "Our design team crafts beautiful, intuitive interfaces that enhance user experience and strengthen your brand identity across all digital touchpoints.",
      icon: <Palette className="h-10 w-10" />,
      color: "#FFD700",
    },
    {
      title: "Custom Software",
      description:
        "We develop tailored software solutions that address your specific business challenges, streamline operations, and drive efficiency throughout your organization.",
      icon: <Code className="h-10 w-10" />,
      color: "#FFD700",
    },
  ],
}: ServicesProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
