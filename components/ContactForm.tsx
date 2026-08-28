"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
      setMessage("Danke, Ihre Anfrage wurde vorbereitet. Wir melden uns zeitnah.");
      return;
    }

    const result = await response.json().catch(() => null);
    setStatus("error");
    setMessage(result?.error ?? "Bitte prüfen Sie Ihre Angaben.");
  }

  return (
    <form id="formular" onSubmit={onSubmit} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-premium md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-bold text-ink">
          Name *
          <input name="name" required className="mt-2 h-12 w-full rounded-md border border-zinc-300 px-4 outline-none focus:border-gold" />
        </label>
        <label className="text-sm font-bold text-ink">
          Unternehmen
          <input name="company" className="mt-2 h-12 w-full rounded-md border border-zinc-300 px-4 outline-none focus:border-gold" />
        </label>
        <label className="text-sm font-bold text-ink">
          Telefon *
          <input name="phone" required className="mt-2 h-12 w-full rounded-md border border-zinc-300 px-4 outline-none focus:border-gold" />
        </label>
        <label className="text-sm font-bold text-ink">
          E-Mail *
          <input name="email" type="email" required className="mt-2 h-12 w-full rounded-md border border-zinc-300 px-4 outline-none focus:border-gold" />
        </label>
        <label className="text-sm font-bold text-ink md:col-span-2">
          Branche
          <select name="industry" className="mt-2 h-12 w-full rounded-md border border-zinc-300 bg-white px-4 outline-none focus:border-gold" defaultValue="Gastronomie">
            <option>Gastronomie</option>
            <option>Einzelhandel</option>
            <option>Sonstiges</option>
          </select>
        </label>
        <label className="text-sm font-bold text-ink md:col-span-2">
          Worum geht es?
          <textarea name="message" rows={5} className="mt-2 w-full rounded-md border border-zinc-300 px-4 py-3 outline-none focus:border-gold" />
        </label>
      </div>
      <label className="mt-5 flex gap-3 text-sm font-medium leading-relaxed text-zinc-700">
        <input name="privacy" value="accepted" required type="checkbox" className="mt-1 h-4 w-4 accent-gold" />
        Ich stimme zu, dass meine Angaben zur Kontaktaufnahme verarbeitet werden.
      </label>
      <button type="submit" disabled={status === "sending"} className="gold-button mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 font-extrabold text-white transition hover:scale-[1.01] disabled:opacity-70 md:w-auto">
        <Send className="h-5 w-5" />
        {status === "sending" ? "Wird gesendet..." : "Kostenlos beraten lassen"}
      </button>
      {message && <p className={`mt-4 text-sm font-bold ${status === "success" ? "text-emerald-700" : "text-red-700"}`}>{message}</p>}
    </form>
  );
}
