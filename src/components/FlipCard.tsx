import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FlipCardProps {
  title: string;
  description: string;
  icon: any;
  logo: React.ReactNode;
  color: string;
  features: string[];
  stats: string;
  highlight: string;
  shape: any;
  link?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  description,
  icon: Icon,
  logo,
  color,
  features,
  stats,
  highlight,
  shape: Shape,
  link
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const frontContent = (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <Icon className="w-8 h-8" />
            {logo}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mt-4">
            <div className="text-sm font-medium text-gray-500">{stats}</div>
            <div className="text-sm font-medium text-primary">{highlight}</div>
          </div>
        </div>
      </div>
    </>
  );

  const backContent = (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Shape className="w-4 h-4 mr-2 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Link 
            to={link || "#"} 
            className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-yellow-400 hover:bg-yellow-500"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="block h-full">
      <motion.div
        className="relative w-full h-full min-h-[320px] rounded-xl bg-white shadow-lg p-6 cursor-pointer perspective-1000"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          className="w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 backface-hidden">
            {frontContent}
          </div>
          <div
            className="absolute inset-0 backface-hidden p-6"
            style={{ transform: "rotateY(180deg)" }}
          >
            {backContent}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
