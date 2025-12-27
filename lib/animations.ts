export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.6,
    medium: 0.8,
    slow: 1.2,
  },
  ease: {
    outExpo: "power4.out",
    outQuart: "power4.out", // GSAP power4 is close to quart/expo
    inOut: "power3.inOut",
  },
  distance: {
    short: 20,
    medium: 40,
    long: 80,
  },
  opacity: {
    hidden: 0,
    visible: 1,
  },
} as const;

export const SCROLL_TRIGGER_CONFIG = {
  start: "top 85%",
  toggleActions: "play none none reverse",
};
