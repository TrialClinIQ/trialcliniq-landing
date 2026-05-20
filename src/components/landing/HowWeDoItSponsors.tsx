"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Early planning",
    description:
      "Use site insights at scale to inform your strategy and design trials that are both inclusive and efficient.",
    dashboard: (
      <div className="w-full h-full bg-white rounded-2xl p-8 flex flex-col justify-center">
        {/* Patient Population Chart */}
        <div className="mb-8">
          <div className="inline-block bg-surface/30 px-4 py-2 rounded-lg mb-6">
            <h3 className="text-sm font-bold text-navy">US Patient population</h3>
          </div>
          <div className="relative w-56 h-56 mx-auto mb-6">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              {/* Main circle segments */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#1B4F8A" strokeWidth="40" strokeDasharray="330 440" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#DF7A11" strokeWidth="40" strokeDasharray="110 440" strokeDashoffset="-330" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy">100%</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-navy" />
                <span className="text-navy font-medium">Asian</span>
              </div>
              <span className="text-navy font-semibold">3%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange" />
                <span className="text-navy font-medium">Hispanic</span>
              </div>
              <span className="text-navy font-semibold">30%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-text-muted" />
                <span className="text-navy font-medium">Other</span>
              </div>
              <span className="text-navy font-semibold">2%</span>
            </div>
          </div>
        </div>

        {/* Barriers to Recruitment */}
        <div className="bg-surface/20 rounded-xl p-6">
          <h4 className="text-sm font-bold text-navy mb-4">Barriers to recruitment</h4>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-text-muted">Lack of awareness of available trials</span>
                <span className="text-orange font-semibold">10</span>
              </div>
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-orange rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-text-muted">Lack of perceived treatment benefits</span>
                <span className="text-navy font-semibold">9</span>
              </div>
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-navy rounded-full" style={{ width: "75%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-text-muted">Length of other visits</span>
                <span className="text-orange-mid font-semibold">5</span>
              </div>
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-orange-mid rounded-full" style={{ width: "45%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "AI site selection",
    description:
      "Confidently select the mix of sites that best aligns with your trial goals, powered by AI insights that guide better decisions.",
    dashboard: (
      <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col justify-center space-y-4">
        {/* Featured Site Card */}
        <div className="border-2 border-orange rounded-xl p-5 bg-surface/10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-navy text-base mb-1">Abbott Northwestern Hospital - Advanced research</h4>
              <p className="text-xs text-text-muted mb-3">Oscar G. Gutierrez • Vineland, NJ, USA</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-1 bg-navy text-white text-xs font-medium rounded-md flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Consistent enroller
                </span>
                <span className="px-2.5 py-1 bg-orange text-white text-xs font-medium rounded-md">Fast responder</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-start gap-2 text-xs text-navy">
                  <span className="text-orange">✓</span>
                  <span>20 patients IVC up to 40 patients</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-navy">
                  <span className="text-orange">✓</span>
                  <span>6 PI trials in NSCLC</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-navy">
                  <span className="text-orange">✓</span>
                  <span>PI Oncology</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-navy">
                  <span className="text-orange">✓</span>
                  <span>EHR integrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Site Card */}
        <div className="border border-border rounded-xl p-5 bg-white">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-surface rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-navy-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-navy text-base mb-1">Applied Clinical Research</h4>
              <p className="text-xs text-text-muted mb-3">Alexandra Brown, M.D. • Miami, FL, 33125...</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-1 bg-navy/10 text-navy text-xs font-medium rounded-md">CHC partner</span>
                <span className="px-2.5 py-1 bg-surface text-text-muted text-xs font-medium rounded-md flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Top 10% patient access
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-start gap-2 text-xs text-text-muted">
                  <span>✓ 3 patients IVC</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-text-muted">
                  <span>✓ 4 trials in NSCLC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation Box */}
        <div className="bg-navy/5 rounded-xl p-4 border border-navy/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-navy">3 best sites</div>
              <div className="text-xs text-text-muted">Recommend 3 more sites that meet the trial&apos;s requirements</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-12 bg-orange/10 rounded-lg border border-orange/20" />
            <div className="flex-1 h-12 bg-orange/10 rounded-lg border border-orange/20" />
            <div className="flex-1 h-12 bg-orange/10 rounded-lg border border-orange/20" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "AI patient pre-screening",
    description:
      "Reduce site burden, accelerate chart review, and gain visibility with real-time insights by site, trial, and indication.",
    dashboard: (
      <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col justify-center">
        <div className="mb-6">
          <h3 className="text-sm font-bold text-navy mb-4">Patient Screening Dashboard</h3>
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-navy/5 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-navy mb-1">124</div>
              <div className="text-xs text-text-muted font-medium">Total screened</div>
            </div>
            <div className="bg-orange/5 rounded-xl p-4 text-center border-2 border-orange/20">
              <div className="text-3xl font-bold text-orange mb-1">89</div>
              <div className="text-xs text-text-muted font-medium">Qualified</div>
            </div>
            <div className="bg-surface/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-navy-mid mb-1">72%</div>
              <div className="text-xs text-text-muted font-medium">Success rate</div>
            </div>
          </div>
        </div>

        {/* Patient List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-orange/5 border-2 border-orange/20 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-navy">Patient #A042</div>
                <div className="text-xs text-text-muted">Pre-screened • Qualified</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-orange">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Match
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-white border border-border rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-navy-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-navy">Patient #A043</div>
                <div className="text-xs text-text-muted">In review</div>
              </div>
            </div>
            <div className="text-xs font-medium text-text-muted">Pending</div>
          </div>

          <div className="flex items-center justify-between p-4 bg-white border border-border rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-navy-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-navy">Patient #A044</div>
                <div className="text-xs text-text-muted">Awaiting results</div>
              </div>
            </div>
            <div className="text-xs font-medium text-text-muted">Pending</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowWeDoItSponsors() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Add threshold to make transitions smoother and give users time to read
      const progress = Math.max(0, Math.min(1, (latest - 0.1) / 0.8));
      const stepIndex = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1
      );
      setActiveStep(Math.max(0, stepIndex));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32"
      style={{ backgroundColor: "#0d2847" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            How we do it
          </h2>
          <p className="text-white/80 text-lg max-w-2xl">
            TrialClinIQ&apos;s platform is built to support you from early planning to
            enrollment. Make faster, more informed decisions with our co-developed
            AI capabilities and site insights at scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Dashboard that transitions */}
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeStep === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-2"
                >
                  {step.dashboard}
                </motion.div>
              ))}
              {/* Vertical divider line - cleaner and more prominent */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-orange shadow-lg" />
            </div>
          </div>

          {/* Right - Steps with illuminated line */}
          <div className="relative">
            {/* Illuminated vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-orange shadow-[0_0_20px_rgba(223,122,17,0.5)]"
                style={{
                  height: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <div className="space-y-32 lg:space-y-48 pl-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dot on the line */}
                  <div
                    className={`absolute -left-[49px] top-4 w-5 h-5 rounded-full border-3 transition-all duration-500 ${
                      activeStep >= index
                        ? "bg-orange border-orange scale-125 shadow-[0_0_20px_rgba(223,122,17,0.6)]"
                        : "bg-transparent border-white/30"
                    }`}
                  />

                  <div className="flex items-start gap-6">
                    {/* Step number */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`text-6xl md:text-7xl font-bold transition-all duration-500 ${
                          activeStep === index
                            ? "text-orange scale-110"
                            : "text-white/30"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
