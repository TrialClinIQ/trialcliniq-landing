import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "Community Health Center Partnerships",
    description:
      "We work directly with Federally Qualified Health Centers (FQHCs) and community clinics to bring clinical trials to where patients already receive care, eliminating barriers to participation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Matching",
    description:
      "Our proprietary algorithm considers medical history, demographics, location, and trial requirements to find the best matches, increasing enrollment rates and reducing screen failures.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Longitudinal Recruitment",
    description:
      "Track patient journeys over time, building trusted relationships that lead to better retention and more diverse representation in clinical research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose TrialClinIQ
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our platform is designed to make clinical trial access equitable and efficient
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-cyan/30 hover:bg-cyan/5 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-white transition-colors mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
