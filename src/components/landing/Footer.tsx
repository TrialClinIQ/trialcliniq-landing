"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "#about", label: "About TrialClinIQ" },
      { href: "#solutions", label: "Our Solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#about", label: "Features" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About Us" },
      { href: "#contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a3a6b" }} className="text-white">
      {/* Main Footer Content */}
      <Container>
        <div className="py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left Column - CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md">
              Have questions? Want to explore pricing or next steps?
              Connect with a specialist today. Our team is here to help.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-bold text-lg mb-4 border-b border-white/20 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="TrialClinIQ"
                width={300}
                height={100}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>

            {/* Footer Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              <Link
                href="#privacy"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Privacy Policies
              </Link>
              <Link
                href="#terms"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/50">
              ©{new Date().getFullYear()} TrialClinIQ – All Rights Reserved.
            </p>
          </div>
        </div>
        </div>
      </Container>
    </footer>
  );
}
