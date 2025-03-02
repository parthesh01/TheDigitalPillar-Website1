import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar?: string;
}

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  clientLogos?: ClientLogo[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp",
      role: "CEO",
      quote:
        "Working with this agency transformed our digital presence. Their team delivered beyond our expectations and helped us achieve a 40% increase in online engagement.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Innovate Solutions",
      role: "Marketing Director",
      quote:
        "The creativity and technical expertise of this team is unmatched. They understood our vision perfectly and executed it flawlessly.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Global Retail",
      role: "Digital Strategist",
      quote:
        "From concept to execution, the agency delivered exceptional results. Our website traffic has increased by 65% since the redesign.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
  ],
  clientLogos = [
    {
      id: 1,
      name: "TechCorp",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=techcorp",
      alt: "TechCorp Logo",
    },
    {
      id: 2,
      name: "Innovate Solutions",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=innovate",
      alt: "Innovate Solutions Logo",
    },
    {
      id: 3,
      name: "Global Retail",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=global",
      alt: "Global Retail Logo",
    },
    {
      id: 4,
      name: "Future Finance",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=finance",
      alt: "Future Finance Logo",
    },
    {
      id: 5,
      name: "Creative Media",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=creative",
      alt: "Creative Media Logo",
    },
    {
      id: 6,
      name: "Health Innovations",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=health",
      alt: "Health Innovations Logo",
    },
  ],
  title = "What Our Clients Say",
  subtitle = "Trusted by industry leaders worldwide",
}: TestimonialsSectionProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(testimonialsRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Duplicate logos for seamless infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Client Logos Marquee */}
        <div className="mb-16 overflow-hidden" ref={marqueeRef}>
          <div className="flex items-center justify-start animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="mx-8 flex-shrink-0">
                <img
                  src={logo.logo}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                },
              }}
            >
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-yellow-400 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
              </div>
              <div className="mt-auto flex items-center">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      Add custom animation styles
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
