import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div
            className="h-1 w-24 mx-auto mb-6"
            style={{ backgroundColor: accentColor }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline hover:text-[#FFD700]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center font-medium transition-colors"
            style={{ color: accentColor }}
          >
            Contact us for more information
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
