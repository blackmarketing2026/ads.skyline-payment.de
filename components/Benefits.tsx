import { CalendarClock, CheckCircle2, Percent, Truck, UserRound } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GermanyIcon } from "./Icons";

type Benefit = [string, string, ComponentType<SVGProps<SVGSVGElement>>];

const benefits: Benefit[] = [
  ["KEINE MONATLICHEN\nSOFTWARE-KOSTEN", "Einmal kaufen, dauerhaft nutzen.", CalendarClock],
  ["TSE 5 JAHRE\nINKLUSIVE", "Technische Sicherheit für die volle 5-Jahres-Lebensdauer.", CheckCircle2],
  ["KARTENZAHLUNG\nAB 0,23 % DISAGIO", "Transparente Sätze und faire Konditionen.", Percent],
  ["SCHNELLE LIEFERUNG\n& AKTIVIERUNG", "Viele Systeme innerhalb von 48 Stunden einsatzbereit.*", Truck],
  ["DEUTSCHLANDWEIT\nLIEFERBAR & BETREUT", "Deutschlandweit lieferbar und betreut.", GermanyIcon],
  ["PERSÖNLICHER\nANSPRECHPARTNER", "Direktdurchwahl statt anonymer Hotline.", UserRound],
];

export function Benefits() {
  return (
    <section className="bg-white py-12">
      <div className="section-shell text-center">
        <h2 className="text-3xl font-black tracking-normal text-ink">
          IHRE VORTEILE MIT <span className="text-gold">SKYLINE PAYMENTS</span>
        </h2>
        <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {benefits.map(([title, text, Icon], index) => (
            <div key={title} className={`px-5 ${index > 0 ? "lg:border-l lg:border-zinc-200" : ""}`}>
              <Icon className="mx-auto h-14 w-14 text-ink" />
              <h3 className="mt-5 whitespace-pre-line text-sm font-black leading-snug text-ink">{title}</h3>
              <p className="mx-auto mt-3 max-w-[180px] text-xs font-medium leading-relaxed text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-9 text-xs text-zinc-500">* Je nach Verfügbarkeit und Konfiguration.</p>
      </div>
    </section>
  );
}
