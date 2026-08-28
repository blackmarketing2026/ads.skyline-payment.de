import { ArrowRight, Headset, MessageCircle, Settings, UsersRound } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Step = [string, string, string, ComponentType<SVGProps<SVGSVGElement>>];

const steps: Step[] = [
  ["01", "ANFRAGE", "Sie erzählen uns von Ihrem aktuellen Setup und Ihren Anforderungen.", MessageCircle],
  ["02", "BERATUNG", "Wir empfehlen die passende Kombination aus Hard- und Software.", UsersRound],
  ["03", "AKTIVIERUNG", "Wir liefern, richten ein und unterstützen Sie bei der Inbetriebnahme.", Settings],
  ["04", "BETREUUNG", "Ihr persönlicher Ansprechpartner bleibt auch nach der Einrichtung an Ihrer Seite.", Headset],
];

export function CustomerJourney() {
  return (
    <section className="bg-white py-8" id="prozess">
      <div className="section-shell">
        <div className="dark-panel rounded-2xl px-6 py-12 text-center text-white shadow-dark md:px-12">
          <h2 className="font-display text-3xl font-black tracking-normal md:text-4xl">
            IN <span className="text-gold-light">4 SCHRITTEN</span> ZUM ERSTEN BON
          </h2>
          <div className="mt-9 grid gap-7 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {steps.map(([num, title, text, Icon], index) => (
              <div key={num} className="contents">
                <article className="relative rounded-t-full border border-gold/55 px-5 pb-8 pt-14">
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-lg font-black text-white shadow-premium">
                    {num}
                  </div>
                  <Icon className="mx-auto h-12 w-12 text-gold-light" />
                  <h3 className="mt-5 text-sm font-black">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-white/[0.82]">{text}</p>
                </article>
                {index < steps.length - 1 && <ArrowRight className="mx-auto hidden h-10 w-10 self-center text-gold-light lg:block" />}
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/80">* Je nach Verfügbarkeit und Konfiguration.</p>
        </div>
      </div>
    </section>
  );
}
