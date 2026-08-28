type Benefit = [string, string, string];

const benefits: Benefit[] = [
  ["KEINE MONATLICHEN\nSOFTWARE-KOSTEN", "Einmal kaufen, dauerhaft nutzen.", "/images/icons/calendar-clock.svg"],
  ["TSE 5 JAHRE\nINKLUSIVE", "Technische Sicherheit für die volle 5-Jahres-Lebensdauer.", "/images/icons/shield-check.svg"],
  ["KARTENZAHLUNG\nAB 0,23 % DISAGIO", "Transparente Sätze und faire Konditionen.", "/images/icons/percent.svg"],
  ["SCHNELLE LIEFERUNG\n& AKTIVIERUNG", "Viele Systeme innerhalb von 48 Stunden einsatzbereit.*", "/images/icons/truck.svg"],
  ["DEUTSCHLANDWEIT\nLIEFERBAR & BETREUT", "Deutschlandweit lieferbar und betreut.", "/images/icons/germany.svg"],
  ["PERSÖNLICHER\nANSPRECHPARTNER", "Direktdurchwahl statt anonymer Hotline.", "/images/icons/user.svg"],
];

export function Benefits() {
  return (
    <section className="bg-white py-12">
      <div className="section-shell text-center">
        <h2 className="font-display text-3xl font-black tracking-normal text-ink" data-reveal>
          IHRE VORTEILE MIT <span className="text-gradient-gold">SKYLINE PAYMENTS</span>
        </h2>
        <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {benefits.map(([title, text, icon], index) => (
            <div key={title} className={`group px-5 ${index > 0 ? "lg:border-l lg:border-zinc-200" : ""}`} data-reveal>
              <img src={icon} alt="" className="mx-auto h-14 w-14 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
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
