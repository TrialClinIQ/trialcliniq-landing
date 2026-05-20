"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function AboutPage() {

  const values = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation First",
      description: "Pioneering AI-powered solutions that transform how CNS clinical trials connect with patients and sites.",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Patient-Centric",
      description: "Every decision we make prioritizes patient access, safety, and the advancement of neuroscience research.",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Trust & Transparency",
      description: "Building trust through HIPAA-compliant security, ethical practices, and transparent operations.",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Global Impact",
      description: "Connecting clinical research across 50+ countries to accelerate breakthrough treatments worldwide.",
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block px-6 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-400/30">
                    About TrialClinIQ
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  Transforming CNS
                  <br />
                  <span className="text-white/80">Clinical Trials</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                >
                  Building the clinical trial recruitment data infrastructure of the future —
                  connecting sponsors and health systems through AI-powered patient matching.
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
                  A world where every CNS clinical trial reaches full enrollment efficiently,
                  every qualified patient has access to breakthrough treatments, and
                  neuroscience research moves at the speed of innovation.
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
                  To revolutionize CNS trial enrollment by leveraging AI-powered matching,
                  health information exchange technology, and a global network of research
                  sites to connect patients and sponsors seamlessly.
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative bg-surface/30 rounded-2xl p-8 border-2 border-transparent hover:border-navy/30 hover:bg-white transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-7 h-7">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                </motion.div>
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
