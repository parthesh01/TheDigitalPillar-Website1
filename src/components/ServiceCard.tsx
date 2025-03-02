import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight, Code, Palette, Smartphone, Globe } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
}

const ServiceCard = ({
  title = "Web Development",
  description = "We create responsive, user-friendly websites that engage visitors and drive conversions. Our development team uses cutting-edge technologies to build scalable solutions.",
  icon = <Globe className="h-10 w-10" />,
  color = "#FFD700",
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define service icons based on title for default values
  const getDefaultIcon = () => {
    switch (title.toLowerCase()) {
      case "web development":
        return <Globe className="h-10 w-10" />;
      case "mobile app development":
        return <Smartphone className="h-10 w-10" />;
      case "ui/ux design":
        return <Palette className="h-10 w-10" />;
      case "custom software":
        return <Code className="h-10 w-10" />;
      default:
        return <Globe className="h-10 w-10" />;
    }
  };

  const displayIcon = icon || getDefaultIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <Card
        className={`relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer bg-white ${isExpanded ? "h-[400px]" : "h-[300px]"}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Yellow accent line at top */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ backgroundColor: color }}
        />

        <CardHeader className="pt-8">
          <div
            className="rounded-full p-3 mb-4 inline-block"
            style={{ backgroundColor: `${color}20` }} // 20% opacity version of the color
          >
            {displayIcon}
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </motion.div>
        </CardContent>

        <CardFooter className="absolute bottom-0 left-0 w-full pb-6">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: isExpanded ? 0 : -10,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 font-medium"
            style={{ color }}
          >
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
