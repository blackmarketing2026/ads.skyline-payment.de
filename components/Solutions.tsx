import { AccountingMini, PosMini, ReportingMini, ServiceMini, TerminalMini } from "./ProductIllustrations";

type Solution = [string, string, () => JSX.Element];

const solutions: Solution[] = [
  ["KASSENSYSTEME", "Stationär oder mobil - für jede Branche und jede Betriebsgröße.", PosMini],
  ["PAYMENT", "EC, Karte & mobil zahlen - sicher, schnell und zu Top-Konditionen.", TerminalMini],
  ["REPORTING", "Umsätze, Berichte & Insights - immer den Überblick behalten.", ReportingMini],
  ["BUCHHALTUNG", "Kompatibel mit DATEV, lexoffice & sevDesk - einfach übergeben.", AccountingMini],
  ["SERVICE & SCHULUNG", "Einrichtung, Schulung & persönliche Betreuung - deutschlandweit.", ServiceMini],
];

export function Solutions() {
  return (
    <section className="bg-white py-12" id="loesungen">
      <div className="section-shell">
        <h2 className="text-center text-3xl font-black tracking-normal text-ink">
          LÖSUNGEN FÜR <span className="text-gold">GASTRONOMIE & EINZELHANDEL</span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map(([title, text, Visual]) => (
            <article key={title} className="card-line rounded-lg border border-zinc-200 p-5 text-center shadow-premium transition hover:-translate-y-1 hover:shadow-dark">
              <Visual />
              <h3 className="mt-4 text-sm font-black text-ink">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-700">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
