import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
        <div className="mb-32">
          <h1 className="text-6xl md:text-9xl font-creato font-black mb-10 tracking-tighter mix-blend-difference">
            INSIGHTS & <br /> ARTICLES.
          </h1>
          <p className="font-azeret text-xl md:text-3xl max-w-4xl leading-relaxed mt-10">
            Pemikiran, strategi, dan eksplorasi teknologi dari tim{" "}
            <span className="text-orange-500">Arcipta</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-black/10 dark:border-white/10 pt-20">
          {articles.map((article, i) => (
            <Link
              href={`/articles/${article.slug}`}
              key={i}
              className="group block"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-start md:items-baseline hover:opacity-70 transition-opacity duration-300">
                <div className="w-full md:w-1/4">
                  <span className="font-azeret text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                    {article.category}
                  </span>
                  <span className="font-azeret text-xs text-neutral-500">
                    {article.date}
                  </span>
                </div>
                <div className="w-full md:w-3/4 border-b border-black/10 dark:border-white/10 pb-12 group-last:border-none">
                  <h2 className="text-3xl md:text-5xl font-creato font-bold mb-4 group-hover:underline decoration-orange-500 underline-offset-8">
                    {article.title}
                  </h2>
                  <p className="font-azeret text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
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
