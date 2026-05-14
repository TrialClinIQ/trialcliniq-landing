import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#waitlist", label: "Join Waitlist" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/trialcliniq_logo.svg"
              alt="TrialClinIQ"
              width={140}
              height={35}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social / Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@trialcliniq.com"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              hello@trialcliniq.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} TrialClinIQ. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
