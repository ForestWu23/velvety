import Hero from '@/sections/Hero';
import About from '@/sections/About';
import FeatureCards from '@/sections/FeatureCards';
import Services from '@/sections/Services';
import Expertise from '@/sections/Expertise';
import Testimonials from '@/sections/Testimonials';
import Clients from '@/sections/Clients';
import ClosingCTA from '@/sections/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeatureCards />
      <Services />
      <Expertise />
      <Testimonials />
      <Clients />
      <ClosingCTA />
    </>
  );
}
