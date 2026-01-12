import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Positioning from "@/components/sections/Positioning";
import GrowthCompass from "@/components/sections/GrowthCompass";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import HowWeWork from "@/components/sections/HowWeWork";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import GradualBlurLite from "@/components/GradualBlur";
// import GradualBlur from "@/components/GradualBlur";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <GradualBlurLite />
      <Hero />
      <Problem />
      <Positioning />
      <GrowthCompass />
      <Services />
      <Gallery />
      <HowWeWork />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
