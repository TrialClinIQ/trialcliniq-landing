"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

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
          email: email,
          newsletter: true,
          source: "newsletter",
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to subscribe");
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-off-white">
      <Container>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Newsletter
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                  Stay Updated on CNS Research
                </h2>
                <p className="text-text-muted">
                  Get weekly insights on clinical trial innovations and neuroscience breakthroughs.
                </p>
              </div>

              {/* Right - Form */}
              <div>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-6 h-6 text-green-600"
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
                    <p className="font-medium text-green-800">
                      Thank you for subscribing!
                    </p>
                    <p className="text-green-600 text-sm mt-1">
                      You&apos;ll receive our next newsletter soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {error && (
                      <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                        {error}
                      </div>
                    )}
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-colors"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                    <p className="text-xs text-text-muted text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
