"use client";

import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Apa perbedaan Arcipta dengan software house lain?",
    answer:
      "Kami tidak sekadar menulis kode. Arcipta berfokus pada 'Direction before Technology'—kami mendalami model bisnis dan strategi Anda terlebih dahulu sebelum membangun solusi digital, memastikan teknologi yang dibangun benar-benar berdampak pada pertumbuhan bisnis.",
  },
  {
    question: "Berapa lama estimasi pengerjaan sebuah proyek?",
    answer:
      "Durasi sangat bergantung pada kompleksitas. Untuk landing page standar biasanya 2-4 minggu, sedangkan web app kompleks bisa memakan waktu 3-6 bulan. Kami akan memberikan timeline detail setelah sesi discovery.",
  },
  {
    question: "Apakah saya perlu menyiapkan desain sendiri?",
    answer:
      "Tidak perlu. Tim kami mencakup UI/UX designer yang akan merancang antarmuka yang estetis dan fungsional sesuai brand identity Anda. Namun jika Anda sudah memiliki desain, kami siap untuk mengimplementasikannya.",
  },
  {
    question: "Bagaimana sistem maintenance setelah website launch?",
    answer:
      "Kami memberikan garansi bug fix selama 30 hari pasca-launch. Setelah itu, kami menawarkan paket maintenance bulanan untuk update security, backup data, dan penyesuaian konten minor agar website Anda selalu optimal.",
  },
  {
    question: "Apakah Arcipta menerima redesign website lama?",
    answer:
      "Tentu. Kami sering membantu bisnis yang merasa website lamanya sudah tidak relevan atau performanya lambat. Kami akan mengaudit website lama Anda dan menyarankan strategi peremajaan yang tepat.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(
    () => {
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 bg-background text-foreground overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Header Section */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-creato font-semibold leading-tight">
            <span className="text-[#FF6B00]">F</span>requently{" "}
            <span className="text-[#FF6B00]">A</span>sked{" "}
            <span className="text-[#FF6B00]">Q</span>uestions
          </h2>
          <p className="font-azeret text-muted-foreground leading-relaxed">
            Jawaban untuk hal-hal yang sering ditanyakan seputar layanan dan
            keramasamaan kami.
          </p>
          <div className="hidden md:block w-full h-[1px] bg-border mt-4"></div>
        </div>

        {/* Accordion List */}
        <div className="md:w-2/3 flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-border py-6 group cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between gap-4 items-center">
                <h3
                  className={`font-creato text-xl transition-colors duration-300 ${
                    openIndex === index
                      ? "text-primary"
                      : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {faq.question}
                </h3>
                <div className="relative flex items-center justify-center w-6 h-6 shrink-0 text-primary">
                  <span
                    className={`absolute transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-90 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  >
                    <Plus size={24} />
                  </span>
                  <span
                    className={`absolute transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-0 opacity-100"
                        : "-rotate-90 opacity-0"
                    }`}
                  >
                    <Minus size={24} />
                  </span>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100 mt-4"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="font-azeret text-muted-foreground leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
