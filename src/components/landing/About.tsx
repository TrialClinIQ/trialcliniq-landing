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
              Smarter referrals
              <br />
              start with better
              <br />
              data infrastructure
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
              <h3 className="text-xl font-bold tracking-wider text-foreground">INGEST</h3>
              <p className="text-base text-foreground/70">health data through TEFCA/QHIN and direct EHR integration</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">FLAG</h3>
              <p className="text-base text-foreground/70">patients who may benefit from a specialist referral — often before diagnosis</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">ALERT</h3>
              <p className="text-base text-foreground/70">providers and referral coordinators through a unified dashboard</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-wider text-foreground">IMPROVE</h3>
              <p className="text-base text-foreground/70">referral timelines for FQHCs, rural hospitals, and community clinics</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
