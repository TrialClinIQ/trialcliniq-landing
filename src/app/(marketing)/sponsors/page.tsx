"use client";

import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { WhyPartner } from "@/components/landing/WhyPartner";
import { HowWeDoItSponsors } from "@/components/landing/HowWeDoItSponsors";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function SponsorsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section with Form */}
        <section className="py-16 md:py-24 bg-off-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-medium mb-6">
                  For Sponsors & CROs
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                  Accelerate Your CNS Trial Enrollment
                </h1>
                <p className="text-lg text-text-muted max-w-lg mb-8">
                  See how TrialClinIQ accelerates CNS trial enrollment with
                  pre-screened, consent-ready candidates. Partner with us to
                  reduce timelines and improve patient quality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg">
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl border border-border p-8 shadow-card">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-2">
                        Thank You!
                      </h3>
                      <p className="text-text-muted">
                        Our team will reach out to schedule your demo call
                        shortly.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-navy"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-navy">
                            Book a Demo Call
                          </h3>
                          <p className="text-sm text-text-muted">
                            See our platform in action
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your Name"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Work Email"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organization: e.target.value,
                            })
                          }
                          placeholder="Organization"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                        <Button
                          type="submit"
                          variant="primary"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Book Demo Call"}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Why Partner With Us */}
        <WhyPartner />

        {/* How We Do It */}
        <HowWeDoItSponsors />

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
