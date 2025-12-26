import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GrowthCompassPage() {
  const stages = [
    {
      slug: "launchpad",
      title: "Launch Pad",
      desc: "Validasi. Temukan market-fit. Luncurkan MVP.",
      color: "border-blue-500",
    },
    {
      slug: "operate",
      title: "Operate",
      desc: "Otomasi. Rapikan workflow. Siapkan scaling.",
      color: "border-green-500",
    },
    {
      slug: "innovate",
      title: "Innovate",
      desc: "Ekspansi. Pivot strategis. Dominasi pasar.",
      color: "border-purple-500",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />

      <div className="pt-32 pb-20 px-6 max-w-[1440px] mx-auto">
        <h1 className="text-5xl md:text-8xl font-creato font-black mb-10 text-center">
          Growth Compass API
        </h1>
        <p className="text-center font-azeret text-lg max-w-2xl mx-auto mb-20 text-neutral-600 dark:text-neutral-400">
          Sebuah framework berpikir untuk memetakan di mana posisi bisnis Anda
          saat ini, dan apa fokus teknologi yang tepat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((stage) => (
            <Link
              key={stage.slug}
              href={`/growth-compass/${stage.slug}`}
              className="group relative overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-10 flex flex-col justify-between aspect-[3/4] hover:border-black dark:hover:border-white transition-colors"
            >
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full border ${stage.color} text-xs uppercase tracking-widest mb-6`}
                >
                  Stage
                </span>
                <h2 className="text-4xl font-creato font-bold mb-4">
                  {stage.title}
                </h2>
                <p className="font-azeret text-sm text-neutral-500">
                  {stage.desc}
                </p>
              </div>
              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
