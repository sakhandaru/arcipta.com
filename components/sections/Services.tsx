export default function Services() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "System Architecture",
    "Digital Transformation",
    "Product Management",
  ];

  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-creato font-bold max-w-xl">
            Layanan Konkret. <br />{" "}
            <span className="text-neutral-400">Tanpa Omong Kosong.</span>
          </h2>
          <p className="font-azeret text-sm max-w-xs text-right">
            Output yang terukur. Deliverables yang jelas. Stack teknologi
            modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-white dark:bg-black p-8 flex flex-col justify-end border border-neutral-100 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <h3 className="text-2xl font-creato font-medium">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
