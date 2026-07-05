"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const audiences = [
  {
    id: "patients",
    label: "For Patients",
    title: "Get to the Right Specialist Sooner",
    description: "TrialClinIQ helps your care team identify when you may need a specialist — before your condition worsens.",
    bullets: [
      "Get flagged for a referral based on patterns in your health records",
      "Reach the right specialist faster with a streamlined referral process",
      "Also get matched to clinical trials that may offer additional treatment options",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "providers",
    label: "For Providers/CHCs",
    title: "Streamline Referrals Across Your Panel",
    description: "Built for FQHCs, rural hospitals, and community clinics — TrialClinIQ helps your team catch patients who need specialist care before it's too late.",
    bullets: [
      "Automatically flag patients who may benefit from a referral to a specialist",
      "Alert providers and referral coordinators through a unified dashboard",
      "Improve referral timelines and reduce patients falling through the cracks",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "sponsors",
    label: "For Sponsors/CROs",
    title: "Reach Patients Where They Receive Care",
    description: "Access pre-identified patient populations through our network of FQHCs, rural hospitals, and community clinics.",
    bullets: [
      "Tap into TEFCA/QHIN-connected health data for broader patient reach",
      "Reduce recruitment timelines with AI-matched, pre-screened candidates",
      "Partner with community health organizations already trusted by your target populations",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function AudienceSections() {
  const [activeTab, setActiveTab] = useState("patients");
  const activeAudience = audiences.find((a) => a.id === activeTab) || audiences[0];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Who We Serve
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            TrialClinIQ serves FQHCs, rural hospitals, community clinics, patients, and clinical trial sponsors
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setActiveTab(audience.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-medium transition-all",
                  activeTab === audience.id
                    ? "bg-cyan text-white shadow-md"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {audience.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          id={`for-${activeAudience.id}`}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 text-cyan">
                {activeAudience.icon}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {activeAudience.title}
              </h3>

              <p className="text-lg text-foreground/70 mb-6">
                {activeAudience.description}
              </p>

              <ul className="space-y-4">
                {activeAudience.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-foreground/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Anchor points for direct navigation */}
        <div id="for-patients" className="hidden" />
        <div id="for-providers" className="hidden" />
        <div id="for-sponsors" className="hidden" />
      </Container>
    </section>
  );
}
