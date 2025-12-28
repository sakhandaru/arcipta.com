import { useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

const ImageComparison = () => {
  const [inset, setInset] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  return (
    <div
      className="relative w-full h-full aspect-video overflow-hidden rounded-2xl select-none cursor-ew-resize border border-neutral-200 dark:border-neutral-800"
      onMouseMove={onMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={onMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Handle Line & Button */}
      <div
        className="absolute z-30 top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm pointer-events-none"
        style={{ left: `${inset}%`, transform: "translateX(-50%)" }}
      >
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-neutral-900 rounded-full shadow-xl flex items-center justify-center border border-neutral-200 dark:border-neutral-700 hover:scale-110 transition-transform pointer-events-auto"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <GripVertical className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
        </button>
      </div>

      {/* Top Image (The one being clipped) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - inset}% 0 0)` }}
      >
        <Image
          src="/image/mockups/kiri.png" // Ganti dengan gambar 'After'
          alt="After"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bottom Image (The background) */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/image/mockups/kanan.png" // Ganti dengan gambar 'Before'
          alt="Before"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageComparison;
