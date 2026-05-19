"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HowItWorksPatients() {
  return (
    <section className="py-20 md:py-32 bg-surface/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-orange">How it all</span>
              <br />
              <span className="text-navy">works together</span>
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-lg leading-relaxed">
              Each step powers the next, creating a seamless flow from planning
              to performance. Sponsors gain early protocol insights, engage
              high-performing sites faster, and track real-time site performance
              to optimize every stage of the trial.
            </p>
            <Button variant="primary" size="lg">
              Connect with us
            </Button>
          </motion.div>

          {/* Right Column - Animated Circles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[700px] flex items-center justify-center"
          >
            {/* Top Circle - Plan (Orange) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="absolute top-0 right-0"
              style={{ zIndex: 2 }}
            >
              <div className="relative w-72 h-72">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-orange/20 blur-3xl scale-110" />
                {/* Main circle with glass effect */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(255, 220, 180, 0.9), rgba(223, 122, 17, 0.6), rgba(223, 122, 17, 0.3))",
                      backdropFilter: "blur(20px)",
                    }}
                  />
                  {/* Shine effect */}
                  <div
                    className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                    }}
                  />
                </div>
                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                  <span className="text-orange text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
                    Plan
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Middle Circle - Select (Navy) - Largest */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 3 }}
            >
              <div className="relative w-80 h-80">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-navy/20 blur-3xl scale-110" />
                {/* Main circle with glass effect */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(180, 200, 230, 0.9), rgba(27, 79, 138, 0.7), rgba(27, 79, 138, 0.4))",
                      backdropFilter: "blur(20px)",
                    }}
                  />
                  {/* Shine effect */}
                  <div
                    className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)",
                    }}
                  />
                </div>
                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                  <span className="text-navy text-5xl md:text-6xl font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
                    Select
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Circle - Enroll (Orange) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
              className="absolute bottom-0 right-0"
              style={{ zIndex: 2 }}
            >
              <div className="relative w-72 h-72">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-orange/20 blur-3xl scale-110" />
                {/* Main circle with glass effect */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(255, 220, 180, 0.85), rgba(223, 122, 17, 0.6), rgba(223, 122, 17, 0.3))",
                      backdropFilter: "blur(20px)",
                    }}
                  />
                  {/* Shine effect */}
                  <div
                    className="absolute top-0 left-0 w-36 h-36 rounded-full opacity-35"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                    }}
                  />
                </div>
                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                  <span className="text-orange text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
                    Enroll
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
