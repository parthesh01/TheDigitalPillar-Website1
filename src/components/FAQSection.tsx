import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
  accentColor?: string;
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services and processes.",
  faqs = [
    {
      question: "What services does your agency offer?",
      answer:
        "Our digital agency provides a comprehensive range of services including web development, mobile app development, UI/UX design, branding, digital marketing, and custom software solutions tailored to your business needs.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Our design process begins with discovery and research, followed by wireframing, prototyping, visual design, and user testing. We collaborate closely with clients throughout each phase to ensure the final product meets both user needs and business objectives.",
    },
    {
      question: "Do you offer maintenance and support after launch?",
      answer:
        "Yes, we provide ongoing maintenance and support packages to ensure your digital products remain secure, up-to-date, and performing optimally. Our support team is available to address any issues and implement updates as needed.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. We provide transparent estimates and regular updates on budget throughout the project lifecycle.",
    },
  ],
  accentColor = "#FFD700",
}: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative px-4 py-20 overflow-hidden bg-white md:px-8 lg:px-16">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-500/10"
          >
            <HelpCircle className="w-8 h-8 text-yellow-500" />
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: accentColor }}
          />
          <p className="max-w-2xl mx-auto text-gray-600">{description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={(value) =>
              setActiveIndex(value ? parseInt(value) : null)
            }
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={index.toString()}
                  className="relative overflow-hidden border-b border-gray-200 group"
                >
                  <AccordionTrigger className="text-lg font-medium text-left transition-colors duration-300 hover:no-underline hover:text-yellow-500">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{
                          rotate: activeIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/10"
                      >
                        <ChevronDown className="w-4 h-4 text-yellow-500" />
                      </motion.div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-9"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-gray-600">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 overflow-hidden font-medium text-black transition-shadow duration-300 rounded-lg shadow-lg group bg-gradient-to-r from-yellow-500 to-yellow-300 hover:shadow-xl"
          >
            <span className="relative z-10">
              Contact us for more information
            </span>
            <motion.div
              className="absolute inset-0 transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
