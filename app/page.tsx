import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import DoctorsSection from '@/components/DoctorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Deltin Dental Clinic | Best Dentist in Sonipat',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <DoctorsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
