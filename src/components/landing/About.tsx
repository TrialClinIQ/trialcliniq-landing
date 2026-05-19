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
              With the power of AI,
              <br />
              we now have the
              <br />
              ability to
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
              <h3 className="text-xl font-bold tracking-wider text-foreground">ACCELERATE</h3>
              <p className="text-base text-foreground/70">the discovery of novel targets</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">PREDICT</h3>
              <p className="text-base text-foreground/70">the effectiveness of treatments</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">IDENTIFY</h3>
              <p className="text-base text-foreground/70">potentially life-saving clinical trials</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">DIAGNOSE</h3>
              <p className="text-base text-foreground/70">multiple diseases earlier</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
