import { Mail, Phone } from "lucide-react";
import { contactLinks } from "@/lib/contact";
import { HeroBenefits } from "./HeroBenefits";
import { WhatsAppIcon } from "./Icons";
import { PosSystemVisual } from "./PosSystemVisual";

export function Hero() {
  return (
    <section className="hero-backdrop border-b border-line pt-10 md:pt-14" id="kassensysteme">
      <div className="mesh-blob left-[-6%] top-[6%] h-72 w-72 bg-gold/25 animate-float" />
      <div className="mesh-blob right-[8%] top-[42%] h-64 w-64 bg-gold-light/20 animate-float [animation-delay:-3s]" />
      <div className="section-shell relative grid min-h-[650px] items-center gap-8 pb-8 lg:grid-cols-[1.02fr_1.32fr_0.76fr] lg:gap-4">
        <div className="relative z-10" data-reveal>
          <h1 className="font-display text-[44px] font-black leading-[1.08] text-ink sm:text-6xl lg:text-[61px]">
            KASSENSYSTEME.
            <br />
            PAYMENT. SERVICE.
            <br />
            <span className="text-gradient-gold">VOM TISCH BIS</span>
            <br />
            <span className="text-gradient-gold">ZUR THEKE.</span>
            <br />
            TAP. PAY. DONE.
          </h1>
          <p className="mt-8 max-w-[520px] text-lg font-medium leading-relaxed text-ink/86">
            Moderne Kassensysteme & Payment-Lösungen für Gastronomie und Einzelhandel - schnell, transparent und persönlich.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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
        <div className="order-last lg:order-none" data-reveal>
          <PosSystemVisual />
        </div>
        <HeroBenefits />
      </div>
    </section>
  );
}
