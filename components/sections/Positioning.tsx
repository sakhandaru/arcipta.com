export default function Positioning() {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-12">
        {/* Visual Identity Logo/Mark */}
        <div className="w-24 h-24 bg-[var(--arcipta-gradient)] rounded-full blur-xl opacity-50 mb-[-4rem]"></div>

        <h2 className="text-3xl md:text-5xl font-creato font-medium max-w-4xl relative z-10">
          "Kami bukan sekadar vendor IT yang menerima tiket, lalu coding tanpa
          bertanya."
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-10 text-left max-w-4xl">
          <div>
            <h3 className="font-creato text-xl mb-4">The Old Way</h3>
            <p className="font-azeret text-sm text-neutral-500 leading-relaxed">
              Fokus pada fitur, deadline teknis, dan "asal jadi". Seringkali
              berakhir dengan software yang tidak menyelesaikan masalah bisnis
              alias <b>Zombie App</b>.
            </p>
          </div>
          <div>
            <h3 className="font-creato text-xl mb-4 text-[#FF6B00]">
              The Arcipta Way
            </h3>
            <p className="font-azeret text-sm text-neutral-500 leading-relaxed">
              Kami menggali konteks bisnis, menantang asumsi, dan merancang{" "}
              <b>Direction</b> sebelum satu baris kode pun ditulis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
