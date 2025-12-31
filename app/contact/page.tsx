"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Mail,
  MessageSquare,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const infoRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".contact-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
      );

      tl.fromTo(
        infoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.5"
      );

      tl.fromTo(
        mapRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-[#FF6B00] selection:text-white"
    >
      <div className="h-32 md:h-48" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-32">
        <div className="flex flex-col gap-4 mb-20">
          <h1 className="contact-title text-5xl md:text-8xl font-creato font-bold tracking-tight">
            Let's Start <br />
            <span className="text-neutral-500">A Conversation.</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div ref={infoRef} className="lg:w-1/3 flex flex-col gap-12">
            <div>
              <h3 className="text-sm font-azeret text-[#FF6B00] uppercase tracking-widest mb-6">
                Contact Details
              </h3>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:hello@arcipta.com"
                  className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-azeret text-lg">hello@arcipta.com</span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <MessageSquare size={20} />
                  </div>
                  <span className="font-azeret text-lg">+62 812 3456 7890</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-azeret text-[#FF6B00] uppercase tracking-widest mb-6">
                Socials
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((Social, i) => (
                  <a
                    key={i}
                    href={Social.href}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-neutral-900/50 rounded-2xl border border-white/5">
              <p className="font-azeret text-sm text-neutral-400 leading-relaxed">
                "Great things in business are never done by one person. They're
                done by a team of people."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full" />
                <span className="font-creato font-bold text-sm">
                  Steve Jobs
                </span>
              </div>
            </div>
          </div>
          <div
            ref={mapRef}
            className="lg:w-2/3 min-h-[500px] w-full bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden relative group"
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale invert-[.9] contrast-[1.1] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              frameBorder="0"
              title="Semarang Map"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.193262064838!2d110.39928900000001!3d-6.986501699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b3780103aab%3A0xdb205055b00a6ff!2sPP%20Raudhatul%20Qur&#39;an%20Annasimiyyah!5e0!3m2!1sid!2sid!4v1767014836200!5m2!1sid!2sid"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl ring-1 ring-white/5 z-10"></div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
