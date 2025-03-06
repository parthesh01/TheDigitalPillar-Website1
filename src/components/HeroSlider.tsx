import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Spring animation for mouse following effect
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition, x, y]);

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
      ref={containerRef}
      className="relative w-full h-[800px] bg-gray-900 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive particle background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-500/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Mouse following highlight effect */}
      <motion.div
        className="absolute rounded-full pointer-events-none w-96 h-96 bg-yellow-500/10"
        style={{
          x: useTransform(
            x,
            [0, window.innerWidth],
            [-192, window.innerWidth - 192]
          ),
          y: useTransform(
            y,
            [0, window.innerHeight],
            [-192, window.innerHeight - 192]
          ),
        }}
      />

      {/* Rotating animated blocks with enhanced effects */}
      <motion.div
        className="absolute w-64 h-64 rounded-full -right-32 -top-32 bg-yellow-500/20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full -left-32 -bottom-32 bg-yellow-500/20"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      />

      {/* Background images with enhanced transitions */}
      <AnimatePresence>
        {slides.map((slide, index) => (
          <motion.div
            key={`bg-${index}`}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${
                  slide.image ||
                  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                })`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content carousel with enhanced animations */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className={index === currentIndex ? "block" : "hidden"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6 text-center text-white"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-black transition-colors duration-300 bg-yellow-500 rounded-full hover:bg-yellow-400">
                      {slide.subtitle}
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-4xl font-bold leading-tight md:text-5xl lg:text-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {slide.title.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.p
                    className="max-w-3xl mx-auto text-lg text-gray-200 md:text-xl"
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
                      <motion.button
                        className="relative px-8 py-3 overflow-hidden font-medium text-black bg-yellow-500 rounded-md group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">{slide.ctaText}</span>
                        <motion.div
                          className="absolute inset-0 bg-yellow-400"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Enhanced navigation dots */}
      <div className="absolute left-0 right-0 z-20 flex justify-center space-x-2 bottom-10">
        {slides.map((_, index) => (
          <motion.button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-yellow-500" : "bg-white/50"
            }`}
            initial={{ width: 8 }}
            animate={{ width: index === currentIndex ? 40 : 8 }}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced navigation arrows */}
      {showControls && (
        <>
          <motion.button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
              )
            }
            className="absolute z-20 p-3 text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/30"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
            }
            className="absolute z-20 p-3 text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/30"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </motion.button>
        </>
      )}
    </div>
  );
};

export default HeroSlider;
