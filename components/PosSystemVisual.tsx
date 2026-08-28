import Image from "next/image";

export function PosSystemVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative mx-auto ${compact ? "h-[260px] w-full max-w-[460px]" : "h-[360px] w-full max-w-[560px] sm:h-[400px]"}`}>
      <div className="absolute inset-x-[6%] bottom-2 h-10 rounded-full bg-black/15 blur-2xl" aria-hidden="true" />
      <Image
        src="/images/products/hero-pos-bundle.png"
        alt="Skyline Kassensystem mit Bondrucker, Kassenlade und EC-Kartenterminal"
        width={1536}
        height={1024}
        priority
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_35px_45px_rgba(8,11,15,0.25)]"
      />
    </div>
  );
}
