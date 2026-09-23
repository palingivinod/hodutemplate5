import React from 'react';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CraftSection from '@/components/home/CraftSection';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import WhyHoduSection from '@/components/home/WhyHoduSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesSection />
      <ProcessSection />
      <CraftSection />
      <ExpertiseSection />
      <WhyHoduSection />
      <FinalCTA />
    </>
  );
}
