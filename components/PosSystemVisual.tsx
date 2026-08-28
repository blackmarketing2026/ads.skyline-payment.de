import Image from "next/image";

export function PosSystemVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative mx-auto ${compact ? "h-[260px] w-full" : "h-[430px] w-full max-w-[610px]"}`} aria-hidden="true">
      <div className="absolute bottom-8 left-[22%] h-[92px] w-[60%] rounded-md bg-ink shadow-dark">
        <div className="absolute left-1/2 top-5 h-3 w-16 -translate-x-1/2 rounded-full bg-black/55" />
        <div className="absolute bottom-5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border border-white/30" />
      </div>
      <div className="absolute bottom-[104px] left-[43%] h-28 w-16 rounded-sm bg-gradient-to-b from-graphite to-ink shadow-premium" />
      <div className="absolute bottom-[180px] left-[15%] h-[184px] w-[330px] rotate-[-4deg] rounded-[18px] bg-ink p-4 shadow-dark">
        <div className="h-full rounded-[12px] bg-[linear-gradient(135deg,#111827_0%,#24304d_43%,#d79d46_100%)] p-8 text-center text-white">
          <Image src="/brand/skyline-logo-light.svg" width={180} height={69} alt="" className="mx-auto mt-8 opacity-95" />
        </div>
      </div>
      <div className="absolute bottom-[164px] left-[4%] h-[178px] w-[128px] -rotate-[22deg] rounded-[12px] bg-gradient-to-br from-graphite to-black shadow-premium">
        <div className="absolute inset-3 rounded-lg bg-black/60" />
      </div>
      <div className="absolute bottom-[96px] right-[13%] h-[226px] w-[112px] rotate-[6deg] rounded-[22px] bg-black p-3 shadow-dark">
        <div className="rounded-xl bg-gradient-to-b from-[#1e293b] to-[#0f172a] px-2 py-4 text-center text-[10px] font-semibold uppercase text-white">
          <Image src="/brand/skyline-logo-light.svg" width={72} height={28} alt="" className="mx-auto mb-3 opacity-90" />
          <div className="mx-auto h-10 w-16 rounded bg-white/10" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className={`h-5 rounded ${index === 9 ? "bg-red-500" : index === 11 ? "bg-green-500" : "bg-zinc-700"}`} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-[8%] h-[112px] w-[130px] rounded-md bg-[#0f1115] p-3 shadow-premium">
        <div className="absolute -top-12 left-8 h-16 w-20 rounded-sm bg-white shadow-md">
          <div className="mx-3 mt-3 h-1 bg-zinc-300" />
          <div className="mx-3 mt-2 h-1 bg-zinc-300" />
          <div className="mx-3 mt-2 h-1 bg-zinc-300" />
        </div>
        <div className="mt-7 h-8 rounded bg-black/60" />
        <Image src="/brand/skyline-logo-light.svg" width={60} height={24} alt="" className="mt-4 opacity-60" />
      </div>
      <div className="absolute bottom-[76px] left-[18%] h-4 w-[66%] rounded-full bg-black/20 blur-xl" />
    </div>
  );
}
