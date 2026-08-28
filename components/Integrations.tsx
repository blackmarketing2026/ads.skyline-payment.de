import { Check } from "lucide-react";

const checks = ["Einfache Datenübergabe", "Weniger manueller Aufwand", "Mehr Zeit fürs Geschäft"];

export function Integrations() {
  return (
    <section className="bg-white py-2">
      <div className="section-shell">
        <div className="dark-panel flex flex-col items-center justify-between gap-7 rounded-xl px-8 py-7 text-white shadow-dark lg:flex-row" data-reveal>
          <h2 className="text-sm font-black uppercase tracking-normal">Kompatibel mit führenden Partnern</h2>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <span className="rounded-sm bg-emerald-500 px-4 py-3 text-sm font-black text-white">DATEV</span>
            <span className="text-3xl font-black"><span className="text-orange-400">lex</span><span className="text-zinc-300">office</span></span>
            <span className="inline-flex items-center gap-2 text-2xl font-semibold"><span className="bg-red-600 px-2 py-1 text-white">▥</span> sevDesk</span>
          </div>
          <ul className="space-y-2 text-sm font-semibold">
            {checks.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gold-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
