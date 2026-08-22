"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const features = [
  "Comprehensive health data in one place",
  "AI-powered health summaries and insights",
  "Health trends and analytics over time",
  "Your complete health timeline",
  "Clinical trial opportunities matched to you",
  "Specialist referral recommendations",
];

export function Hero() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "patient", source: "hero" }),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18196948390/vPLFCMHt-LccEKbL_eRD',
          value: 1.0,
          currency: 'USD',
        });
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/gradient-full-light-home.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)] py-20">
          {/* Left column */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              YOUR HEALTH, POWERED BY AI
            </motion.p>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Access Your Comprehensive Health Data with AI Summaries and Insights
            </motion.h1>

            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm md:text-base text-text-muted">
                  <svg className="w-5 h-5 text-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right column - Waitlist form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-border p-8 shadow-xl">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">You&apos;re on the list!</h3>
                  <p className="text-text-muted">We&apos;ll notify you as soon as your health dashboard is ready.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-navy mb-1">Join the Waitlist</h2>
                    <p className="text-sm text-text-muted">Be the first to access your personal health dashboard.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">Something went wrong. Please try again.</div>
                    )}
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                    <Button type="submit" variant="primary" className="w-full" disabled={status === "loading"}>
                      {status === "loading" ? "Submitting..." : "Join Waitlist"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
