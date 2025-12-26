import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />

      <div className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
        {/* Intro */}
        <div className="mb-32">
          <h1 className="text-6xl md:text-9xl font-creato font-black mb-10 tracking-tighter mix-blend-difference">
            WE ARE <br /> ARCIPTA.
          </h1>
          <p className="font-azeret text-xl md:text-3xl max-w-4xl leading-relaxed mt-10">
            Kami adalah partner teknologi yang percaya bahwa{" "}
            <span className="text-orange-500">arah yang jelas</span> lebih
            penting daripada kode yang canggih.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          <div>
            <span className="font-azeret text-xs uppercase tracking-widest text-neutral-400 block mb-6">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-creato font-bold mb-8">
              Direction before Technology
            </h2>
          </div>

          <div className="flex flex-col gap-8 font-azeret text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed md:pt-4">
            <p>
              Di dunia yang bising dengan buzzword teknologi—AI, Blockchain,
              Web3—mudah untuk tersesat. Banyak bisnis membangun solusi untuk
              masalah yang tidak ada.
            </p>
            <p>
              Arcipta berdiri sebagai antitesis dari "asal canggih". Kami
              memulai setiap project dengan pertanyaan sulit: "Kenapa?" dan "Mau
              ke mana?".
            </p>
            <p>
              Kami tidak hanya menulis kode; kami merancang masa depan digital
              bisnis Anda.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-black/10 dark:border-white/10 pt-20">
          <h2 className="text-3xl font-creato font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Business First",
                desc: "Teknologi adalah alat, bukan tujuan. Dampak bisnis adalah satu-satunya metrik validitas kami.",
              },
              {
                title: "Transparent Process",
                desc: "Tidak ada kotak hitam. Anda akan tahu persis progres, tantangan, dan keputusan yang diambil.",
              },
              {
                title: "Scalable Thinking",
                desc: "Kami membangun untuk hari ini, dengan arsitektur yang siap untuk pertumbuhan besok.",
              },
            ].map((val, i) => (
              <div key={i}>
                <h3 className="font-creato text-2xl font-medium mb-4">
                  {val.title}
                </h3>
                <p className="font-azeret text-sm text-neutral-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
