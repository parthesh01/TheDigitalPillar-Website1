import React from "react";
import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import StatisticsSection from "./StatisticsSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-20">
          <HeroSlider />
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
