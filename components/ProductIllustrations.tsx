import { ChartIcon, PrinterIcon } from "./Icons";
import { ReportingVisual } from "./ReportingVisual";

export function PosMini() {
  return (
    <div className="relative h-40" aria-hidden="true">
      <div className="absolute bottom-7 left-1/2 h-16 w-28 -translate-x-1/2 rounded bg-ink shadow-premium" />
      <div className="absolute bottom-[84px] left-1/2 h-16 w-28 -translate-x-1/2 rotate-[-4deg] rounded-md bg-black p-2 shadow-premium">
        <div className="h-full rounded bg-gradient-to-br from-zinc-800 via-[#1c2637] to-gold" />
      </div>
      <div className="absolute bottom-6 left-1/2 h-10 w-8 -translate-x-1/2 bg-graphite" />
      <div className="absolute bottom-0 left-1/2 h-9 w-36 -translate-x-1/2 rounded bg-ink" />
    </div>
  );
}

export function TerminalMini() {
  return (
    <div className="relative mx-auto h-40 w-28 rotate-[-8deg] rounded-2xl bg-black p-3 shadow-premium" aria-hidden="true">
      <div className="h-16 rounded-lg bg-gradient-to-b from-[#22304a] to-[#0f172a]" />
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} className={`h-4 rounded ${index === 9 ? "bg-red-500" : index === 11 ? "bg-green-500" : "bg-zinc-700"}`} />
        ))}
      </div>
      <div className="absolute -bottom-3 left-3 h-7 w-16 -rotate-12 rounded bg-[#2f74bd]" />
    </div>
  );
}

export function AccountingMini() {
  return (
    <div className="relative h-40" aria-hidden="true">
      <div className="absolute bottom-4 left-1/2 h-24 w-40 -translate-x-1/2 rounded-md bg-black p-2 shadow-premium">
        <div className="h-full rounded bg-white p-3">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="h-3 rounded bg-emerald-500/35" />
            ))}
          </div>
          <div className="mt-4 h-2 rounded bg-zinc-200" />
          <div className="mt-2 h-2 w-3/4 rounded bg-zinc-200" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-4 w-48 -translate-x-1/2 rounded-full bg-black/20 blur-lg" />
    </div>
  );
}

export function ServiceMini() {
  return (
    <div className="flex h-40 items-center justify-center" aria-hidden="true">
      <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-zinc-100 to-white shadow-premium">
        <div className="absolute left-8 top-5 h-12 w-12 rounded-full bg-zinc-200" />
        <div className="absolute bottom-5 left-5 h-8 w-[72px] rounded-full bg-ink" />
        <div className="absolute right-5 top-10 h-10 w-7 rounded-r-full border-4 border-gold border-l-0" />
        <div className="absolute bottom-9 right-4 h-3 w-9 rounded bg-gold" />
      </div>
    </div>
  );
}

export function DrawerPrinterMini() {
  return (
    <div className="relative flex h-40 items-center justify-center" aria-hidden="true">
      <div className="absolute bottom-4 h-16 w-44 rounded bg-ink shadow-premium">
        <div className="mx-auto mt-6 h-2 w-20 rounded bg-black" />
      </div>
      <div className="absolute bottom-16 left-1/2 h-16 w-24 -translate-x-1/2 rounded bg-graphite p-3">
        <PrinterIcon className="mx-auto h-10 w-10 text-gold" />
      </div>
    </div>
  );
}

export function ReportingMini() {
  return (
    <div className="flex h-40 items-center justify-center" aria-hidden="true">
      <div className="w-full max-w-[230px] rotate-[-2deg]">
        <ReportingVisual />
      </div>
    </div>
  );
}

export function ChartBadge() {
  return <ChartIcon className="h-10 w-10 text-gold" />;
}
