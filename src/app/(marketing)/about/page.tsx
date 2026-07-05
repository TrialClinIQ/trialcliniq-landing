"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { useState } from "react";

// Expandable Card Component
function ExpandableValueCard({
  title,
  description,
  icon,
  gradient,
  textColor = "text-navy",
  image,
  isExpanded,
  onHover,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  textColor?: string;
  image?: string;
  isExpanded: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${gradient}`}
      style={{
        flex: isExpanded ? 2.5 : 1,
        minHeight: "420px",
      }}
      layout
    >
      {/* Icon in top right */}
      <div className="absolute top-6 right-6 z-10">
        <div className={`w-10 h-10 rounded-full border-2 ${textColor === "text-white" ? "border-white/40 bg-white/10" : "border-navy/20 bg-navy/5"} flex items-center justify-center backdrop-blur-sm`}>
          <div className={`w-5 h-5 ${textColor === "text-white" ? "text-white" : "text-navy/70"}`}>
            {icon}
          </div>
        </div>
      </div>

      {/* Image (shown when expanded) - positioned on the left */}
      {image && (
        <div
          className={`absolute top-6 left-6 bottom-6 transition-all duration-500 ease-out ${isExpanded ? 'w-[45%] opacity-100' : 'w-0 opacity-0'}`}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className={`absolute bottom-0 right-0 p-8 z-10 flex flex-col justify-end transition-all duration-500 ${isExpanded ? 'left-[50%]' : 'left-0'}`}
        style={{ top: 0 }}
      >
        <h3 className={`text-2xl md:text-3xl font-bold ${textColor}`}>
          {title}
        </h3>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
        >
          <p className={`${textColor === "text-white" ? "text-white/90" : "text-navy/70"} mb-6 text-base leading-relaxed`}>
            {description}
          </p>
          <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${textColor === "text-white" ? "bg-white text-navy" : "bg-white text-navy border border-navy/10"} font-semibold hover:shadow-lg transition-all`}>
            Explore
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1);

  const values = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation First",
      description: "Pioneering AI-powered referral matching that transforms how FQHCs, rural hospitals, and community clinics identify and route patients who need specialist care.",
      gradient: "bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300",
      textColor: "text-navy",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Patient-Centric",
      description: "Every decision we make prioritizes getting patients to the right care — whether that's a specialist referral or a clinical trial that could change their outcome.",
      gradient: "bg-gradient-to-br from-[#0d2847] via-[#1a3a5c] to-[#0d2847]",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Trust ",
      description: "Building trust through HIPAA-compliant security, ethical practices, and transparent operations.",
      gradient: "bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300",
      textColor: "text-navy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Community Impact",
      description: "Focused on the health organizations that serve the most underserved populations — FQHCs, rural clinics, and community health centers across the country.",
      gradient: "bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400",
      textColor: "text-navy",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center overflow-hidden"
          style={{ backgroundColor: "#0d2847" }}
        >
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  Smarter Referrals
                  <br />
                  <span className="text-white/80">for Community Care</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                >
                  TrialClinIQ ingests health data through TEFCA/QHIN and direct EHR integration
                  to flag patients who need specialist referrals — alerting providers and coordinators
                  before conditions go undetected. Clinical trial matching included.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
                    Partner With Us
                  </button>
                  <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>

              {/* Right - Featured Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block relative"
              >
                <div className="relative w-full h-[500px] rounded-4xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img
                    src="/about.jpg"
                    alt="Clinical Research"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block p-4 rounded-2xl bg-orange-100 mb-6">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  A world where every FQHC, rural hospital, and community clinic has the tools
                  to identify patients who need specialist care — and get them there before
                  conditions go undetected or untreated.
                </p>
                <div className="h-2 w-24 bg-orange-500 rounded-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block p-4 rounded-2xl bg-orange-100 mb-6">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  To empower FQHCs, rural hospitals, and community clinics with AI-powered
                  referral matching — using TEFCA/QHIN and direct EHR integration to flag
                  patients, streamline referral timelines, and alert the right care team members
                  at the right time.
                </p>
                <div className="h-2 w-24 bg-linear-to-r from-orange-500 to-orange-400 rounded-full" />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
                Our Core Values
              </h2>
              <a
                href="#"
                className="hidden md:flex items-center gap-3 text-navy font-medium hover:text-orange-500 transition-colors"
              >
                Discover Our Mission
                <span className="w-12 h-12 rounded-full border-2 border-navy flex items-center justify-center hover:bg-navy hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Expandable Cards Container */}
            <div className="flex gap-4">
              {values.map((value, index) => (
                <ExpandableValueCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  gradient={value.gradient}
                  textColor={value.textColor}
                  image={value.image}
                  isExpanded={expandedIndex === index}
                  onHover={() => setExpandedIndex(index)}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
