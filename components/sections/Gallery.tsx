"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CONFIG, SCROLL_TRIGGER_CONFIG } from "@/lib/animations";

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Intro Reveal
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: SCROLL_TRIGGER_CONFIG.start,
          toggleActions: SCROLL_TRIGGER_CONFIG.toggleActions,
        },
        y: ANIMATION_CONFIG.distance.medium,
        opacity: 0,
        duration: ANIMATION_CONFIG.duration.medium,
        ease: ANIMATION_CONFIG.ease.outQuart,
      });

      // Desktop: Parallax for items
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const items = scrollContainerRef.current?.children;
          if (items) {
            Array.from(items).forEach((item) => {
              // Placeholder parallax on the inner content (mocking image movement)
              const inner = item.querySelector(".parallax-target");
              if (inner) {
                gsap.to(inner, {
                  yPercent: 10,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                });
              }
            });
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-32 px-0 bg-black text-white overflow-hidden"
    >
      <div className="px-6 mb-12 flex justify-between items-end max-w-[1440px] mx-auto">
        <h2 className="text-[10vw] md:text-[6vw] leading-none font-creato font-bold">
          SELECTED <br /> WORKS
        </h2>
        <span className="font-azeret text-xs md:text-sm mb-2 text-neutral-400">
          2023 — 2025
        </span>
      </div>

      {/* Horizontal Scroll Placeholder */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 px-6 overflow-x-auto pb-10 w-full no-scrollbar snap-x"
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="min-w-[80vw] md:min-w-[40vw] aspect-video bg-neutral-800 rounded-lg overflow-hidden relative group snap-center"
          >
            {/* Parallax Target (Mock Image) */}
            <div className="parallax-target w-full h-[120%] bg-neutral-700 absolute top-[-10%] flex items-center justify-center">
              <span className="font-creato text-2xl text-neutral-600">
                Project Thumbnail {i}
              </span>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="font-creato text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Project Client Name
              </h3>
              <p className="font-azeret text-xs text-neutral-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                Web Development
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
