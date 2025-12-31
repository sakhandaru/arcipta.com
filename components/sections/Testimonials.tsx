"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Hendrawan",
    role: "CEO, Konstruksi Jaya",
    content:
      "Arcipta bukan sekadar vendor, tapi partner strategis. Mereka membantu kami mendefinisikan ulang branding digital kami sehingga lebih align dengan target market B2B korporat.",
    company: "PT Konstruksi Jaya",
  },
  {
    name: "Sarah Wijaya",
    role: "Founder, Glowskin",
    content:
      "Website yang dibangun tidak hanya cantik secara visual, tapi juga functional. Konversi penjualan kami meningkat 40% dalam bulan pertama setelah relaunch.",
    company: "Glowskin Aesthetic",
  },
  {
    name: "Budi Santoso",
    role: "Director, TechnoSol",
    content:
      "Approach 'Direction before Technology' mereka benar-benar terasa. Kami diajak berpikir strategis sebelum satu baris kode pun ditulis. Hasilnya sangat memuaskan.",
    company: "Techno Solutions",
  },
  {
    name: "Amanda Lie",
    role: "Marketing Head, Foodie",
    content:
      "Tim yang responsif dan sangat detail oriented. Animasi yang diterapkan di website kami sangat smooth dan memberikan kesan premium yang kami cari.",
    company: "Foodie Group",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Horizontal Scroll Animation (Marquee Effect)
      // We clone the list to create an seamless loop illusion or just scroll through if enough content
      // For a cleaner 'cinematic' look, let's do a slow scrub interaction or just a gentle auto-scroll

      const scroller = scrollerRef.current;
      if (!scroller) return;

      // Create an infinite loop effect
      const scrollerContent = Array.from(scroller.children);

      // Clone items for infinite loop
      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        scroller.appendChild(clone);
      });

      const totalWidth = scroller.scrollWidth / 2; // Since we duplicated

      gsap.to(scroller, {
        x: -totalWidth,
        ease: "none",
        duration: 40, // Adjust speed here
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Use modifier for seamless looping if needed, or simple repeat
        },
      });

      // Alternatively, just a simple linear tween if the width calculation is tricky
      // Resetting to 0 implies we need to be careful with the exact width match.
      // A safer simpler marquee:
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-32 bg-background overflow-hidden relative border-t border-border/40"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-creato font-semibold mb-6">
          Impact Stories
        </h2>
        <p className="font-azeret text-muted-foreground max-w-2xl mx-auto">
          Apa kata mereka yang telah bertransformasi bersama Arcipta.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden select-none mask-image-gradient">
        <div
          ref={scrollerRef}
          className="flex gap-8 px-4 w-max hover:pause-animation cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-[400px] md:w-[500px] flex flex-col gap-6 p-8 rounded-2xl bg-neutral-100/5 dark:bg-neutral-900/40 border border-black/5 dark:border-white/5 backdrop-blur-sm shrink-0 hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="text-primary w-10 h-10 opacity-50" />
              <p className="font-azeret text-xs leading-relaxed text-foreground/90">
                "{t.content}"
              </p>
              <div className="mt-auto flex flex-col gap-1 border-l-2 border-[#FF6B00] pl-4">
                <h4 className="font-creato font-bold text-lg">{t.name}</h4>
                <p className="font-azeret text-sm text-muted-foreground">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
