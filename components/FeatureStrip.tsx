import { CardPayIcon, HandshakeIcon, PersonLineIcon } from "./Icons";

const items = [
  {
    title: "BESTPREIS-VERSPRECHEN",
    text: "Du hast ein Konkurrenzangebot? Wir prüfen es transparent und finden die beste Lösung für dich.",
    icon: HandshakeIcon,
  },
  {
    title: "DISAGIO AB 0,23 %",
    text: "Faire und transparente Konditionen für Ihre Kartenzahlungen.",
    icon: CardPayIcon,
  },
  {
    title: "DIREKTDURCHWAHL STATT HOTLINE",
    text: "Ihr persönlicher Ansprechpartner kennt Ihr System und ist für Sie da.",
    icon: PersonLineIcon,
  },
];

export function FeatureStrip() {
  return (
    <section className="-mt-1 bg-white py-8" id="funktionen">
      <div className="section-shell">
        <div className="dark-panel grid gap-6 rounded-2xl px-7 py-7 text-white shadow-dark md:grid-cols-3 lg:px-10" data-reveal>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`group flex gap-5 ${index > 0 ? "md:border-l md:border-white/20 md:pl-8" : ""}`}>
                <Icon className="h-14 w-14 shrink-0 text-gold-light transition duration-300 group-hover:scale-110 group-hover:text-gold" />
                <div>
                  <h2 className="text-base font-black text-gold-light">{item.title}</h2>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white/90">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
