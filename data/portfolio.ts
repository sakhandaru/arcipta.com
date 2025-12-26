export interface PortfolioItem {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  overview: {
    problem: string;
    solution: string;
    role: string;
  };
  content: {
    context: string;
    challenge: string;
    approach: string;
    impact: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "fintech-dashboard-revamp",
    title: "Fintech Dashboard Revamp",
    client: "FintechCo",
    year: "2024",
    category: "Product Design",
    overview: {
      problem: "User churn tinggi di halaman dashboard karena kompleksitas data.",
      solution: "Redesign arsitektur informasi dan visual hierarchy yang lebih clear.",
      role: "UI/UX Design, Frontend Architecture",
    },
    content: {
      context: "FintechCo adalah platform investasi yang sedang berkembang pesat. Namun, pertumbuhan user baru tidak sebanding dengan retensi.",
      challenge: "Data menunjukkan 60% user baru bingung saat pertama kali melihat dashboard portofolio mereka. Terlalu banyak angka tanpa konteks.",
      approach: "Kami tidak langsung mendesain. Kami memetakan ulang user journey, memprioritaskan informasi yang paling dicari investor pemula vs expert.",
      impact: "Retensi user meningkat 25% dalam 3 bulan setelah peluncuran. Feedback customer support tentang 'kebingungan data' turun drastis.",
    },
  },
  {
    slug: "logistic-tracking-system",
    title: "Logistic Tracking System",
    client: "LogiFast",
    year: "2023",
    category: "Web Application",
    overview: {
      problem: "Sistem tracking manual menyebabkan delay update status pengiriman.",
      solution: "Real-time tracking system dengan integrasi GPS driver.",
      role: "Full Stack Development",
    },
    content: {
      context: "LogiFast menangani ribuan pengiriman per hari namun masih bergantung pada update SMS manual dari driver.",
      challenge: "Customer sering komplain karena status paket tidak real-time. CS kewalahan menjawab pertanyaan 'paket saya di mana?'.",
      approach: "Membangun PWA untuk driver yang mengirim lokasi GPS background, dan dashboard admin yang menampilkan peta live.",
      impact: "Efisiensi operasional naik 40%. Beban CS berkurang 70% karena customer bisa tracking mandiri secara akurat.",
    },
  },
  {
    slug: "fashion-ecommerce-scale",
    title: "Fashion E-commerce Scale",
    client: "ModeLuxe",
    year: "2023",
    category: "E-commerce",
    overview: {
      problem: "Website crash saat flash sale, conversion rate rendah di mobile.",
      solution: "Migrasi ke Headless Commerce dengan Next.js.",
      role: "Technical Consultation & Development",
    },
    content: {
      context: "ModeLuxe adalah brand fashion lokal yang viral. Platform lama mereka (monolith) tidak kuat menahan traffic spike.",
      challenge: "Lost opportunity revenue yang besar setiap kali server down saat launching produk baru.",
      approach: "Memisahkan frontend dan backend (Headless). Menggunakan infrastruktur serverless untuk auto-scaling saat traffic tinggi.",
      impact: "Zero downtime saat event 12.12. Loading time 3x lebih cepat, meningkatkan conversion rate mobile sebesar 15%.",
    },
  },
];
