"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const blobImages = [
//   {
//     src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop",
//     alt: "Clinical trial participant",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop",
//     alt: "Medical professional",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=600&fit=crop",
//     alt: "Healthcare technology",
//   },
// ];

export function Hero() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prev) => (prev + 1) % blobImages.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background image */}
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
          {/* Left column - Text content */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <motion.p
              className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              CLINICAL TRIAL DATA INFRASTRUCTURE
            </motion.p>

            {/* Subheading */}
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Connecting Sponsors and Health Systems Through AI-Powered Patient Matching
            </motion.h2>

            {/* Detailed description */}
            <motion.p
              className="text-sm md:text-base text-text-muted leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              TrialClinIQ is building the clinical trial recruitment data infrastructure of the future — using real-world health records and AI to accelerate enrollment, beginning with CNS and Alzheimer's trials.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Get Free Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Image boxes */}
          <motion.div
            className="relative flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main large box */}
            <motion.div
              className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/image1.jpg"
                alt="Clinical trial"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom two boxes */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img
                  src="/image2.jpg"
                  alt="Healthcare"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img
                  src="/image3.jpg"
                  alt="Patient care"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
