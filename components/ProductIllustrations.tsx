import Image from "next/image";
import { ReportingVisual } from "./ReportingVisual";

export function PosMini() {
  return (
    <div className="relative flex h-40 items-end justify-center" aria-hidden="true">
      <Image src="/products/terminal.png" alt="" width={490} height={460} className="h-full w-auto object-contain" />
    </div>
  );
}

export function TerminalMini() {
  return (
    <div className="relative flex h-40 items-end justify-center" aria-hidden="true">
      <Image src="/products/card-reader.png" alt="" width={200} height={240} className="h-full w-auto object-contain" />
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
      <img src="/icons/headset.svg" alt="" className="h-20 w-20" />
    </div>
  );
}

export function DrawerPrinterMini() {
  return (
    <div className="relative flex h-40 items-end justify-center gap-2" aria-hidden="true">
      <Image src="/products/printer.png" alt="" width={170} height={150} className="h-[70%] w-auto object-contain" />
      <Image src="/products/cash-drawer.png" alt="" width={190} height={150} className="h-[70%] w-auto object-contain" />
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
  return <img src="/icons/chart.svg" alt="" className="h-10 w-10" />;
}
