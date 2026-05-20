"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <rect x="16" y="12" width="16" height="24" fill="white" rx="2" />
        <rect x="12" y="20" width="8" height="16" fill="white" opacity="0.7" rx="2" />
        <rect x="28" y="20" width="8" height="16" fill="white" opacity="0.7" rx="2" />
        <circle cx="24" cy="16" r="3" fill="#DF7A11" />
        <path d="M24 16v4" stroke="#DF7A11" strokeWidth="2" />
        <path d="M22 18h4" stroke="#DF7A11" strokeWidth="2" />
      </svg>
    ),
    title: "Partner with proven sites",
    description:
      "Work with motivated, high-performing community health centers that match your protocol and accelerate your recruitment timelines.",
  },
  {
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="20" r="6" fill="white" />
        <path
          d="M24 26c-4 0-8 2-10 5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M24 26c4 0 8 2 10 5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M12 20l3 3 3 3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M36 20l-3 3-3 3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),
    title: "Reach more patients, everywhere",
    description:
      "Connect with 6,000+ committed research sites across 50+ countries to reach the right patients, faster.",
  },
  {
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <circle cx="20" cy="20" r="8" fill="white" />
        <circle cx="28" cy="24" r="6" fill="white" opacity="0.8" />
        <circle cx="16" cy="28" r="5" fill="white" opacity="0.6" />
        <circle cx="32" cy="16" r="4" fill="white" opacity="0.5" />
      </svg>
    ),
    title: "Everything in one platform",
    description:
      "From early planning to patient enrollment, simplify how you run trials, all in one place.",
  },
];

export function WhyPartner() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-navy/5 via-off-white to-orange/5 overflow-hidden">
      {/* Large gradient circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-navy/20 to-orange/10 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/2" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Why Leading Sponsors Partner
            <br />
            with TrialClinIQ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-orange rounded-3xl border-2 border-orange p-10 hover:shadow-accent transition-all overflow-hidden min-h-[400px] flex flex-col"
            >
              {/* Background decorative effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-navy/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 mb-6">{benefit.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/90 leading-relaxed flex-1">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
