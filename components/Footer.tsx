import Image from "next/image";
import Link from "next/link";
import { MapPin, UserRound } from "lucide-react";

const links = [
  ["Kassensysteme", "#kassensysteme"],
  ["Funktionen", "#funktionen"],
  ["Kontakt", "#kontakt"],
  ["Impressum", "#"],
  ["Datenschutz", "#"],
];

export function Footer() {
  return (
    <footer className="bg-ink py-8 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[220px_1fr_1fr] md:items-center">
        <Image src="/brand/skyline-logo-light.svg" width={180} height={69} alt="Skyline Payment" />
        <div>
          <p className="font-black">Kassensysteme. Payment. Service.</p>
          <p className="mt-2 font-medium text-white/[0.85]">Vom Tisch bis zur Theke. Tap. Pay. Done.</p>
          <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-white/72">
            {links.map(([label, href]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="grid gap-4 text-sm font-bold md:justify-end">
          <span className="flex items-center gap-3"><MapPin className="h-6 w-6 text-gold-light" />Deutschlandweit für Sie da</span>
          <span className="flex items-center gap-3"><UserRound className="h-6 w-6 text-gold-light" />Persönlicher Ansprechpartner</span>
        </div>
      </div>
    </footer>
  );
}
