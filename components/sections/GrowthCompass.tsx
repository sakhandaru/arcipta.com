"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GrowthCompass() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const phases = [
    {
      id: "01",
      title: "Launch Pad",
      desc: "Validasi ide, temukan market-fit, dan luncurkan MVP yang solid.",
      color: "#3b82f6",
    },
    {
      id: "02",
      title: "Operate",
      desc: "Otomasi sistem, rapikan workflow, dan siapkan fondasi scaling.",
      color: "#22c55e",
    },
    {
      id: "03",
      title: "Innovate",
      desc: "Ekspansi bisnis, pivot strategis, dan dominasi pasar baru.",
      color: "#a855f7",
    },
  ];

  useGSAP(
    () => {
      // ===============================
      // DESKTOP ONLY
      // ===============================
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const container = containerRef.current;
          if (!container) return;

          const totalScroll =
            container.scrollWidth - window.innerWidth;

          const pinTween = gsap.to(container, {
            x: () => -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: () => `+=${totalScroll}`,
              scrub: 1,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Text reveal per card (sinkron horizontal)
          const cards =
            gsap.utils.toArray<HTMLElement>(".compass-card");

          cards.forEach((card) => {
            const text =
              card.querySelector<HTMLElement>(".reveal-text");
            if (!text) return;

            gsap.fromTo(
              text,
              { yPercent: 100 },
              {
                yPercent: 0,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: pinTween,
                  start: "left center",
                },
              }
            );
          });

          return () => {
            pinTween.kill();
          };
        },

        // ===============================
        // MOBILE & TABLET
        // ===============================
        "(max-width: 1023px)": () => {
          // FULL DISABLE
          ScrollTrigger.getAll().forEach((st) => st.kill());
          gsap.set(containerRef.current, { clearProps: "all" });
        },
      });
    },
    { scope: triggerRef }
  );

  return (
    <section ref={triggerRef} className="bg-black overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-[300vw] h-screen items-center"
      >
        <section className="w-screen h-screen flex flex-col justify-center px-10 md:px-24 shrink-0">
          <h2 className="text-4xl md:text-7xl font-creato font-bold text-white mb-6">
            Growth Compass <span className="text-[#FF6B00]">ARCIPTA</span>
          </h2>
          <p className="font-azeret text-neutral-500 max-w-2xl text-lg">
            Scroll untuk melihat bagaimana kami memandu pertumbuhan bisnis Anda secara strategis.
          </p>
          <div className="mt-12 flex items-center gap-4 text-white/30 font-azeret text-xs uppercase tracking-widest">
            <span>Scroll Down to Navigate</span>
            <div className="w-20 h-[1px] bg-white/20"></div>
          </div>
        </section>
        {phases.map((phase) => (
          <div
            key={phase.id}
            className="compass-card w-screen h-screen flex flex-col justify-center px-6 md:px-24 relative"
          >
            {/* Background Number */}
            <span className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 text-[30vw] md:text-[40vw] font-creato font-black text-white/[0.03] select-none pointer-events-none">
              {phase.id}
            </span>

            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-[2px]"
                  style={{ backgroundColor: phase.color }}
                />
                <span className="font-azeret text-sm uppercase tracking-[0.4em] text-neutral-500">
                  Phase {phase.id}
                </span>
              </div>

              <div className="overflow-hidden mb-8">
                <h3 className="reveal-text text-6xl md:text-9xl font-creato font-bold text-white leading-none">
                  {phase.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-end">
                <p className="font-azeret text-lg md:text-2xl text-neutral-400 leading-relaxed">
                  {phase.desc}
                </p>

                <div className="flex justify-start md:justify-end">
                  <button className="group flex items-center gap-4 text-white font-azeret text-sm uppercase tracking-widest">
                    <span>Explore Phase</span>
                    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      →
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


