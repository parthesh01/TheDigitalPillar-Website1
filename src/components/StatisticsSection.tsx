import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Users,
  Award,
  TrendingUp,
  Star,
  Target,
  Zap,
  Globe,
} from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
  description?: string;
}

interface StatisticsSectionProps {
  stats?: StatItem[];
  title?: string;
  subtitle?: string;
}

const StatisticsSection = ({
  stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 250,
      label: "Happy Clients",
      color: "#FFD700",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: 520,
      label: "Projects Completed",
      color: "#FFD700",
      description: "Delivering excellence consistently",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 15,
      label: "Awards Won",
      color: "#FFD700",
      description: "Recognized for innovation",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      color: "#FFD700",
      description: "Exceeding expectations",
    },
  ],
  title = "Our Impact in Numbers",
  subtitle = "We take pride in our achievements and the results we deliver to our clients.",
}: StatisticsSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-20 overflow-hidden bg-gray-900 md:px-8 lg:px-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Rotating blocks */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-yellow-500/20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
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
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-500/20"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
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
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-500 rounded-full bg-yellow-500/10"
          >
            Our Impact
          </motion.span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
              isHovered={hoveredStat === index}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: StatItem;
  index: number;
  isInView: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const StatCard = ({
  stat,
  index,
  isInView,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    // Don't start immediately
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, index * 200); // Stagger the animations

    return () => clearTimeout(timer);
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="relative group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl blur-xl"
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.5 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative p-8 transition-colors duration-300 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:border-yellow-500/50">
        <motion.div
          className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl bg-yellow-500/10"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {React.cloneElement(stat.icon as React.ReactElement, {
            style: { color: stat.color },
          })}
        </motion.div>

        <div className="flex items-end justify-center mb-2">
          <span className="text-4xl font-bold text-white md:text-5xl">
            {count}
          </span>
          {stat.suffix && (
            <span className="text-4xl font-bold text-white md:text-5xl">
              {stat.suffix}
            </span>
          )}
        </div>

        <p className="mb-2 font-medium text-center text-gray-300">
          {stat.label}
        </p>

        <AnimatePresence>
          {isHovered && stat.description && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-center text-gray-400"
            >
              {stat.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StatisticsSection;
