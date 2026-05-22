import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrialClinIQ",
  description: "Clinical trial recruitment data infrastructure connecting sponsors and health systems through AI-powered patient matching using real-world health records",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
        {/* Google reCAPTCHA Enterprise */}
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LcYfvcsAAAAAJ8qpmFJYz9tj4YV_e1XV_GttCZF"
          strategy="lazyOnload"
        />
        {/* Pipedrive LeadBooster Chatbot */}
        <Script id="pipedrive-config" strategy="lazyOnload">
          {`
            window.pipedriveLeadboosterConfig = {
              base: 'leadbooster-chat.pipedrive.com',
              companyId: 13909736,
              playbookUuid: '87642ef8-9b61-4dc6-9fb9-22c8a2bcbcff',
              version: 2
            };
            (function () {
              var w = window;
              if (w.LeadBooster) {
                console.warn('LeadBooster already exists');
              } else {
                w.LeadBooster = {
                  q: [],
                  on: function (n, h) {
                    this.q.push({ t: 'o', n: n, h: h });
                  },
                  trigger: function (n) {
                    this.q.push({ t: 't', n: n });
                  },
                };
              }
            })();
          `}
        </Script>
        <Script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
