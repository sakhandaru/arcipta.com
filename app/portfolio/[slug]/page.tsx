import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import { portfolioItems } from "@/data/portfolio";

// SSG: Generate params for all portfolio items
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-black text-black dark:text-white">
      <article className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-20 border-b border-black/10 dark:border-white/10 pb-10">
          <div className="flex justify-between items-end mb-6">
            <span className="font-azeret text-sm uppercase tracking-widest text-neutral-500">
              {project.client} — {project.year}
            </span>
            <span className="font-azeret text-sm uppercase tracking-widest text-neutral-500">
              {project.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-creato font-black leading-tight max-w-4xl">
            {project.title}
          </h1>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-y-32">
          {/* Quick Overview Sidebar */}
          <div className="md:col-span-3 md:sticky md:top-32 h-fit">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-azeret text-xs uppercase tracking-widest mb-2 text-neutral-500">
                  Role
                </h3>
                <p className="font-creato text-lg">{project.overview.role}</p>
              </div>
              <div className="w-full h-[1px] bg-black/10 dark:bg-white/10"></div>
              <p className="font-azeret text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Study case ini fokus pada strategi bisnis dan penyelesaian
                masalah, bukan sekadar showcase visual.
              </p>
            </div>
          </div>

          {/* Main Story */}
          <div className="md:col-span-8 md:col-start-5 flex flex-col gap-20">
            <section>
              <h2 className="text-3xl font-creato mb-6">Context</h2>
              <p className="font-azeret text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.content.context}
              </p>
            </section>

            <div className="w-full aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
              <p className="font-azeret uppercase text-neutral-500">
                Visual Placeholder: Context
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-creato mb-6">The Challenge</h2>
              <p className="font-azeret text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.content.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-creato mb-6">Our Approach</h2>
              <p className="font-azeret text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.content.approach}
              </p>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                <p className="font-azeret uppercase text-xs text-neutral-500">
                  Process A
                </p>
              </div>
              <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                <p className="font-azeret uppercase text-xs text-neutral-500">
                  Process B
                </p>
              </div>
            </div>

            <section className="p-10 bg-orange-500/10 dark:bg-orange-500/20 rounded-2xl border border-orange-500/20">
              <h2 className="text-3xl font-creato mb-6 text-orange-600 dark:text-orange-400">
                Business Impact
              </h2>
              <p className="font-azeret text-xl leading-relaxed">
                {project.content.impact}
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
