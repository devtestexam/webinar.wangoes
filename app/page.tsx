import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { WhoIsItForSection } from "@/components/sections/WhoIsItForSection";
import { HostSection } from "@/components/sections/HostSection";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { StickyCtaButton } from "@/components/shared/StickyCtaButton";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CredibilityBar />
      <ProblemSection />
      <LearnSection />
      <WhoIsItForSection />
      <HostSection />
      <RegistrationForm />
      <FaqSection />
      <Footer />
      <StickyCtaButton />
    </main>
  );
}
