"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const team = [
  {
    name: "Jontel Peirce",
    role: "Chief Executive Officer",
    bio: "Visionary founder driving the mission to connect underserved communities with life-changing clinical trials. Passionate about healthcare equity and innovation.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
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
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-medium mb-6">
                Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                Transforming Clinical Trial Access
              </h1>
              <p className="text-lg text-text-muted max-w-2xl">
                We&apos;re dedicated professionals committed to bridging the gap
                between clinical research and underserved communities.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Team Member Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-5 gap-12 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Photo placeholder */}
                <div className="lg:col-span-2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-navy to-navy-deep">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl md:text-9xl font-bold text-white/20">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-white font-semibold">{member.name}</p>
                        <p className="text-white/70 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                    {member.name}
                  </h2>
                  <p className="text-orange font-semibold text-lg mb-6">
                    {member.role}
                  </p>
                  <p className="text-text-muted text-lg leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-navy/5 text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-navy/5 text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
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
    </>
  );
}
