import Footer from "@/components/layout/Footer";

export default function OperatePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
        <div className="mb-20">
          <span className="text-green-500 font-azeret text-sm uppercase tracking-widest border border-green-500 px-3 py-1 rounded-full">
            Stage 02
          </span>
          <h1 className="text-6xl md:text-9xl font-creato font-black mt-6 mb-8">
            Operate
          </h1>
          <p className="font-azeret text-xl md:text-2xl max-w-3xl leading-relaxed text-neutral-600 dark:text-neutral-400">
            Bisnis sudah berjalan, tapi operasional berantakan? Saatnya sistem
            mengambil alih tugas repetitif manusia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-creato font-bold mb-8">
              Kesalahan Umum
            </h2>
            <ul className="flex flex-col gap-6">
              {[
                "Masih menggunakan Excel/Spreadsheet manual untuk data besar",
                "Order processing lambat dan rentan human error",
                "Customer service kewalahan menjawab pertanyaan berulang",
                "Data tersebar di berbagai platform (Siloed Data)",
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

          <div>
            <h2 className="text-3xl font-creato font-bold mb-8">
              Pendekatan Arcipta
            </h2>
            <ul className="flex flex-col gap-6">
              {[
                "Custom ERP / CRM Integration",
                "Workflow Automation (n8n / Zapier)",
                "Inventory Management System",
                "Centralized Dashboard",
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
