import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
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
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
