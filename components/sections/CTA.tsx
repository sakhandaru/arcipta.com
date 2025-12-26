export default function CTA() {
  return (
    <section className="py-32 px-6 bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <h2 className="text-4xl md:text-7xl font-creato font-black leading-tight">
          Masih bingung menentukan kebutuhan digital bisnis Anda?
        </h2>

        <p className="font-azeret text-lg text-neutral-600 dark:text-neutral-400">
          Jangan habiskan budget untuk tools yang salah. Mari bicara direction.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold font-azeret rounded-full hover:scale-105 transition-transform">
            Book Free Consultation
          </button>
          <button className="px-8 py-4 border border-black/10 dark:border-white/10 font-bold font-azeret rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
            Lihat Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
