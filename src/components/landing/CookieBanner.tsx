"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze
                    site traffic, and personalize content. By clicking "Accept
                    All", you consent to our use of cookies.{" "}
                    <a
                      href="/privacy"
                      className="text-orange hover:text-orange-dark underline"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-2.5 rounded-xl border border-border bg-white text-navy font-medium hover:bg-surface transition-colors text-sm"
                  >
                    Decline
                  </button>
                  <Button
                    onClick={handleAccept}
                    variant="primary"
                    className="px-6 text-sm"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
