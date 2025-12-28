import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Positioning from "@/components/sections/Positioning";
import GrowthCompass from "@/components/sections/GrowthCompass";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import HowWeWork from "@/components/sections/HowWeWork";
import CTA from "@/components/sections/CTA";
import GradualBlur from "@/components/GradualBlur";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <GradualBlur 
        preset="page-footer" 
        height="200px" 
        strength={1.5} 
        zIndex={40}
        curve="bezier"
        exponential={true}
        opacity={1}
        
      />
      <Hero />
      <Problem />
      <Positioning />
      <GrowthCompass />
      <Services />
      <Gallery />
      <HowWeWork />
      <CTA />
      <Footer />
    </main>
  );
}
