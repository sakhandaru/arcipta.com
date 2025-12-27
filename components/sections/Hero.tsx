
"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CONFIG } from "@/lib/animations";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: ANIMATION_CONFIG.ease.outExpo },
      });

      // Intro Animation
      tl.fromTo(
        headlineRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: ANIMATION_CONFIG.duration.slow,
        }
      ).fromTo(
        contentRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: ANIMATION_CONFIG.duration.medium,
        },
        "-=0.5"
      );

      // Scroll-out Animation
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1024px)": () => {
          gsap.to(containerRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            y: 50, // Subtle parallax for the whole container
            opacity: 0,
          });

          gsap.to(bgRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            y: 100, // Deeper parallax for background
          });
        },
        // Mobile
        "(max-width: 1023px)": () => {
          gsap.to(containerRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            opacity: 0, // Just fade, no movement
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-[var(--background)]"
    >
      {/* Background Gradient (Placeholder for complex animation later) */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-[60vh] bg-[var(--arcipta-gradient)] opacity-80 blur-[100px] -z-10 rounded-full scale-150 translate-y-[-50%]"
      ></div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {/* Main Headline */}
        <div className="md:col-span-12" ref={headlineRef}>
          <h1 className="text-[12vw] leading-[0.9] md:text-[8vw] font-creato font-black tracking-tighter text-white mix-blend-overlay">
            DIRECTION
            <br />
            BEFORE <br />
            TECHNOLOGY
          </h1>
        </div>

        {/* Subcopy & CTA */}
        <div
          ref={contentRef}
          className="md:col-span-5 md:col-start-8 mt-10 md:mt-0 flex flex-col gap-8"
        >
          <p className="font-azeret text-sm md:text-base leading-relaxed max-w-md">
            Sebagian besar masalah digital bukan soal teknologi, tapi arah.{" "}
            <span className="font-bold text-[#FF6B00]">ARCIPTA</span> membantu
            memetakan direction yang tepat sebelum menulis code.
          </p>
          <button className="w-fit px-8 py-4 border border-black/10 dark:border-white/20 rounded-full font-azeret text-sm hover:bg-black hover:text-white transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
