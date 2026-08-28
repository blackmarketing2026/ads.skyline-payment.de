import { Check } from "lucide-react";

const benefits = [
  "KEINE MONATLICHEN\nSOFTWARE-LIZENZKOSTEN",
  "TSE 5 JAHRE\nINKLUSIVE",
  "KARTENZAHLUNG\nAB 0,23 % DISAGIO",
  "DEUTSCHLANDWEIT\nLIEFERBAR & BETREUT",
  "VIELE SYSTEME INNERHALB\nVON 48 STUNDEN\nEINSATZBEREIT*",
  "PERSÖNLICHER\nANSPRECHPARTNER\nSTATT HOTLINE",
];

export function HeroBenefits() {
  return (
    <aside className="space-y-4 lg:pt-4" data-reveal>
      {benefits.map((item) => (
        <div key={item} className="group flex gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white shadow-soft transition duration-300 group-hover:bg-gold group-hover:shadow-glow">
            <Check className="h-3.5 w-3.5" />
          </span>
          <p className="whitespace-pre-line text-[13px] font-black leading-snug tracking-normal text-ink">{item}</p>
        </div>
      ))}
      <p className="pt-1 text-xs font-medium text-zinc-500">* Je nach Verfügbarkeit und Konfiguration.</p>
    </aside>
  );
}
