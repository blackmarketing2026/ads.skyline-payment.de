import { Mail, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { contactLinks } from "@/lib/contact";
import { CrownIcon, WhatsAppIcon } from "./Icons";
import { ContactForm } from "./ContactForm";

type ContactCard = [string, string, string, string, ComponentType<SVGProps<SVGSVGElement>>];

const cards: ContactCard[] = [
  ["WHATSAPP", "Schreiben Sie uns direkt über WhatsApp.", "Jetzt chatten", contactLinks.whatsapp, WhatsAppIcon],
  ["TELEFON", "Rufen Sie uns direkt an - wir sind für Sie da.", "Jetzt anrufen", contactLinks.phone, Phone],
  ["KONTAKTFORMULAR", "Nehmen Sie Kontakt über unser Formular auf.", "Zum Formular", "#formular", Mail],
];

export function ContactSection() {
  return (
    <section className="bg-white py-12 pb-24 md:pb-14" id="kontakt">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.65fr]">
          <div className="dark-panel rounded-xl p-9 text-white shadow-dark" data-reveal>
            <CrownIcon className="h-11 w-11 text-gold-light" />
            <h2 className="font-display mt-6 text-4xl font-black leading-tight">
              LASSEN SIE UNS
              <br />
              INS GESPRÄCH KOMMEN.
            </h2>
            <p className="mt-5 max-w-md font-medium leading-relaxed text-white/[0.88]">
              Wir finden die passende Lösung für Ihren Betrieb - transparent, fair und auf Augenhöhe.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map(([title, text, button, href, Icon]) => (
              <article key={title} className="hover-lift rounded-lg border border-zinc-200 bg-white p-6 text-center shadow-premium hover:border-gold/40 hover:shadow-lift" data-reveal>
                <Icon className="mx-auto h-9 w-9 text-gold" />
                <h3 className="mt-5 text-sm font-black text-ink">{title}</h3>
                <p className="mt-5 min-h-[58px] text-sm font-medium leading-relaxed text-zinc-700">{text}</p>
                <a href={href} className="gold-button mt-5 inline-flex min-h-11 items-center justify-center rounded-md px-7 text-sm font-extrabold text-white">
                  {button}
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
