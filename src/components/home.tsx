import React from "react";
import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import StatisticsSection from "./StatisticsSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import WhyUsSection from "./WhyUsSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-20">
          <HeroSlider />
        </section>

        {/* Why Us Section */}
        <section id="why-us">
          <WhyUsSection />
        </section>

        {/* Statistics Section */}
        <section id="statistics">
          <StatisticsSection />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
