import React from "react";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import WhyUsSection from "@/components/WhyUsSection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <WhyUsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>
  );
}
