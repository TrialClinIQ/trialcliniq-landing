"use client";

import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { HowItWorksPatients } from "@/components/landing/HowItWorksPatients";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function PatientsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    condition: "",
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
                  For Patients
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                  Access Breakthrough CNS Therapies
                </h1>
                <p className="text-lg text-text-muted max-w-lg">
                  Be first to access our HIE platform and get matched to CNS
                  clinical trials. Join thousands who are advancing neuroscience
                  research while accessing innovative treatments.
                </p>
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
                        You&apos;re on the Waitlist!
                      </h3>
                      <p className="text-text-muted">
                        We&apos;ll notify you when our HIE platform is ready for
                        you to join.
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-navy">
                            Join the Waitlist
                          </h3>
                          <p className="text-sm text-text-muted">
                            Get early access to our platform
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
                          placeholder="Email Address"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                        <input
                          type="text"
                          value={formData.condition}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              condition: e.target.value,
                            })
                          }
                          placeholder="CNS Research Area (e.g., Alzheimer's)"
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                        <Button
                          type="submit"
                          variant="primary"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Joining..." : "Join Waitlist"}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <HowItWorksPatients />

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
