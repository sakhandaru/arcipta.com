"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    // Ensure ScrollTrigger is refreshed on layout updates
    ScrollTrigger.refresh();
  }, []);

  return <>{children}</>;
}
