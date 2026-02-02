import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        
        {/* Brand & Rights */}
        <div className="space-y-4">
          <Link href="/" className="block">
            <h2 className="text-2xl font-serif font-light tracking-tight hover:italic transition-all">
              {SITE_CONFIG.name}<span className="text-accent">.</span>
            </h2>
          </Link>
          <div className="flex flex-col gap-1">
             <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
               Based in {SITE_CONFIG.location}
             </p>
             <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
               © {currentYear} // ALL_SYSTEM_RIGHTS_RESERVED
             </p>
          </div>
        </div>

        {/* Social - Horizontal List */}
        <div className="flex flex-wrap gap-8">
          {SOCIAL_LINKS.map((link) => (
             <a
               key={link.name}
               href={link.url}
               target="_blank"
               rel="noopener noreferrer"
               className="group flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
             >
               {link.name}
               <ArrowUpRight size={10} className="opacity-50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform text-accent" />
             </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
