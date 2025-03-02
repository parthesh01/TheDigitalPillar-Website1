import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Users, Award, TrendingUp } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

interface StatisticsSectionProps {
  stats?: StatItem[];
  title?: string;
  subtitle?: string;
}

const StatisticsSection = ({
  stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: 250,
      label: "Happy Clients",
      color: "#FFD700",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      value: 520,
      label: "Projects Completed",
      color: "#FFD700",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 15,
      label: "Awards Won",
      color: "#FFD700",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      color: "#FFD700",
    },
  ],
  title = "Our Impact in Numbers",
  subtitle = "We take pride in our achievements and the results we deliver to our clients.",
}: StatisticsSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 w-full"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
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
}

const StatCard = ({ stat, index, isInView }: StatCardProps) => {
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
      className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
    >
      <div
        className="rounded-full p-4 mb-6"
        style={{ backgroundColor: `${stat.color}20` }} // 20% opacity
      >
        {React.cloneElement(stat.icon as React.ReactElement, {
          style: { color: stat.color },
        })}
      </div>

      <div className="flex items-end justify-center mb-2">
        <span className="text-4xl md:text-5xl font-bold">{count}</span>
        {stat.suffix && (
          <span className="text-4xl md:text-5xl font-bold">{stat.suffix}</span>
        )}
      </div>

      <p className="text-gray-600 font-medium">{stat.label}</p>
    </motion.div>
  );
};

export default StatisticsSection;
