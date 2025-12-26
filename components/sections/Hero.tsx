import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-[var(--background)]">
      {/* Background Gradient (Placeholder for complex animation later) */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-[var(--arcipta-gradient)] opacity-80 blur-[100px] -z-10 rounded-full scale-150 translate-y-[-50%]"></div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {/* Main Headline */}
        <div className="md:col-span-12">
          <h1 className="text-[12vw] leading-[0.9] md:text-[8vw] font-creato font-black tracking-tighter text-white mix-blend-overlay">
            DIRECTION <br />
            BEFORE <br />
            TECHNOLOGY
          </h1>
        </div>

        {/* Subcopy & CTA */}
        <div className="md:col-span-5 md:col-start-8 mt-10 md:mt-0 flex flex-col gap-8">
          <p className="font-azeret text-sm md:text-base leading-relaxed max-w-md">
            Sebagian besar masalah digital bukan soal teknologi, tapi arah. Kami
            membantu memetakan direction yang tepat sebelum menulis code.
          </p>
          <button className="w-fit px-8 py-4 border border-black/10 dark:border-white/20 rounded-full font-azeret text-sm hover:bg-black hover:text-white transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
