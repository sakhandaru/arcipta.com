"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef(null);
  const logoRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Growth Compass", href: "/growth-compass" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "X (Twitter)", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "Threads", href: "#" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    // Reveal Arcipta.com logo
    tl.from(logoRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    // Staggered reveal untuk semua kolom & link
    tl.from(".footer-column", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.6");

  }, { scope: footerRef });

  return (
    <footer 
      ref={footerRef}
      className="bg-black text-white pt-24 pb-12 px-6 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Brand (Spans 5 cols) */}
          <div className="md:col-span-5">
            <div className="overflow-hidden">
              <h2 
                ref={logoRef}
                className="text-6xl md:text-8xl font-creato font-bold tracking-tighter mb-8"
              >
                Arcipta.com
              </h2>
            </div>
            <p className="font-azeret text-neutral-500 max-w-sm leading-relaxed">
              We design digital futures, not just code. Level up your business direction with us.
            </p>
          </div>

          {/* Column 2: Navigation (Spans 2 cols) */}
          <div className="md:col-span-2 footer-column">
            <h3 className="text-xs font-azeret text-neutral-600 uppercase tracking-[0.2em] mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-azeret text-sm hover:text-[#FF6B00] transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials (Spans 2 cols) */}
          <div className="md:col-span-2 footer-column">
            <h3 className="text-xs font-azeret text-neutral-600 uppercase tracking-[0.2em] mb-6">
              Socials
            </h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a href={social.href} className="group flex items-center gap-2 font-azeret text-sm hover:text-[#FF6B00] transition-colors duration-300">
                    <span className="w-0 h-[1px] bg-[#FF6B00] transition-all duration-300 group-hover:w-3"></span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Spans 3 cols) */}
          <div className="md:col-span-3 footer-column">
            <h3 className="text-xs font-azeret text-neutral-600 uppercase tracking-[0.2em] mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-6 font-azeret text-sm">
              <div>
                <p className="text-neutral-500 mb-1 italic text-xs">Address</p>
                <p>Semarang, Central Java, Indonesia</p>
              </div>
              <div>
                <p className="text-neutral-500 mb-1 italic text-xs">Email</p>
                <a href="mailto:hello@arcipta.com" className="hover:text-[#FF6B00] transition-colors">hello@arcipta.com</a>
              </div>
              <div>
                <p className="text-neutral-500 mb-1 italic text-xs">WhatsApp</p>
                <a href="https://wa.me/yournumber" className="hover:text-[#FF6B00] transition-colors">+62 812 XXXX XXXX</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="font-azeret text-[10px] text-neutral-700 uppercase tracking-[0.3em]">
            © 2025 Arcipta Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-8 font-azeret text-[10px] text-neutral-700 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}