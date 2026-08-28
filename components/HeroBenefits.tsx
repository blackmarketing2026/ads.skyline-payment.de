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
    <aside className="space-y-6">
      {benefits.map((item) => (
        <div key={item} className="flex gap-4">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">
            <Check className="h-4 w-4" />
          </span>
          <p className="whitespace-pre-line text-sm font-black leading-snug tracking-normal text-ink lg:text-[15px]">{item}</p>
        </div>
      ))}
      <p className="text-xs font-medium text-zinc-500">* Je nach Verfügbarkeit und Konfiguration.</p>
    </aside>
  );
}
