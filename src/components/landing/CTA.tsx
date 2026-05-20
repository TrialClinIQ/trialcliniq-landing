"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PipedriveWebForm } from "@/components/PipedriveWebForm";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <Container>
        <div className="relative rounded-[40px] overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 50%, #dc2626 100%)",
            }}
          />

          {/* Topography pattern overlay */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: "url('/coolbackgrounds-topography-micron.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              mixBlendMode: "multiply",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-8 md:px-16 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white text-lg md:text-xl font-semibold mb-6">
                Let's Partner
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
                Find out how<br />
                TrialClinIQ can help you
              </h2>
              <Button
                variant="primary"
                size="lg"
                className="bg-[#0d2847] text-white hover:bg-[#1a3a6b] border-none shadow-xl mb-8"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>

              {/* Pipedrive Web Form */}
              <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <PipedriveWebForm />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
