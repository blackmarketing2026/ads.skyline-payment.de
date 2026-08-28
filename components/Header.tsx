"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { contactLinks } from "@/lib/contact";
import { WhatsAppIcon } from "./Icons";

const nav = [
  ["Kassensysteme", "#kassensysteme"],
  ["Funktionen", "#funktionen"],
  ["Für wen?", "#loesungen"],
  ["Über uns", "#prozess"],
  ["Kontakt", "#kontakt"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink shadow-[0_8px_28px_rgba(0,0,0,0.35)]">
      <div className="section-shell flex h-[86px] items-center justify-between gap-6 lg:h-[104px]">
        <Link href="#" aria-label="Skyline Payments Startseite" className="shrink-0">
          <Image src="/images/brand/skyline-logo-light.svg" width={190} height={73} alt="Skyline Payment" priority />
        </Link>
        <nav className="hidden items-center gap-12 text-sm font-extrabold text-white lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-gold-light">
              {label}
            </Link>
          ))}
        </nav>
        <a href={contactLinks.whatsapp} className="gold-button hidden min-h-12 items-center gap-2 rounded-lg px-6 text-sm font-extrabold text-white shadow-premium transition hover:scale-[1.02] lg:flex">
          <WhatsAppIcon className="h-5 w-5" />
          Jetzt anfragen
        </a>
        <button className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Navigation öffnen">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink px-4 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-sm flex-col gap-1 py-3">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-bold text-white hover:bg-white/[0.08]">
                {label}
              </Link>
            ))}
            <a href={contactLinks.whatsapp} className="gold-button mt-2 flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 font-extrabold text-white">
              <WhatsAppIcon className="h-5 w-5" />
              Jetzt anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
