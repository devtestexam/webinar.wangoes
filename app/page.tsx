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
      {/* Announcement banner — sits below fixed navbar (mt-16 = navbar height) */}
      <div className="mt-16 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] overflow-hidden py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-8 text-white text-xs sm:text-sm font-semibold tracking-wide">
              <span>🎁</span>
              <span>FREE E-BOOK: &quot;How to Install an AI OS in Your Business&quot; — Exclusively for All Attendees</span>
              <span className="opacity-50">✦</span>
              <span>Register Now to Claim Your Free Copy</span>
              <span className="opacity-50">✦</span>
            </span>
          ))}
        </div>
      </div>
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
