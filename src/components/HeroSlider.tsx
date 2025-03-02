import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface SlideContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  image?: string;
}

interface HeroSliderProps {
  slides?: SlideContent[];
  autoPlayInterval?: number;
  showControls?: boolean;
}

const HeroSlider = ({
  slides = [
    {
      title: "Innovative Solutions",
      subtitle: "Core Values",
      description:
        "We believe in pushing boundaries and challenging the status quo to deliver exceptional digital experiences.",
      ctaText: "Discover Our Approach",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Client-Focused Strategy",
      subtitle: "Our Mission",
      description:
        "We're dedicated to understanding your business goals and delivering solutions that drive real results.",
      ctaText: "Learn About Our Process",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Creative Excellence",
      subtitle: "Unique Selling Points",
      description:
        "Our award-winning team combines technical expertise with creative vision to build memorable digital experiences.",
      ctaText: "View Our Portfolio",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Ready to Transform Your Digital Presence?",
      subtitle: "Call to Action",
      description:
        "Let's collaborate to create a digital strategy that elevates your brand and drives business growth.",
      ctaText: "Contact Us Today",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ],
  autoPlayInterval = 5000,
  showControls = true,
}: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  return (
    <div
      className="relative w-full h-[800px] bg-gray-900 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background images with overlay */}
      <AnimatePresence>
        {slides.map((slide, index) => (
          <motion.div
            key={`bg-${index}`}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image || "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"})`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content carousel */}
      <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className={index === currentIndex ? "block" : "hidden"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center text-white space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="inline-block px-4 py-1 bg-yellow-500 text-black font-medium rounded-full text-sm mb-4">
                      {slide.subtitle}
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {slide.description}
                  </motion.p>

                  {slide.ctaText && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="mt-8"
                    >
                      <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-md transition-colors duration-300">
                        {slide.ctaText}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Custom navigation dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-yellow-500 w-10" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom navigation arrows */}
      {showControls && (
        <>
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default HeroSlider;
