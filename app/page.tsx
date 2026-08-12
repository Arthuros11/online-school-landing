import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { ProgramSection } from "@/components/sections/ProgramSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <BenefitsSection />
        <ProgramSection />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
