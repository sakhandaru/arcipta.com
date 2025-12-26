import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LaunchpadPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />

      <div className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
        <div className="mb-20">
          <span className="text-blue-500 font-azeret text-sm uppercase tracking-widest border border-blue-500 px-3 py-1 rounded-full">
            Stage 01
          </span>
          <h1 className="text-6xl md:text-9xl font-creato font-black mt-6 mb-8">
            Launch Pad
          </h1>
          <p className="font-azeret text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-600 dark:text-neutral-400">
            Fase krusial dimana ide divalidasi. Jangan habiskan budget untuk
            fitur yang belum tentu dibutuhkan user.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left: Common Mistakes */}
          <div>
            <h2 className="text-3xl font-creato font-bold mb-8">
              Kesalahan Umum
            </h2>
            <ul className="flex flex-col gap-6">
              {[
                "Membangun aplikasi terlalu kompleks (Over-engineering)",
                "Tidak fokus pada core value proposition",
                "Mengabaikan user feedback awal",
                "Budget habis di development sebelum marketing",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start font-azeret text-neutral-600 dark:text-neutral-400"
                >
                  <span className="text-red-500">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Arcipta Approach */}
          <div>
            <h2 className="text-3xl font-creato font-bold mb-8">
              Pendekatan Arcipta
            </h2>
            <ul className="flex flex-col gap-6">
              {[
                "Rapid Prototyping & MVP Development",
                "Landing Page Optimization",
                "Analytics Setup (Google Analytics / Mixpanel)",
                "User Interview & Feedback Loop",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start font-azeret text-black dark:text-white font-medium"
                >
                  <span className="text-green-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
