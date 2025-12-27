"use client";

import { useRef, CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Understand Context",
      desc: "Diagnosis mendalam tentang bisnis, audiens, dan tujuan jangka panjang.",
    },
    {
      num: "02",
      title: "Map Direction",
      desc: "Menyusun strategi, arsitektur informasi, dan user journey yang efektif.",
    },
    {
      num: "03",
      title: "Build & Integrate",
      desc: "Eksekusi development dengan standar kode industri dan performa tinggi.",
    },
    {
      num: "04",
      title: "Grow & Cycle",
      desc: "Peluncuran, monitoring, dan iterasi berdasarkan data riil.",
    },
  ];

  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gridRef.current?.children;

      /* ----------------------------------
       * 1. ENTRY ANIMATION (ANTI SCROLL BUG)
       * ---------------------------------- */
      if (items) {
        gsap.to(items, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        });
      }

      /* ----------------------------------
       * 2. OUTLINE PROGRESSIVE FLOW
       * ---------------------------------- */
      const numbers = gsap.utils.toArray<HTMLElement>(".step-number");

      if (numbers.length) {
        gsap.to(numbers, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "top 55%", // DIPENDEKKAN → selesai lebih cepat
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
          "--stroke-color": "#FF6B00",
          "--stroke-width": "1px",
          stagger: 0.15,
          ease: "none",
        });
      }

      // WAJIB kalau pakai Lenis / smooth scroll
      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-xl font-creato font-bold mb-20 text-center uppercase tracking-widest text-neutral-400">
          Bagaimana Kami Bekerja
        </h2>

        <div
          ref={gridRef}
          data-animate="how"
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span
                className="step-number text-6xl font-creato font-black"
                style={
                  {
                    color: "transparent",
                    "--stroke-color": "#e5e5e5",
                    "--stroke-width": "1px",
                    WebkitTextStroke: "var(--stroke-width) var(--stroke-color)",
                  } as CSSProperties
                }
              >
                {step.num}
              </span>

              <h3 className="text-xl font-bold font-creato">{step.title}</h3>

              <p className="font-azeret text-sm text-neutral-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
