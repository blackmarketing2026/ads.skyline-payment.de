"use client";

import { Phone } from "lucide-react";
import { contactLinks } from "@/lib/contact";
import { WhatsAppIcon } from "./Icons";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-ink p-3 shadow-dark md:hidden">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-3">
        <a href={contactLinks.whatsapp} className="gold-button flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-extrabold text-white">
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
        <a href={contactLinks.phone} className="flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white text-sm font-extrabold text-ink">
          <Phone className="h-5 w-5" />
          Anrufen
        </a>
      </div>
    </div>
  );
}
