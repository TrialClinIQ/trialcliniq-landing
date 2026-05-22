"use client";

import { useState } from "react";
import Link from "next/link";
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
    phone: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Get reCAPTCHA token (optional - proceed without if not loaded)
      let recaptchaToken = "";
      if (typeof window !== "undefined" && window.grecaptcha?.enterprise) {
        try {
          recaptchaToken = await new Promise<string>((resolve) => {
            window.grecaptcha.enterprise.ready(async () => {
              const token = await window.grecaptcha.enterprise.execute(
                "6LcYfvcsAAAAAJ8qpmFJYz9tj4YV_e1XV_GttCZF",
                { action: "SUBMIT_FORM" }
              );
              resolve(token);
            });
          });
        } catch {
          // Continue without reCAPTCHA if it fails
          console.warn("reCAPTCHA not available");
        }
      }

      const response = await fetch("/api/pipedrive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          newsletter: formData.newsletter,
          source: "patients",
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
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
                <p className="text-lg text-text-muted max-w-lg mb-8">
                  Be first to access our HIE platform and get matched to CNS
                  clinical trials. Join thousands who are advancing neuroscience
                  research while accessing innovative treatments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() =>
                      document
                        .querySelector('form')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Join Waitlist
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      document
                        .querySelector('.how-it-works')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    How It Works
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
                        {error && (
                          <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                            {error}
                          </div>
                        )}
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
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Phone Number (optional)"
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        />
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.newsletter}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                newsletter: e.target.checked,
                              })
                            }
                            className="mt-1 w-4 h-4 rounded border-border text-navy focus:ring-navy/20"
                          />
                          <span className="text-sm text-text-muted">
                            Subscribe to our newsletter for CNS trial insights and updates
                          </span>
                        </label>
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
