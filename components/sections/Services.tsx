"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CONFIG, SCROLL_TRIGGER_CONFIG } from "@/lib/animations";

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "System Architecture",
    "Digital Transformation",
    "Product Management",
  ];

  useGSAP(
    () => {
      const items = gridRef.current?.children;
      if (items) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: gridRef.current,
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
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-creato font-bold max-w-xl">
            Layanan Konkret
            <br />{" "}
            <span className="text-neutral-400">Yang biasa kami kerjakan.</span>
          </h2>
          <p className="font-azeret text-sm max-w-xs text-right">
            Output yang terukur. Deliverables yang jelas. Stack teknologi
            modern. Disesuaikan dengan kebutuhan Anda.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <div
              key={i}
              className="group aspect-[4/3] bg-white dark:bg-black p-8 flex flex-col justify-end border border-neutral-100 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-500 will-change-transform"
            >
              <h3 className="text-2xl font-creato font-medium group-hover:translate-x-2 transition-transform duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
