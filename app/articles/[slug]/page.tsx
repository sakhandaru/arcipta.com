import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import Link from "next/link";

// SSG: Generate params for all articles
export async function generateStaticParams() {
  return articles.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <article className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <Link
            href="/articles"
            className="font-azeret text-xs uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Articles
          </Link>
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex justify-between items-end border-b border-black/10 dark:border-white/10 pb-6">
              <span className="font-azeret text-sm uppercase tracking-widest text-orange-500">
                {article.category}
              </span>
              <span className="font-azeret text-sm uppercase tracking-widest text-neutral-500">
                {article.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-creato font-black leading-tight max-w-5xl">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl font-azeret text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-20">
          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-lg">
            <img
              src={article.image}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 md:col-start-3">
            <div
              className="prose prose-lg dark:prose-invert max-w-none font-azeret leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
