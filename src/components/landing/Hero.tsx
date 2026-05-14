"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop",
    alt: "Medical professional",
    position: "top-32 left-8 md:left-16",
    size: "w-24 h-24 md:w-32 md:h-32",
    delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop",
    alt: "Doctor with patient",
    position: "top-24 right-8 md:right-20",
    size: "w-28 h-28 md:w-36 md:h-36",
    delay: 0.2,
  },
  {
    src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=200&h=200&fit=crop",
    alt: "Clinical research",
    position: "bottom-48 right-4 md:right-24",
    size: "w-32 h-32 md:w-44 md:h-44",
    delay: 0.4,
  },
  {
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=200&h=200&fit=crop",
    alt: "Medical technology",
    position: "bottom-60 left-4 md:left-12",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0.6,
  },
];

const trustLogos = [
  "Cleveland Clinic",
  "Mayo Clinic",
  "Johns Hopkins",
  "Stanford Health",
  "UCSF Health",
  "Mass General",
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-white via-off-white to-surface">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating circular images */}
      {floatingImages.map((img, index) => (
        <motion.div
          key={index}
          className={`absolute ${img.position} ${img.size} hidden md:block`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: img.delay + 0.5, duration: 0.8 }}
        >
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </motion.div>
      ))}

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center py-20">
          {/* Label */}
          <motion.p
            className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-muted mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI-Powered Clinical Trial Platform
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Connect Patients,{" "}
            <span className="text-accent italic">Advance Research.</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            >
              Try Kinikan
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-base md:text-lg text-text-muted max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Bridge the gap between underserved communities and life-changing clinical trials — all through one intelligent, HIPAA-compliant platform.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="Scroll down"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </button>
          </motion.div>
        </div>
      </Container>

      {/* Trust bar with animated marquee */}
      <div className="relative z-10 pb-12">
        <Container>
          <motion.p
            className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Trusted By Leading Health Organizations
          </motion.p>
        </Container>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <span className="text-primary/40 font-semibold text-sm md:text-base whitespace-nowrap tracking-wide">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
