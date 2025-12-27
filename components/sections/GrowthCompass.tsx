export default function GrowthCompass() {
  const phases = [
    {
      id: "01",
      title: "Launch Pad",
      desc: "Validasi ide, temukan market-fit, dan luncurkan MVP yang solid.",
      color: "border-blue-500",
    },
    {
      id: "02",
      title: "Operate",
      desc: "Otomasi sistem, rapikan workflow, dan siapkan fondasi scaling.",
      color: "border-green-500",
    },
    {
      id: "03",
      title: "Innovate",
      desc: "Ekspansi bisnis, pivot strategis, dan dominasi pasar baru.",
      color: "border-purple-500",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-creato font-bold mb-6">
            Growth Compass <span className="font-bold text-[#FF6B00]">ARCIPTA</span>
          </h2>
          <p className="max-w-6xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-azeret">
            Navigasi strategis untuk membantu Anda menentukan arah langkah yang tepat, dirancang khusus berdasarkan setiap tahapan perkembangan perusahaan.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`p-10 md:p-14 border-l-4 ${phase.color} bg-neutral-50 dark:bg-neutral-900 rounded-tr-2xl rounded-br-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6`}
            >
              <div className="flex flex-col gap-2">
                <span className="font-azeret text-xs uppercase tracking-widest text-neutral-400">
                  Phase {phase.id}
                </span>
                <h3 className="text-3xl md:text-5xl font-creato font-medium">
                  {phase.title}
                </h3>
              </div>
              <p className="font-azeret text-sm md:text-base max-w-sm text-neutral-600 dark:text-neutral-400">
                {phase.desc}
              </p>
              <button className="text-sm font-azeret border-b border-black dark:border-white pb-1 hover:opacity-50 transition-opacity">
                Explore Phase
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
