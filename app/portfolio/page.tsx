import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />

      <div className="pt-32 pb-20 px-6 max-w-[1440px] mx-auto">
        <h1 className="text-6xl md:text-9xl font-creato font-black mb-20 tracking-tighter">
          Selected <br /> Works
        </h1>

        <div className="flex flex-col border-t border-black/10 dark:border-white/10">
          {portfolioItems.map((item, index) => (
            <div
              key={item.slug}
              className="group border-b border-black/10 dark:border-white/10 py-10 md:py-16 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              <Link href={`/portfolio/${item.slug}`} className="block">
                <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-6 mb-6">
                  <span className="font-azeret text-xs text-neutral-400">
                    0{index + 1} / {item.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-creato font-medium group-hover:translate-x-4 transition-transform duration-300">
                    {item.client}: {item.title}
                  </h2>
                  <span className="font-azeret text-xs text-neutral-400 hidden md:block">
                    {item.year}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="md:col-start-4 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-azeret text-xs uppercase tracking-widest mb-2 text-neutral-500">
                        Problem
                      </h3>
                      <p className="font-azeret text-sm leading-relaxed">
                        {item.overview.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-azeret text-xs uppercase tracking-widest mb-2 text-neutral-500">
                        Solution
                      </h3>
                      <p className="font-azeret text-sm leading-relaxed">
                        {item.overview.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-azeret text-xs uppercase tracking-widest mb-2 text-neutral-500">
                        View Case
                      </h3>
                      <span className="text-3xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
