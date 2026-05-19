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
    <section id="how-it-works" className="py-20 md:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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

          {/* Right Column - Visual Composition */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main container for the composition */}
            <div className="relative flex justify-center items-center min-h-130">

              {/* Orange Arc - wrapping around the trust badge */}
              <div className="absolute top-0 left-8 md:left-12 w-40 h-52 md:w-48 md:h-60">
                <svg viewBox="0 0 180 240" className="w-full h-full">
                  <path
                    d="M 140 220 A 120 120 0 0 1 20 100 A 120 120 0 0 1 80 10"
                    fill="none"
                    stroke="var(--orange)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Trust Shield Badge - positioned inside the arc */}
              <div className="absolute top-12 left-20 md:left-28 z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-b from-white via-gray-50 to-gray-100 shadow-xl flex items-center justify-center border border-gray-100">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-b from-gray-50 to-white flex items-center justify-center shadow-inner">
                    <svg
                      className="w-7 h-7 md:w-8 md:h-8 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Navy decorative circle - top right */}
              <div className="absolute top-6 right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy" />

              {/* Main Image Card */}
              <div className="relative ml-auto mr-0 md:mr-4">
                <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=650&fit=crop&crop=face"
                    alt="Professional woman working"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Navy circle overlapping bottom right of image */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-navy z-10" />
              </div>

              {/* Notification Card - overlapping left side */}
              <div className="absolute bottom-24 md:bottom-28 left-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-60 md:w-72 z-20">
                {/* Icon row */}
                <div className="flex gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-navy font-semibold text-sm">
                    You&apos;ve been matched to a new trial!
                  </p>
                  <p className="text-orange text-xs mt-1 font-medium">
                    Thu Nov 12 2024
                  </p>
                </div>
              </div>

              {/* Light blue circle - bottom left */}
              <div className="absolute bottom-4 left-16 md:left-24 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#7DD3FC]" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
