"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CONFIG, SCROLL_TRIGGER_CONFIG } from "@/lib/animations";
import ImageComparison from "../ui/feature-with-image-comparison";

export default function Problem() {
  const containerRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Setup Text Stagger
      const textElements = textRef.current?.children;
      if (textElements) {
        gsap.from(textElements, {
          scrollTrigger: {
            trigger: textRef.current,
            start: SCROLL_TRIGGER_CONFIG.start,
            toggleActions: SCROLL_TRIGGER_CONFIG.toggleActions,
          },
          y: ANIMATION_CONFIG.distance.medium,
          opacity: 0,
          duration: ANIMATION_CONFIG.duration.medium,
          stagger: 0.1,
          ease: ANIMATION_CONFIG.ease.outQuart,
        });
      }

      // Depth Illusion for Visual
      ScrollTrigger.matchMedia({
        // Desktop only
        "(min-width: 1024px)": () => {
          gsap.to(visualRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            y: -50, // Move up slightly faster (depth)
            scale: 1.05, // Subtle scale up
            ease: "none",
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-0 py-32 px-6 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image/Visual Placeholder */}
        
        <ImageComparison />

        {/* Right: Copy */}
        <div ref={textRef} className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-6xl font-creato font-bold leading-tight">
            Banyak sistem dibangun tanpa{" "}
            <span className="text-[#FF6B00]">arah</span> yang jelas.
          </h2>
          <p className="font-azeret text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-lg">
            Banyak bisnis terjebak membeli tools mahal atau membangun aplikasi
            canggih, tapi lupa menentukan ke mana arahnya. Akibatnya? Biaya
            bengkak, dampak minim.
          </p>
        </div>
      </div>
    </section>
  );
}
