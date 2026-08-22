import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { AudienceSections } from "@/components/landing/AudienceSections";
import { Solutions } from "@/components/landing/Solutions";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CTA } from "@/components/landing/CTA";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";
import { CookieBanner } from "@/components/landing/CookieBanner";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <AudienceSections />
        <Solutions />
        <HowItWorks />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
