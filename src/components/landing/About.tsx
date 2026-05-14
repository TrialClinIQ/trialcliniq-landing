import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-cyan/5 via-transparent to-blue/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            At TrialClinIQ, we believe that everyone deserves access to cutting-edge
            medical research, regardless of where they live or where they receive care.
            We&apos;re building a future where clinical trials reflect the diversity of the
            populations they aim to serve—one community health center at a time.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">80%</div>
              <div className="text-sm text-foreground/60">
                of clinical trials fail to meet enrollment deadlines
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">75%</div>
              <div className="text-sm text-foreground/60">
                of trial participants are white
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">30M</div>
              <div className="text-sm text-foreground/60">
                patients served by community health centers
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
