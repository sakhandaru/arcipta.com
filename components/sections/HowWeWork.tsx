export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Understand Context",
      desc: "Diagnosis mendalam tentang bisnis, audiens, dan tujuan jangka panjang.",
    },
    {
      num: "02",
      title: "Map Direction",
      desc: "Menyusun strategi, arsitektur informasi, dan user journey yang efektif.",
    },
    {
      num: "03",
      title: "Build & Integrate",
      desc: "Eksekusi development dengan standar kode industri dan performa tinggi.",
    },
    {
      num: "04",
      title: "Grow & Cycle",
      desc: "Peluncuran, monitoring, dan iterasi berdasarkan data riil.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-xl font-creato font-bold mb-20 text-center uppercase tracking-widest text-neutral-400">
          Bagaimana Kami Bekerja
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <span
                className="text-6xl font-creato font-black text-transparent hover:text-orange-500 transition-colors duration-300"
                style={{ WebkitTextStroke: "1px #e5e5e5" }}
              >
                {step.num}
              </span>
              <h3 className="text-xl font-bold font-creato">{step.title}</h3>
              <p className="font-azeret text-sm text-neutral-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
