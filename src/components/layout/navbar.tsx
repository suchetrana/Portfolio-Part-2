"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/config";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid hydration mismatch - render a minimal placeholder
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-8 bg-transparent">
        <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <span className="text-lg font-medium tracking-tight font-serif">
            {SITE_CONFIG.name}<span className="text-accent">.</span>
          </span>
        </nav>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
          : "py-8 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - Textual Identity */}
        <Link
          href="/"
          className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity font-serif"
        >
          {SITE_CONFIG.name}<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation - Minimal */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-secondary/50 group-hover:text-secondary transition-colors">0{index + 1}</span>
              <span>// {link.label}</span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 mr-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
             {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <div className="w-px h-6 bg-border/50 mx-4" />

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="px-6 py-2 border border-border/50 rounded-none font-mono text-xs uppercase tracking-widest hover:bg-secondary hover:text-white hover:border-secondary transition-all"
          >
           Contact_Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 flex items-center justify-center",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif font-light text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsMobileMenuOpen(false);
              }}
              className="mt-8 flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === "dark" ? "Switch_to_Light" : "Switch_to_Dark"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
