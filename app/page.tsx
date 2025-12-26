import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Positioning from "@/components/sections/Positioning";
import GrowthCompass from "@/components/sections/GrowthCompass";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import HowWeWork from "@/components/sections/HowWeWork";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <Header />
      <Hero />
      {/* <Problem />
      <Positioning />
      <GrowthCompass />
      <Services />
      <Gallery />
      <HowWeWork />
      <CTA /> */}
      <Footer />
    </main>
  );
}
