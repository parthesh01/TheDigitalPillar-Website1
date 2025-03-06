import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Star, Quote } from "lucide-react";

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
    {
      id: 4,
      name: "David Thompson",
      company: "Future Finance",
      role: "CTO",
      quote:
        "The team's expertise in modern web technologies and their attention to detail in security implementation gave us complete confidence in our digital transformation journey.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
    {
      id: 5,
      name: "Lisa Chen",
      company: "Creative Media",
      role: "Product Manager",
      quote:
        "Their innovative approach to UI/UX design and their ability to translate complex requirements into intuitive interfaces has significantly improved our user engagement metrics.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
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
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Duplicate logos for seamless infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="relative px-4 py-20 overflow-hidden md:px-8 lg:px-16 bg-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Rotating decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-yellow-500/10"
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
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-500/10"
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
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
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
              <motion.div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-8"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={logo.logo}
                  alt={logo.alt}
                  className="object-contain w-auto h-12 md:h-16"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div ref={testimonialsRef} className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(index) => setActiveTestimonial(index)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="relative flex flex-col h-full p-6 mx-2 overflow-hidden bg-white rounded-lg shadow-md group"
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
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 transition-transform duration-500 transform translate-x-16 -translate-y-16 rounded-full bg-yellow-500/5 group-hover:scale-150" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 transition-transform duration-500 transform -translate-x-16 translate-y-16 rounded-full bg-yellow-500/5 group-hover:scale-150" />

                    <div className="relative mb-4">
                      <Quote className="w-10 h-10 mb-2 text-yellow-400 transform -rotate-180" />
                      <p className="relative mb-4 italic text-gray-700">
                        {testimonial.quote}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="relative flex items-center mt-auto">
                      {testimonial.avatar && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 mr-4 border-2 border-yellow-400 rounded-full"
                          />
                        </motion.div>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Testimonial progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  activeTestimonial === index ? "bg-yellow-400" : "bg-gray-300"
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style>{`
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
