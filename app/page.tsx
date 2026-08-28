import { Benefits } from "@/components/Benefits";
import { ContactSection } from "@/components/ContactSection";
import { CustomerJourney } from "@/components/CustomerJourney";
import { FeatureStrip } from "@/components/FeatureStrip";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { MobileCTA } from "@/components/MobileCTA";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <Benefits />
        <CustomerJourney />
        <Solutions />
        <Integrations />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
