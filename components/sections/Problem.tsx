export default function Problem() {
  return (
    <section className="py-32 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image/Visual Placeholder */}
        <div className="relative aspect-square md:aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center">
          <p className="font-azeret text-xs text-neutral-400 uppercase tracking-widest">
            Visual: Direction vs Technology
          </p>
        </div>

        {/* Right: Copy */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-6xl font-creato font-bold leading-tight">
            Sebagian besar masalah digital bukan soal teknologi.
          </h2>
          <p className="font-azeret text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-lg">
            Banyak bisnis terjebak membeli tools mahal atau membangun aplikasi
            canggih, tapi lupa menentukan ke mana arahnya. Akibatnya? Biaya
            bengkak, dampak minim.
          </p>
        </div>
      </div>
    </section>
  );
}
