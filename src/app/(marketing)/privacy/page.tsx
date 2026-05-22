"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-navy">
          <Container>
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-white/70 text-lg">
                Last updated: May 2025
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {/* Section 1 */}
                <Section number="1" title="Introduction">
                  <p>
                    TrialClinIQ, Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the secure handling of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our clinical research platform and related services.
                  </p>
                  <p>
                    This policy applies to all users of our platform, including researchers, healthcare professionals, and institutional partners. By using TrialClinIQ, you consent to the data practices described in this policy.
                  </p>
                </Section>

                {/* Section 2 */}
                <Section number="2" title="Information We Collect">
                  <SubSection title="2.1 Personal Information">
                    <ul>
                      <li><strong>Account Information:</strong> Name, email address, phone number, professional title, institutional affiliation</li>
                      <li><strong>Professional Details:</strong> Medical license number, research credentials, areas of expertise</li>
                      <li><strong>Contact Information:</strong> Billing address, correspondence preferences</li>
                      <li><strong>Authentication Data:</strong> Login credentials, security questions, two-factor authentication details</li>
                    </ul>
                  </SubSection>

                  <SubSection title="2.2 Clinical and Research Data">
                    <ul>
                      <li><strong>Trial Information:</strong> Protocol details, study parameters, recruitment criteria</li>
                      <li><strong>Patient Data:</strong> De-identified participant information, eligibility assessments</li>
                      <li><strong>Research Analytics:</strong> Study progress metrics, enrollment statistics, outcome data</li>
                    </ul>
                  </SubSection>

                  <SubSection title="2.3 Technical Information">
                    <ul>
                      <li><strong>Usage Data:</strong> Platform interactions, feature utilization, session duration</li>
                      <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                      <li><strong>Log Data:</strong> Access logs, error reports, performance metrics</li>
                      <li><strong>Cookies and Tracking:</strong> Session cookies, preference settings, analytics data</li>
                    </ul>
                  </SubSection>
                </Section>

                {/* Section 3 */}
                <Section number="3" title="How We Use Your Information">
                  <SubSection title="3.1 Service Provision">
                    <ul>
                      <li>Operate and maintain the TrialClinIQ platform</li>
                      <li>Process clinical trial registrations and manage study protocols</li>
                      <li>Facilitate patient matching and recruitment</li>
                      <li>Generate analytics and reporting for research optimization</li>
                    </ul>
                  </SubSection>

                  <SubSection title="3.2 Communication and Support">
                    <ul>
                      <li>Respond to inquiries and provide customer support</li>
                      <li>Send service updates, security alerts, and platform notifications</li>
                      <li>Deliver educational content and industry insights (with consent)</li>
                      <li>Process demo requests and facilitate sales communications</li>
                    </ul>
                  </SubSection>

                  <SubSection title="3.3 Legal and Security">
                    <ul>
                      <li>Comply with applicable healthcare and data protection regulations</li>
                      <li>Prevent fraud, abuse, and security breaches</li>
                      <li>Maintain audit trails for regulatory compliance</li>
                      <li>Respond to legal requests and protect our rights</li>
                    </ul>
                  </SubSection>
                </Section>

                {/* Section 4 */}
                <Section number="4" title="Legal Basis for Processing (GDPR)">
                  <p>We process personal data based on the following legal grounds:</p>
                  <ul>
                    <li><strong>Contractual Necessity:</strong> To perform our services under your agreement</li>
                    <li><strong>Legitimate Interest:</strong> To improve our platform and ensure security</li>
                    <li><strong>Legal Obligation:</strong> To comply with healthcare and research regulations</li>
                    <li><strong>Consent:</strong> For marketing communications and optional features</li>
                    <li><strong>Vital Interests:</strong> To protect health and safety in emergency situations</li>
                  </ul>
                </Section>

                {/* Section 5 */}
                <Section number="5" title="Data Sharing and Disclosure">
                  <SubSection title="5.1 We May Share Information With:">
                    <ul>
                      <li><strong>Authorized Research Partners:</strong> Participating institutions and investigators (with consent)</li>
                      <li><strong>Service Providers:</strong> Third-party vendors who assist in platform operations</li>
                      <li><strong>Regulatory Authorities:</strong> FDA, IRBs, and other oversight bodies as required</li>
                      <li><strong>Legal Compliance:</strong> Law enforcement or courts when legally required</li>
                    </ul>
                  </SubSection>

                  <SubSection title="5.2 We Do Not:">
                    <ul>
                      <li>Sell personal information to third parties</li>
                      <li>Share patient data without proper authorization</li>
                      <li>Use data for purposes unrelated to clinical research</li>
                      <li>Transfer data to countries without adequate protection</li>
                    </ul>
                  </SubSection>
                </Section>

                {/* Section 6 */}
                <Section number="6" title="Data Security and Protection">
                  <SubSection title="6.1 Technical Safeguards">
                    <ul>
                      <li><strong>Encryption:</strong> Industry-standard encryption for data at rest and in transit</li>
                      <li><strong>Access Controls:</strong> Role-based permissions and multi-factor authentication</li>
                      <li><strong>Network Security:</strong> Firewalls, intrusion detection, and DDoS protection</li>
                      <li><strong>Data Backup:</strong> Regular backups with geographic redundancy</li>
                    </ul>
                  </SubSection>

                  <SubSection title="6.2 Administrative Safeguards">
                    <ul>
                      <li>Annual security training for all employees</li>
                      <li>Background checks for personnel with data access</li>
                      <li>Incident response procedures and breach notification protocols</li>
                      <li>Regular security audits and penetration testing</li>
                    </ul>
                  </SubSection>

                  <SubSection title="6.3 Compliance">
                    <ul>
                      <li>Healthcare privacy compliance and Business Associate Agreements</li>
                      <li>Regular third-party security assessments</li>
                      <li>Alignment with applicable regulatory frameworks for electronic records</li>
                    </ul>
                  </SubSection>
                </Section>

                {/* Section 7 */}
                <Section number="7" title="Data Retention and Deletion">
                  <SubSection title="7.1 Retention Periods">
                    <ul>
                      <li><strong>Account Data:</strong> Retained for the duration of your account plus applicable regulatory periods</li>
                      <li><strong>Clinical Trial Data:</strong> Retained according to applicable regulatory requirements</li>
                      <li><strong>Financial Records:</strong> Retained as required for tax and audit purposes</li>
                      <li><strong>Marketing Data:</strong> Retained until consent is withdrawn</li>
                    </ul>
                  </SubSection>

                  <SubSection title="7.2 Deletion Process">
                    <p>
                      Upon retention period expiry or valid deletion request, data is securely deleted using industry-standard methods within a reasonable timeframe.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 8 */}
                <Section number="8" title="Your Privacy Rights">
                  <SubSection title="8.1 Universal Rights">
                    <ul>
                      <li><strong>Access:</strong> Request copies of your personal information</li>
                      <li><strong>Correction:</strong> Update inaccurate or incomplete data</li>
                      <li><strong>Deletion:</strong> Request removal of your data (subject to legal requirements)</li>
                      <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                    </ul>
                  </SubSection>

                  <SubSection title="8.2 Additional GDPR Rights (EU Residents)">
                    <ul>
                      <li><strong>Restriction:</strong> Limit processing of your data in certain circumstances</li>
                      <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                      <li><strong>Withdrawal:</strong> Withdraw consent for specific processing activities</li>
                      <li><strong>Complaint:</strong> Lodge complaints with your local data protection authority</li>
                    </ul>
                  </SubSection>

                  <SubSection title="8.3 CCPA Rights (California Residents)">
                    <ul>
                      <li>Right to know what personal information is collected and how it&apos;s used</li>
                      <li>Right to delete personal information (with exceptions)</li>
                      <li>Right to opt-out of the sale of personal information</li>
                      <li>Right to non-discrimination for exercising privacy rights</li>
                    </ul>
                  </SubSection>
                </Section>

                {/* Section 9 */}
                <Section number="9" title="Cookies and Tracking Technologies">
                  <SubSection title="9.1 Types of Cookies We Use">
                    <ul>
                      <li><strong>Essential Cookies:</strong> Required for platform functionality and security</li>
                      <li><strong>Performance Cookies:</strong> Analytics to improve user experience</li>
                      <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                      <li><strong>Marketing Cookies:</strong> Deliver relevant content (with consent)</li>
                    </ul>
                    <p>
                      You can manage cookie preferences through your browser settings or our cookie consent banner.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 10 */}
                <Section number="10" title="International Data Transfers">
                  <p>
                    TrialClinIQ operates globally and may transfer data across borders. We ensure adequate protection through:
                  </p>
                  <ul>
                    <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                    <li>Adequacy decisions for transfers to approved countries</li>
                    <li>Binding Corporate Rules for intra-group transfers</li>
                    <li>Explicit consent for transfers where required</li>
                  </ul>
                </Section>

                {/* Section 11 */}
                <Section number="11" title="Children's Privacy">
                  <p>
                    TrialClinIQ is designed for professional use by healthcare providers and researchers. We do not knowingly collect personal information from children under 16 without appropriate consent mechanisms. Pediatric research data is handled according to additional safeguards and parental consent requirements.
                  </p>
                </Section>

                {/* Section 12 */}
                <Section number="12" title="Third-Party Integrations">
                  <p>Our platform may integrate with third-party services including:</p>
                  <ul>
                    <li>Electronic Health Record (EHR) systems</li>
                    <li>Clinical data management platforms</li>
                    <li>Analytics and reporting tools</li>
                    <li>Communication and collaboration services</li>
                  </ul>
                  <p>
                    These integrations are governed by separate privacy policies and data processing agreements.
                  </p>
                </Section>

                {/* Section 13 */}
                <Section number="13" title="Data Breach Notification">
                  <p>In the event of a data breach that may adversely affect your privacy or security, we will:</p>
                  <ul>
                    <li>Notify affected users within 72 hours of discovery</li>
                    <li>Report to relevant supervisory authorities as required</li>
                    <li>Provide details about the breach and remediation steps</li>
                    <li>Offer credit monitoring or other protection services if appropriate</li>
                  </ul>
                </Section>

                {/* Section 14 */}
                <Section number="14" title="Changes to This Policy">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Material changes will be communicated through:
                  </p>
                  <ul>
                    <li>Email notification to registered users</li>
                    <li>Prominent notice on our platform</li>
                    <li>30-day advance notice for significant changes</li>
                  </ul>
                  <p>
                    Your continued use of TrialClinIQ after changes become effective constitutes acceptance of the updated policy.
                  </p>
                </Section>

                {/* Section 15 */}
                <Section number="15" title="Contact Information">
                  <p>For questions, concerns, or to exercise your privacy rights, contact us:</p>
                  <div className="bg-surface/50 rounded-xl p-6 mt-4">
                    <p className="mb-2">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:privacy@trialcliniq.com" className="text-orange-500 hover:underline">
                        privacy@trialcliniq.com
                      </a>
                    </p>
                    <p className="mb-0">
                      <strong>Response Time:</strong> We respond to privacy requests within 30 days
                    </p>
                  </div>
                </Section>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

// Section Component
function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 flex items-baseline gap-3">
        <span className="text-orange-500">{number}.</span>
        {title}
      </h2>
      <div className="text-text-muted leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

// SubSection Component
function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
      <div className="text-text-muted leading-relaxed space-y-3 pl-1">{children}</div>
    </div>
  );
}
