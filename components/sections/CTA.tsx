"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Mulai saat section masuk dari bawah layar
          end: "bottom top", // Berakhir saat section hilang ke atas
          scrub: 1.5, // Nilai scrub lebih tinggi = gerakan lebih "lembut" (fluid)
        },
      });

      // 1. Parallax Background: Background bergerak sedikit ke bawah
      tl.fromTo(bgRef.current, { y: -100 }, { y: 100, ease: "none" }, 0);

      // 2. Parallax Elements: Headline, Teks, dan Tombol bergerak ke atas dengan kecepatan berbeda (Depth Effect)
      tl.fromTo(headingRef.current, { y: 50 }, { y: -50, ease: "none" }, 0);
      tl.fromTo(textRef.current, { y: 80 }, { y: -80, ease: "none" }, 0);
      tl.fromTo(buttonsRef.current, { y: 120 }, { y: -120, ease: "none" }, 0);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-48 px-6 overflow-hidden flex flex-col items-center text-center"
    >
      {/* Background Layer untuk Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-neutral-100 dark:bg-neutral-900"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10">
        <h2
          ref={headingRef}
          className="text-4xl md:text-7xl font-creato font-semibold leading-tight"
        >
          Masih bingung menentukan kebutuhan digital bisnis Anda?
        </h2>

        <p
          ref={textRef}
          className="font-azeret text-lg text-neutral-600 dark:text-neutral-400"
        >
          Jangan habiskan budget untuk tools yang salah. Mari bicara{" "}
          <span className="font-bold text-[#FF6B00]">direction</span>.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row gap-4 justify-center mt-8"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold font-azeret rounded-full hover:scale-105 transition-transform"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-black/10 dark:border-white/10 font-bold font-azeret rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            Lihat Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
