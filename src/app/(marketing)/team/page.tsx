"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const team = [
  {
    name: "Jontel Pierce",
    role: "Founder & CEO",
    bio: "Board Certified Neurologist. Clinical researcher with deep expertise in neurology and patient recruitment strategy.",
    image: "/jontel.jpg",
    linkedin: "https://www.linkedin.com/in/jontelpierce/",
  },
];

const stealthTeam = [
  {
    name: "Stealth Scientist",
    role: "Advisor",
    bio: "Background in biomedical engineering, public health, and health equity initiatives.",
  },
  {
    name: "Stealth Technology Attorney",
    role: "Legal Counsel",
    bio: "Corporate attorney with expertise in healthcare privacy, data security, and regulatory compliance.",
  },
  {
    name: "Stealth Engineer",
    role: "Lead Engineer",
    bio: "Experienced software engineer specializing in healthcare systems, data integration, and platform scalability.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-off-white">
          <Container>
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                Meet the experts driving innovation in clinical research
              </h1>
            </motion.div>
          </Container>
        </section>

        {/* Team Members Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="space-y-6">
              {/* Main team members */}
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-surface/30 rounded-2xl p-8 border-l-4 border-orange-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-1">
                        {member.name}
                      </h3>
                      <p className="text-orange-500 font-semibold mb-4">
                        {member.role}
                      </p>
                      <p className="text-text-muted max-w-2xl">
                        {member.bio}
                      </p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-navy/5 text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Stealth team members */}
              {stealthTeam.map((member, index) => (
                <motion.div
                  key={`stealth-${index}`}
                  className="bg-surface/30 rounded-2xl p-8 border-l-4 border-navy/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (team.length + index) * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-text-muted max-w-2xl">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Join Section */}
        <section className="py-16 md:py-24 bg-off-white">
          <Container>
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Join Our Team
              </h2>
              <p className="text-text-muted text-lg mb-8">
                We&apos;re always looking for passionate individuals who want to
                make a difference in healthcare. If you&apos;re interested in
                joining TrialClinIQ, we&apos;d love to hear from you.
              </p>
              <a
                href="mailto:careers@trialcliniq.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-medium hover:bg-navy-deep transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us About Opportunities
              </a>
            </motion.div>
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
