export interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  content: string; // HTML or Markdown string for simplicity
  image: string;
}

export const articles: Article[] = [
  {
    title: "Membangun Fondasi Digital yang Kokoh",
    excerpt:
      "Mengapa arsitektur sistem yang baik lebih penting daripada sekadar memilih framework populer.",
    date: "12 Jan 2026",
    category: "Engineering",
    slug: "foundation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    content: `
      <p class="mb-6">Dalam dunia pengembangan perangkat lunak yang bergerak cepat, kita sering terjebak dalam "hype" teknologi terbaru. Framework baru muncul setiap minggu, menjanjikan kecepatan, kemudahan, dan skalabilitas. Namun, di Arcipta, kami percaya bahwa fondasi yang kuat jauh lebih bernilai daripada sekadar mengikuti tren.</p>
      
      <h3 class="text-2xl font-creato font-bold mb-4 mt-8">The "Boring" Technology</h3>
      <p class="mb-6">Ada sebuah esai terkenal berjudul "Choose Boring Technology". Idenya sederhana: gunakan teknologi yang sudah terbukti, stabil, dan dipahami dengan baik oleh tim Anda. Risiko menggunakan teknologi bleeding-edge seringkali tidak sebanding dengan manfaat marjinal yang ditawarkan.</p>
      
      <p class="mb-6">Bukan berarti kita anti-inovasi. Tapi inovasi harus terjadi di level produk dan solusi bisnis, bukan sekadar eksperimen tool di production.</p>

      <h3 class="text-2xl font-creato font-bold mb-4 mt-8">Scalability is a Problem for Later (Usually)</h3>
      <p class="mb-6">Salah satu kesalahan terbesar startup tahap awal adalah over-engineering. Membangun infrastruktur kubernetes yang kompleks untuk aplikasi yang baru memiliki 10 user adalah pemborosan sumber daya. Fondasi yang kokoh berarti memiih arsitektur yang <em>bisa</em> di-scale, bukan yang <em>sudah</em> di-scale sejak hari pertama padahal belum perlu.</p>
      
      <p class="mb-6">Fokuslah pada modularitas, clean code, dan automated testing. Itulah fondasi yang sebenarnya.</p>
    `,
  },
  {
    title: "Direction Before Technology",
    excerpt:
      "Filosofi kami dalam memilih solusi teknologi yang tepat sasaran untuk kebutuhan bisnis Anda.",
    date: "08 Jan 2026",
    category: "Philosophy",
    slug: "direction",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p class="mb-6">Seringkali klien datang kepada kami dengan permintaan spesifik: "Kami ingin buat aplikasi mobile pake Flutter," atau "Kami butuh blockchain." Tugas pertama kami bukanlah mengiyakan, tapi bertanya: "Kenapa?"</p>
      
      <h3 class="text-2xl font-creato font-bold mb-4 mt-8">Start with the "Why"</h3>
      <p class="mb-6">Teknologi hanyalah kendaraan untuk mencapai tujuan bisnis. Jika tujuan bisnis bisa dicapai dengan Google Sheet dan Zapier, kenapa harus keluar ratusan juta untuk custom app? Efisiensi dan ROI adalah raja.</p>
      
      <p class="mb-6">Kami di Arcipta menempatkan diri sebagai mitra strategis, bukan sekadar vendor coding. Kami membantu Anda memetakan arah (Direction) sebelum kita bicara soal peta teknisnya.</p>
      
      <h3 class="text-2xl font-creato font-bold mb-4 mt-8">The Cost of Clarity</h3>
      <p class="mb-6">Mencari kejelasan di awal memang melelahkan. Butuh diskusi panjang, debat, dan riset. Tapi biaya ketidakjelasan jauh lebih mahal: proyek mangkrak, fitur yang tak terpakai, dan budget yang terbakar sia-sia.</p>
    `,
  },
  {
    title: "Masa Depan Web Architecture",
    excerpt:
      "Evolusi dari monolitik ke microservices dan kembalinya tren monolitik modern.",
    date: "01 Jan 2026",
    category: "Tech",
    slug: "future-web",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p class="mb-6">Siklus tren teknologi itu berputar. Dulu kita semua membangun Monolith. Lalu Microservices dianggap sebagai solusi segala masalah (silver bullet). Sekarang? Kita melihat kebangkitan "Modular Monolith".</p>
      
      <h3 class="text-2xl font-creato font-bold mb-4 mt-8">Complexity Tax</h3>
      <p class="mb-6">Microservices membawa overhead operasional yang masif. Network latency, data consistency, deployment complexity—semua adalah "pajak" yang harus dibayar. Untuk banyak organisasi, pajak ini terlalu mahal.</p>
      
      <h3 class="text-2xl font-creato font-bold mb-4 mt-8">Hybrid Approaches</h3>
      <p class="mb-6">Masa depan web architecture kemungkinan besar adalah hybrid. Server Components (seperti di Next.js) mengaburkan batas antara frontend dan backend, memungkinkan kita membangun aplikasi yang terasa seperti SPA tapi dengan kesederhanaan mental model server-side rendering tradisional.</p>
    `,
  },
];
