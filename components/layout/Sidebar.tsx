"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Backdrop ref for animation
  const backdropRef = useRef<HTMLDivElement>(null);

  // Ref for cleanup timer
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const openSidebar = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const closeSidebar = () => {
    // Add a small delay to allow moving mouse from button to sidebar
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const toggleSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      openSidebar();
    }
  };

  useGSAP(() => {
    if (isOpen) {
      // OPEN ANIMATION
      gsap.to(sidebarRef.current, {
        x: "0%",
        duration: 0.8,
        ease: "power3.inOut",
      });
      // Backdrop fade in
      gsap.to(backdropRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
      });

      const links = linksRef.current?.children;
      if (links) {
        gsap.fromTo(
          links,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.3,
          }
        );
      }
    } else {
      // CLOSE ANIMATION
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.inOut",
      });
      // Backdrop fade out
      gsap.to(backdropRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
      });
    }
  }, [isOpen]);

  const scrollToTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      {/* BRAND & CONTROLS (HAMBURGER + SCROLL TOP) */}
      <div className="fixed top-0 left-0 w-full z-[70] p-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        {/* LOGO - Always visible, clickable */}
        <Link
          href="/"
          className="text-xl font-bold uppercase tracking-wider font-creato pointer-events-auto"
        >
          Arcipta.com
        </Link>

        <div className="flex flex-col gap-10 items-center pointer-events-auto w-10">
          <button
            ref={menuButtonRef}
            onMouseEnter={openSidebar}
            onClick={toggleSidebar}
            className="group flex flex-col items-center gap-4 cursor-pointer"
          >
            <div className="flex flex-col items-end gap-[6px] mb-2">
              <span className="w-8 h-[2px] bg-white transition-all duration-300 group-hover:w-6" />
              <span className="w-6 h-[2px] bg-white transition-all duration-300 group-hover:w-8" />
            </div>
            <span className="font-azeret text-x uppercase tracking-widest rotate-90 origin-center whitespace-nowrap translate-y-2">
              Menu
            </span>
            <br />
          </button>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-lg mb-5">
              ↑
            </div>
            <span className="font-azeret text-x uppercase tracking-widest rotate-90 origin-center whitespace-nowrap translate-y-2">
              Ke Atas
            </span>
          </button>
        </div>
      </div>

      <div
        ref={backdropRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/60 z-[60] opacity-0 pointer-events-none transition-opacity cursor-pointer flex items-center justify-center md:justify-start md:pl-20"
      >
        <span className="hidden md:block font-azeret text-xs text-white/50 uppercase tracking-widest pointer-events-none">
          {/* Arcipta — Solusi Digital untuk Kebutuhan Sistem & Aplikasi Anda. 
          <br /> Transformasi bisnis melalui inovasi teknologi dan strategi digital yang tepat sasaran. 
          <br /> Kami menghadirkan solusi kustom untuk setiap tantangan bisnis Anda. 
          <br /><br /><br /> Klik di mana saja untuk menutup menu. */}
          Kode Promo: JNR5173
          <br /> <span className="">digunakan saat konsultasi</span>
        </span>

        <div
          ref={sidebarRef}
          onClick={(e) => e.stopPropagation()} // Stop click propagation to backdrop
          className="fixed top-0 right-0 h-screen w-full md:w-[360px] bg-neutral-900 border-l border-white/10 flex flex-col justify-between p-12 shadow-2xl translate-x-full cursor-default overflow-y-auto"
        >
          <div className="flex flex-col gap-12 mt-20 md:mt-0">
            <nav ref={linksRef} className="flex flex-col gap-6">
              {[
                { name: "Beranda", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/#services" },
                { name: "Growth Compass", href: "/growth-compass" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Artikel", href: "/articles" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-creato text-3xl md:text-4xl text-white hover:text-orange-500 transition-colors duration-300 font-bold uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-azeret text-neutral-500 uppercase tracking-widest mb-4">
                    Address
                  </h3>
                  <p className="font-azeret text-sm text-neutral-300 leading-relaxed">
                    Semarang, Central Java
                    <br />
                    Indonesia
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-azeret text-neutral-500 uppercase tracking-widest mb-4">
                    Contact
                  </h3>
                  <div className="flex flex-col gap-2 font-azeret text-sm text-neutral-300">
                    <a
                      href="mailto:hello@arcipta.com"
                      className="hover:text-white transition-colors"
                    >
                      Email
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-azeret text-neutral-500 uppercase tracking-widest mb-4">
                  Socials
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-azeret text-sm text-neutral-300">
                  {["LinkedIn", "Instagram", "X (Twitter)", "TikTok"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="font-azeret text-[10px] text-neutral-600 uppercase tracking-widest">
              © 2025 Arcipta Digital
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
