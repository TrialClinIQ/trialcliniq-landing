import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { AudienceSections } from "@/components/landing/AudienceSections";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { About } from "@/components/landing/About";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <AudienceSections />
        <WaitlistForm />
        <About />
      </main>
      <Footer />
    </>
  );
}
