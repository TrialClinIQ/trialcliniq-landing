"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-cyan/5 via-transparent to-blue/5">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Building the
              <br />
              recruitment data
              <br />
              infrastructure to
            </h2>
          </motion.div>

          {/* Right column - Feature list */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">CONNECT</h3>
              <p className="text-base text-foreground/70">sponsors with health systems at scale</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">AGGREGATE</h3>
              <p className="text-base text-foreground/70">real-world health records for intelligent matching</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">ACCELERATE</h3>
              <p className="text-base text-foreground/70">enrollment timelines with pre-screened candidates</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">SCALE</h3>
              <p className="text-base text-foreground/70">CNS and Alzheimer's trials across partner networks</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
