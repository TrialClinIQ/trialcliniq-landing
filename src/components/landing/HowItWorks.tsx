"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const challenges = [
  {
    title: "Limited Access",
    description: "Underserved communities often lack awareness and access to clinical trials happening near them.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop",
  },
  {
    title: "Complex Eligibility",
    description: "Navigating trial requirements is overwhelming for both patients and community health providers.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=800&fit=crop",
  },
  {
    title: "Fragmented Systems",
    description: "Trial sponsors struggle to reach diverse patient populations through disconnected recruitment channels.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=800&fit=crop",
  },
];

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % challenges.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + challenges.length) % challenges.length);
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-off-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              <span className="text-accent italic">Say Goodbye</span> to Clinical<br className="hidden md:block" /> Trial Barriers.
            </h2>
          </motion.div>

          {/* Navigation arrows - Desktop */}
          <motion.div
            className="hidden md:flex items-center gap-3 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Cards Grid - Staggered layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-end">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 1 ? "md:-mt-8 aspect-[3/4]" : "aspect-[4/5]"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white italic">
                  {challenge.title}
                </h3>

                <div>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    {challenge.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20">
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {challenges.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === activeIndex ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
