"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CookieBanner } from "@/components/landing/CookieBanner";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-white/70 text-lg">
                Last updated: May 22, 2025
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
              >
                {/* Section 1 */}
                <Section number="1" title="Acceptance of Terms">
                  <p>
                    By accessing, downloading, or using the TrialClinIQ platform and related services (&quot;Services&quot;), you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) enter into a legally binding agreement with TrialClinIQ, Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our clinical research platform, website, mobile applications, and all related services.
                  </p>
                  <p>
                    If you are entering into these Terms on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and &quot;you&quot; and &quot;your&quot; will refer to that organization.
                  </p>
                  <p className="font-semibold text-navy">
                    If you do not agree to these Terms, you must not access or use our Services.
                  </p>
                </Section>

                {/* Section 2 */}
                <Section number="2" title="Description of Services">
                  <p>TrialClinIQ provides a comprehensive clinical research platform that includes:</p>
                  <ul>
                    <li><strong>Patient Matching:</strong> AI-powered tools to match patients with appropriate clinical trials</li>
                    <li><strong>Trial Management:</strong> Tools for managing clinical trial protocols, recruitment, and data collection</li>
                    <li><strong>Analytics and Reporting:</strong> Real-time analytics, progress tracking, and regulatory reporting</li>
                    <li><strong>Data Management:</strong> Secure storage and management of clinical research data</li>
                    <li><strong>Regulatory Compliance:</strong> Tools to ensure compliance with FDA, HIPAA, and other regulations</li>
                    <li><strong>Communication Tools:</strong> Secure messaging and collaboration features for research teams</li>
                  </ul>
                </Section>

                {/* Section 3 */}
                <Section number="3" title="User Eligibility and Account Requirements">
                  <SubSection title="3.1 Eligibility">
                    <p>To use our Services, you must:</p>
                    <ul>
                      <li>Be at least 18 years of age</li>
                      <li>Be a licensed healthcare professional, qualified researcher, or authorized institutional representative</li>
                      <li>Have the legal authority to enter into these Terms</li>
                      <li>Provide accurate and complete registration information</li>
                    </ul>
                  </SubSection>

                  <SubSection title="3.2 Account Security">
                    <p>You are responsible for:</p>
                    <ul>
                      <li>Maintaining the confidentiality of your login credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Immediately notifying us of any unauthorized use</li>
                      <li>Ensuring your account information remains current and accurate</li>
                    </ul>
                  </SubSection>
                </Section>

                {/* Section 4 */}
                <Section number="4" title="Acceptable Use Policy">
                  <SubSection title="4.1 Permitted Uses">
                    <p>You may use our Services to:</p>
                    <ul>
                      <li>Conduct legitimate clinical research activities</li>
                      <li>Manage and track clinical trial protocols</li>
                      <li>Recruit and screen eligible participants</li>
                      <li>Collect and analyze clinical data</li>
                      <li>Generate regulatory reports and documentation</li>
                      <li>Collaborate with research team members</li>
                    </ul>
                  </SubSection>

                  <SubSection title="4.2 Prohibited Uses">
                    <p>You agree NOT to:</p>
                    <ul>
                      <li>Use the Services for any unlawful purpose or in violation of any applicable regulations</li>
                      <li>Upload, transmit, or store any harmful, offensive, or inappropriate content</li>
                      <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                      <li>Reverse engineer, decompile, or attempt to extract source code</li>
                      <li>Use automated tools to access the Services without permission</li>
                      <li>Interfere with or disrupt the Services or servers</li>
                      <li>Violate any intellectual property rights</li>
                      <li>Share or misuse patient data or other confidential information</li>
                      <li>Impersonate another person or entity</li>
                      <li>Use the Services to compete with or create a competing service</li>
                    </ul>
                  </SubSection>
                </Section>

                {/* Section 5 */}
                <Section number="5" title="Intellectual Property Rights">
                  <SubSection title="5.1 Our Intellectual Property">
                    <p>
                      TrialClinIQ and its licensors own all rights, title, and interest in and to the Services, including all software, technology, content, trademarks, and other intellectual property. You are granted a limited, non-exclusive, non-transferable, revocable license to use the Services in accordance with these Terms.
                    </p>
                  </SubSection>

                  <SubSection title="5.2 Your Content">
                    <p>
                      You retain ownership of any data, content, or materials you upload to our Services (&quot;User Content&quot;). By uploading User Content, you grant us a limited license to use, store, and process such content solely for the purpose of providing the Services.
                    </p>
                  </SubSection>

                  <SubSection title="5.3 Feedback">
                    <p>
                      Any feedback, suggestions, or improvements you provide regarding our Services may be used by us without restriction or compensation.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 6 */}
                <Section number="6" title="Data Protection and Privacy">
                  <p>Your privacy and the protection of patient data are paramount. Our data handling practices are governed by:</p>
                  <ul>
                    <li>Our Privacy Policy, which is incorporated into these Terms by reference</li>
                    <li>Applicable healthcare privacy and data protection regulations</li>
                    <li>Clinical research regulatory requirements</li>
                    <li>Good Clinical Practice (GCP) guidelines</li>
                    <li>Applicable international data protection laws</li>
                  </ul>
                  <p>You agree to comply with all applicable privacy and data protection laws when using our Services.</p>
                </Section>

                {/* Section 7 */}
                <Section number="7" title="Payment Terms and Subscription">
                  <SubSection title="7.1 Subscription Plans">
                    <p>
                      Access to certain features may require a paid subscription. Subscription fees are charged in advance and are non-refundable except as required by law or as explicitly stated in these Terms.
                    </p>
                  </SubSection>

                  <SubSection title="7.2 Billing and Payment">
                    <ul>
                      <li>Payments are processed through secure third-party payment processors</li>
                      <li>You authorize us to charge your payment method for all applicable fees</li>
                      <li>Subscription fees automatically renew unless cancelled</li>
                      <li>Price changes will be communicated with 30 days advance notice</li>
                    </ul>
                  </SubSection>

                  <SubSection title="7.3 Cancellation and Refunds">
                    <p>
                      You may cancel your subscription at any time. Upon cancellation, you will retain access until the end of your current billing period. Refunds are not provided for partial subscription periods.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 8 */}
                <Section number="8" title="Service Availability and Support">
                  <SubSection title="8.1 Service Availability">
                    <p>We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. Services may be temporarily unavailable due to:</p>
                    <ul>
                      <li>Scheduled maintenance (with advance notice when possible)</li>
                      <li>Emergency security measures</li>
                      <li>Force majeure events</li>
                      <li>Third-party service interruptions</li>
                    </ul>
                  </SubSection>

                  <SubSection title="8.2 Customer Support">
                    <p>
                      We provide customer support during business hours (Monday-Friday, 9 AM - 6 PM CT). Emergency support for critical issues is available 24/7 for enterprise customers.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 9 */}
                <Section number="9" title="Regulatory Compliance">
                  <p>As a clinical research platform, we are committed to regulatory compliance:</p>
                  <ul>
                    <li><strong>Regulatory Compliance:</strong> Our platform supports applicable requirements for electronic records</li>
                    <li><strong>Healthcare Privacy:</strong> We maintain appropriate safeguards for protected health information</li>
                    <li><strong>GCP Guidelines:</strong> Our tools support Good Clinical Practice standards</li>
                    <li><strong>Data Integrity:</strong> We maintain data integrity principles throughout the platform</li>
                  </ul>
                  <p>Users are responsible for ensuring their use of the Services complies with all applicable regulations in their jurisdiction.</p>
                </Section>

                {/* Section 10 */}
                <Section number="10" title="Warranties and Disclaimers">
                  <SubSection title="10.1 Limited Warranty">
                    <p>
                      We warrant that our Services will perform substantially in accordance with our documentation under normal use conditions.
                    </p>
                  </SubSection>

                  <SubSection title="10.2 Disclaimers">
                    <div className="bg-surface/50 rounded-xl p-4 text-sm">
                      <p className="uppercase font-semibold mb-2">
                        EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                      </p>
                      <p>
                        We do not warrant that the Services will be error-free, secure, or available at all times. The Services are tools to assist in clinical research but do not replace professional medical judgment.
                      </p>
                    </div>
                  </SubSection>
                </Section>

                {/* Section 11 */}
                <Section number="11" title="Limitation of Liability">
                  <div className="bg-surface/50 rounded-xl p-4 text-sm space-y-3">
                    <p className="uppercase font-semibold">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TRIALCLINIQ BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
                    </p>
                    <p className="uppercase font-semibold">
                      OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT, OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                    </p>
                    <p>
                      Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.
                    </p>
                  </div>
                </Section>

                {/* Section 12 */}
                <Section number="12" title="Indemnification">
                  <p>
                    You agree to indemnify, defend, and hold harmless TrialClinIQ and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with:
                  </p>
                  <ul>
                    <li>Your use of the Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of another party</li>
                    <li>Your User Content</li>
                    <li>Your breach of any applicable laws or regulations</li>
                  </ul>
                </Section>

                {/* Section 13 */}
                <Section number="13" title="Termination">
                  <SubSection title="13.1 Termination by You">
                    <p>
                      You may terminate your account at any time by following the cancellation process in your account settings or contacting us.
                    </p>
                  </SubSection>

                  <SubSection title="13.2 Termination by Us">
                    <p>We may suspend or terminate your access to the Services immediately if you:</p>
                    <ul>
                      <li>Violate these Terms</li>
                      <li>Engage in illegal or harmful activities</li>
                      <li>Fail to pay applicable fees</li>
                      <li>Pose a security risk to our systems or other users</li>
                    </ul>
                  </SubSection>

                  <SubSection title="13.3 Effect of Termination">
                    <p>
                      Upon termination, your right to access the Services ceases immediately. We will provide you with a reasonable opportunity to export your data, subject to applicable legal and regulatory requirements.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 14 */}
                <Section number="14" title="Dispute Resolution">
                  <SubSection title="14.1 Governing Law">
                    <p>
                      These Terms are governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles.
                    </p>
                  </SubSection>

                  <SubSection title="14.2 Dispute Resolution Process">
                    <p>Any dispute arising from these Terms or your use of the Services shall be resolved through:</p>
                    <ul>
                      <li><strong>Informal Resolution:</strong> Contact us in writing to attempt resolution</li>
                      <li><strong>Mediation:</strong> If informal resolution fails, disputes shall be submitted to mediation</li>
                      <li><strong>Arbitration:</strong> If mediation fails, disputes shall be resolved through binding arbitration under the rules of the American Arbitration Association</li>
                    </ul>
                  </SubSection>

                  <SubSection title="14.3 Class Action Waiver">
                    <p>
                      You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 15 */}
                <Section number="15" title="Changes to Terms">
                  <p>We may modify these Terms at any time. Material changes will be communicated through:</p>
                  <ul>
                    <li>Email notification to your registered email address</li>
                    <li>Prominent notice on our platform</li>
                    <li>In-app notifications</li>
                  </ul>
                  <p>
                    Changes become effective 30 days after notice. Your continued use of the Services after the effective date constitutes acceptance of the modified Terms.
                  </p>
                </Section>

                {/* Section 16 */}
                <Section number="16" title="General Provisions">
                  <SubSection title="16.1 Entire Agreement">
                    <p>
                      These Terms, together with our Privacy Policy and any additional agreements, constitute the entire agreement between you and TrialClinIQ.
                    </p>
                  </SubSection>

                  <SubSection title="16.2 Severability">
                    <p>
                      If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                    </p>
                  </SubSection>

                  <SubSection title="16.3 Assignment">
                    <p>
                      You may not assign these Terms without our written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
                    </p>
                  </SubSection>

                  <SubSection title="16.4 Force Majeure">
                    <p>
                      Neither party shall be liable for any failure to perform due to unforeseen circumstances or causes beyond their reasonable control.
                    </p>
                  </SubSection>
                </Section>

                {/* Section 17 */}
                <Section number="17" title="Contact Information">
                  <p>For questions about these Terms of Service, please contact us:</p>
                  <div className="bg-surface/50 rounded-xl p-6 mt-4">
                    <p className="font-semibold text-navy mb-2">Legal Department</p>
                    <p className="mb-2">TrialClinIQ, Inc.</p>
                    <p className="mb-2">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:legal@trialcliniq.com" className="text-orange-500 hover:underline">
                        legal@trialcliniq.com
                      </a>
                    </p>
                    <p className="mb-0">
                      <strong>Response Time:</strong> We respond to legal inquiries within 5 business days
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
