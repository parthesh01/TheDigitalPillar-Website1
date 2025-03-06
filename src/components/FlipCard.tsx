import React, { useState, useEffect } from "react";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  imageUrl,
  description,
  link,
  index,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const card = document.getElementById(`card-${index}`);
    if (card) {
      observer.observe(card);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <motion.div
      id={`card-${index}`}
      className="flip-card h-[300px] w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a href={link} className="block h-full w-full">
        <div className="flip-card-inner">
          {/* Front of card */}
          <div className="flip-card-front bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              {imageError ? (
                <ImageIcon className="w-12 h-12 text-gray-400" />
              ) : (
                <picture>
                  <source
                    srcSet={`${imageUrl.replace(".png", ".webp")}`}
                    type="image/webp"
                  />
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImageError(true)}
                  />
                </picture>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center widget-title">
              {title}
            </h3>
          </div>

          {/* Back of card */}
          <div className="flip-card-back bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-lg shadow-lg p-6 flex items-center justify-center">
            <p className="text-white text-center text-lg">{description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default FlipCard;
