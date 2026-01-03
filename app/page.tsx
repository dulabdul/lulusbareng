import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/content';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <FAQ />

      <ContactCTA />
    </>
  );
}
