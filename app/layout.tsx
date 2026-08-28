import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Kassensysteme & Payment für Gastronomie und Einzelhandel | Skyline Payments",
  description:
    "Moderne Kassensysteme ohne monatliche Software-Lizenzkosten. 5 Jahre TSE inklusive, Kartenzahlung ab 0,23 % Disagio und persönliche Betreuung deutschlandweit.",
  openGraph: {
    title: "Skyline Payments",
    description:
      "Kassensysteme, Payment und Service fuer Gastronomie und Einzelhandel.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
