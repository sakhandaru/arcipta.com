export default function Gallery() {
  return (
    <section className="py-32 px-0 bg-black text-white overflow-hidden">
      <div className="px-6 mb-12 flex justify-between items-end max-w-[1440px] mx-auto">
        <h2 className="text-[10vw] md:text-[6vw] leading-none font-creato font-bold">
          SELECTED <br /> WORKS
        </h2>
        <span className="font-azeret text-xs md:text-sm mb-2 text-neutral-400">
          2023 — 2025
        </span>
      </div>

      {/* Horizontal Scroll Placeholder */}
      <div className="flex gap-6 px-6 overflow-x-auto pb-10 w-full no-scrollbar">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="min-w-[80vw] md:min-w-[40vw] aspect-video bg-neutral-800 rounded-lg flex flex-col justify-center items-center relative group"
          >
            <span className="font-creato text-2xl text-neutral-600">
              Project Thumbnail {i}
            </span>
            <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="font-creato text-xl">Project Client Name</h3>
              <p className="font-azeret text-xs text-neutral-400">
                Web Development
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
