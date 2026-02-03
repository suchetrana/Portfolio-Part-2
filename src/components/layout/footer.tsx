"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from "@/data/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
              Crafting scalable digital experiences with clean code and modern architecture.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-foreground">Navigation</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-foreground">Connect</h3>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
             <span>Based in {SITE_CONFIG.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
