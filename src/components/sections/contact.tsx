"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Header & Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-light leading-none mb-6">
                Start a <br /><span className="italic text-secondary-foreground/60">Transmission</span>.
              </h2>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                // STATUS: OPEN_FOR_WORK
              </p>
            </div>

            <div className="space-y-8 py-8 border-y border-border/50">
              <div className="group">
                <span className="font-mono text-xs text-muted-foreground block mb-2">TARGET_COORDINATES // EMAIL</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-xl md:text-2xl font-light hover:text-accent transition-colors flex items-center gap-2"
                >
                  {SITE_CONFIG.email}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-accent" size={20} />
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-muted-foreground block mb-2">BASE_STATION // LOC</span>
                <p className="text-xl md:text-2xl font-light">{SITE_CONFIG.location}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Initiate communication protocol for collaborations, inquiries, or system diagnostics. All frequencies open.
            </p>
          </div>

          {/* Technical Form */}
          <form onSubmit={handleSubmit} className="space-y-0 border border-border bg-background">
            <div className="border-b border-border p-0">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-6 py-8 bg-transparent focus:bg-muted/5 outline-none font-serif text-xl placeholder:text-muted-foreground/50 transition-colors"
                placeholder="IDENTIFIER_NAME"
              />
            </div>

            <div className="border-b border-border p-0">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-6 py-8 bg-transparent focus:bg-muted/5 outline-none font-serif text-xl placeholder:text-muted-foreground/50 transition-colors"
                placeholder="RETURN_ADDRESS_EMAIL"
              />
            </div>

            <div className="border-b border-border p-0">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={6}
                className="w-full px-6 py-8 bg-transparent focus:bg-muted/5 outline-none font-serif text-xl placeholder:text-muted-foreground/50 transition-colors resize-none"
                placeholder="DATA_PACKET_CONTENT..."
              />
            </div>

            <div className="p-6 flex items-center justify-between bg-muted/10">
               <div className="flex-1">
                {submitStatus === "success" && (
                  <p className="font-mono text-xs text-secondary-foreground animate-pulse">
                     {">>"} TRANSMISSION_SUCCESSFUL
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="font-mono text-xs text-accent animate-pulse">
                     {">>"} ERROR: CONNECTION_FAILED
                  </p>
                )}
               </div>
               
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group relative px-8 py-3 bg-foreground text-background 
                  font-mono text-sm uppercase tracking-widest 
                  hover:bg-accent hover:text-foreground transition-colors
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {isSubmitting ? "SENDING..." : "TRANSMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
