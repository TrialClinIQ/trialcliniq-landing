"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "chc", label: "Community Health Center" },
  { id: "sponsor", label: "Sponsor" },
  { id: "cro", label: "CRO" },
];

interface FormData {
  name: string;
  organization: string;
  email: string;
  role: string;
  message: string;
  type: string;
}

export function WaitlistForm() {
  const [activeTab, setActiveTab] = useState("chc");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    role: "",
    message: "",
    type: "chc",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setFormData((prev) => ({ ...prev, type: tabId }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        name: "",
        organization: "",
        email: "",
        role: "",
        message: "",
        type: activeTab,
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="waitlist" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Join the Waitlist
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Be among the first to access TrialClinIQ when we launch
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all",
                    activeTab === tab.id
                      ? "bg-white text-foreground shadow-sm"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                  placeholder="Your organization"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                  placeholder="you@organization.com"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                  placeholder="Your role"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all resize-none"
                placeholder="Tell us about your interest in TrialClinIQ..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Join Waitlist"}
            </Button>

            {status === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                Thank you for joining the waitlist! We&apos;ll be in touch soon.
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
