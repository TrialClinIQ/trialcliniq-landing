"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Create your profile",
    content:
      "Sign up and complete your health profile with relevant medical history and CNS condition information. Your data is protected with HIPAA-compliant security.",
  },
  {
    title: "Get matched to trials",
    content:
      "Our intelligent matching system analyzes your profile against active CNS clinical trials to find the best opportunities for you.",
  },
  {
    title: "Connect with research sites",
    content:
      "Once matched, you'll be connected directly with research sites conducting trials that fit your profile. Our team guides you through each step.",
  },
  {
    title: "Pre-screening & consent",
    content:
      "Complete pre-screening assessments from home and receive all the information you need to make an informed decision about participation.",
  },
  {
    title: "Begin your trial journey",
    content:
      "With support from TrialClinIQ and the research team, you'll start participating in breakthrough CNS research that could help millions.",
  },
];

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-navy pr-4 group-hover:text-orange transition-colors">
          {title}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-orange text-white rotate-45"
              : "bg-surface text-text-muted"
          }`}
        >
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
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-text-muted leading-relaxed pb-5 pr-12">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              How it
              <br />
              works
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-md">
              Our platform is designed to connect patients with CNS clinical
              trials seamlessly. Here&apos;s how it works:
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-border mb-2" />

            {/* Accordion */}
            <div>
              {steps.map((step, index) => (
                <AccordionItem
                  key={index}
                  title={step.title}
                  content={step.content}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image Module */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-end"
          >
            <Image
              src="/works2.jpg"
              alt="How TrialClinIQ works"
              width={500}
              height={625}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
