import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeTab, setActiveTab] = useState<"contact" | "hours" | "location">(
    "contact"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tabs = [
    { id: "contact", label: "Contact", icon: MessageSquare },
    { id: "hours", label: "Hours", icon: Clock },
    { id: "location", label: "Location", icon: Globe },
  ];

  return (
    <section
      id="contact"
      className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-500 rounded-full bg-yellow-500/10"
          >
            Get in Touch
          </motion.span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Have a project in mind? Let's discuss how we can help bring your
            ideas to life.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              {activeTab === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl"
                >
                  <h3 className="mb-6 text-xl font-semibold">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-500/10">
                        <Mail className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium">Email</h4>
                        <p className="text-gray-400">
                          contact@digitalpillar.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-500/10">
                        <Phone className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium">Phone</h4>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-500/10">
                        <MapPin className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium">Location</h4>
                        <p className="text-gray-400">
                          123 Digital Street, Tech City, TC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "hours" && (
                <motion.div
                  key="hours"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl"
                >
                  <h3 className="mb-6 text-xl font-semibold">Business Hours</h3>
                  <div className="space-y-4">
                    {[
                      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50"
                      >
                        <span className="text-gray-300">{schedule.day}</span>
                        <span className="text-gray-400">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "location" && (
                <motion.div
                  key="location"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl"
                >
                  <h3 className="mb-6 text-xl font-semibold">Our Location</h3>
                  <div className="mb-4 bg-gray-800 rounded-lg aspect-video">
                    {/* Add map component here */}
                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                      Map Component
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-300">123 Digital Street</p>
                    <p className="text-gray-300">Tech City, TC 12345</p>
                    <p className="text-gray-400">United States</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 transition-colors bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 transition-colors bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 transition-colors bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 transition-colors bg-gray-800 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="relative flex items-center justify-center w-full gap-2 px-6 py-3 overflow-hidden font-medium text-black transition-shadow duration-300 rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-300 hover:shadow-xl group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "success" || status === "error"}
              >
                <span className="relative z-10">
                  {status === "idle" && (
                    <>
                      <Send className="inline-block w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2 className="inline-block w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <XCircle className="inline-block w-5 h-5 mr-2" />
                      Error Sending Message
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
