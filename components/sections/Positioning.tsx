"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CONFIG, SCROLL_TRIGGER_CONFIG } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function Positioning() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal Main Headline
      gsap.from(headlineRef.current, {
        scrollTrigger: {
          trigger: headlineRef.current,
          start: SCROLL_TRIGGER_CONFIG.start,
          toggleActions: SCROLL_TRIGGER_CONFIG.toggleActions,
        },
        y: ANIMATION_CONFIG.distance.medium,
        opacity: 0,
        duration: ANIMATION_CONFIG.duration.medium,
        ease: ANIMATION_CONFIG.ease.outQuart,
      });

      // Reveal Grid Items (Old Way vs Arcipta Way)
      const gridChildren = gridRef.current?.children;
      if (gridChildren) {
        gsap.from(gridChildren, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: SCROLL_TRIGGER_CONFIG.start,
            toggleActions: SCROLL_TRIGGER_CONFIG.toggleActions,
          },
          y: ANIMATION_CONFIG.distance.medium,
          opacity: 0,
          duration: ANIMATION_CONFIG.duration.medium,
          stagger: 0.2, // Defined delay between columns
          ease: ANIMATION_CONFIG.ease.outQuart,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-0 py-32 px-6 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-12">
        {/* Visual Identity Logo/Mark */}
        <div className="w-24 h-24 bg-[var(--arcipta-gradient)] rounded-full blur-xl opacity-50 mb-[-4rem]"></div>

        <h2
          ref={headlineRef}
          className="text-3xl md:text-5xl font-creato font-medium max-w-4xl relative z-10"
        >
          &quot;Kami bukan sekadar vendor IT yang menerima tiket, lalu coding
          tanpa bertanya.&quot;
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-10 text-left max-w-4xl"
        >
          <div>
            <h3 className="font-creato text-xl mb-4">The Old Way</h3>
            <p className="font-azeret text-sm text-neutral-500 leading-relaxed">
              Fokus pada fitur, deadline teknis, dan &quot;asal jadi&quot;.
              Seringkali berakhir dengan software yang tidak menyelesaikan
              masalah bisnis alias <b>Zombie App</b>.
            </p>
          </div>
          <div>
            <h3 className="font-creato text-xl mb-4 text-[#FF6B00]">
              The Arcipta Way
            </h3>
            <p className="font-azeret text-sm text-neutral-500 leading-relaxed">
              Kami menggali konteks bisnis, menantang asumsi, dan merancang{" "}
              <b>Direction</b> sebelum satu baris kode pun ditulis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
