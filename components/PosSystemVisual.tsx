import Image from "next/image";

export function PosSystemVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative mx-auto ${compact ? "h-[260px] w-full max-w-[420px]" : "h-[430px] w-full max-w-[610px]"}`} aria-hidden="true">
      <div className="absolute bottom-2 left-[2%] h-8 w-[70%] rounded-full bg-black/15 blur-xl" />
      <Image
        src="/products/terminal.png"
        alt=""
        width={490}
        height={460}
        priority
        className="absolute bottom-0 left-0 h-[92%] w-auto object-contain drop-shadow-[0_30px_40px_rgba(8,11,15,0.28)]"
      />
      <Image
        src="/products/card-reader.png"
        alt=""
        width={200}
        height={240}
        className="absolute bottom-0 right-[2%] h-[58%] w-auto object-contain drop-shadow-[0_20px_30px_rgba(8,11,15,0.28)]"
      />
    </div>
  );
}
