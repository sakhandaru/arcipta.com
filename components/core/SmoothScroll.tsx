"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable Lenis on Mobile / Tablet (Native scroll is better for touch)
    if (window.matchMedia("(max-width: 1023px)").matches) {
      return;
    }

    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.5,
      wheelMultiplier: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update);

    // Integrate Lenis raf loop with GSAP ticker
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    // Disable GSAP lag smoothing to ensure sync with Lenis
    gsap.ticker.lagSmoothing(0);

    // Explicitly refresh ScrollTrigger to prevent pin collisions
    ScrollTrigger.refresh();

    // Force refresh on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove((time) => {
        lenisInstance.raf(time * 1000);
      });
      lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
