import { Mail, Phone } from "lucide-react";
import { contactLinks } from "@/lib/contact";
import { HeroBenefits } from "./HeroBenefits";
import { WhatsAppIcon } from "./Icons";
import { PosSystemVisual } from "./PosSystemVisual";

export function Hero() {
  return (
    <section className="hero-backdrop border-b border-line pb-10 pt-8 md:pt-10" id="kassensysteme">
      <div className="mesh-blob left-[-6%] top-[6%] h-72 w-72 bg-gold/25 animate-float" />
      <div className="mesh-blob right-[8%] top-[42%] h-64 w-64 bg-gold-light/20 animate-float [animation-delay:-3s]" />
      <div className="section-shell relative grid items-start gap-x-8 gap-y-10 lg:grid-cols-[1fr_1.18fr_0.62fr] lg:gap-4">
        <div className="relative z-10 lg:pt-4" data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Tap. Pay. Done.
          </span>
          <h1 className="font-display mt-4 text-[32px] font-black leading-[1.1] text-ink sm:text-[42px] lg:text-[46px]">
            Kassensysteme, Payment &amp; Service
            <span className="text-gradient-gold"> vom Tisch bis zur Theke.</span>
          </h1>
          <p className="mt-5 max-w-[480px] text-base font-medium leading-relaxed text-ink/75 sm:text-lg">
            Moderne Kassensysteme & Payment-Lösungen für Gastronomie und Einzelhandel - schnell, transparent und persönlich.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={contactLinks.whatsapp} className="gold-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-extrabold text-white">
              <WhatsAppIcon className="h-5 w-5" />
              Per WhatsApp anfragen
            </a>
            <a href={contactLinks.phone} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 text-sm font-extrabold text-white shadow-premium transition duration-300 hover:-translate-y-0.5 hover:shadow-lift">
              <Phone className="h-5 w-5" />
              Jetzt anrufen
            </a>
            <a href="#formular" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-ink/25 bg-white px-6 text-sm font-extrabold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold hover:shadow-soft">
              <Mail className="h-5 w-5" />
              Kontaktformular öffnen
            </a>
          </div>
        </div>
        <div className="order-last lg:order-none lg:self-center" data-reveal>
          <PosSystemVisual />
        </div>
        <HeroBenefits />
      </div>
    </section>
  );
}
