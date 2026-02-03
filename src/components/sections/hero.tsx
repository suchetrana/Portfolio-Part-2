"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ABOUT_TEXT, SITE_CONFIG, SOCIAL_LINKS } from "@/data/config";
import Link from "next/link";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { SparklesCore } from "@/components/ui/sparkles";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  const SocialIcon = ({ name }: { name: string }) => {
    switch (name) {
      case 'GitHub': return <Github className="w-5 h-5" />;
      case 'LinkedIn': return <Linkedin className="w-5 h-5" />;
      case 'Twitter': return <Twitter className="w-5 h-5" />;
      case 'Email': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-background text-foreground">
      {/* Sparkles Background Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#3b82f6"
          speed={2}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/20 to-background pointer-events-none z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center md:items-start space-y-8"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium tracking-wide uppercase border border-border/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for work
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
                Hi, I'm{" "}
                <PointerHighlight containerClassName="inline-flex align-bottom">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{SITE_CONFIG.name}</span>
                </PointerHighlight>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
                {ABOUT_TEXT.headline}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {ABOUT_TEXT.description}
              </p>
            </motion.div>

            {/* CTA Buttons & Socials */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 pt-4 w-full md:w-auto">
              <div className="flex gap-4 w-full md:w-auto">
                <Link 
                  href="#projects" 
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 flex-1 md:flex-none"
                >
                  <span className="mr-2">View My Work</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                {ABOUT_TEXT.resumeDriveUrl && (
                  <a 
                    href={ABOUT_TEXT.resumeDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 font-medium transition-colors hover:bg-accent hover:text-accent-foreground flex-1 md:flex-none"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                )}
              </div>

               {/* Social Icons */}
               <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6 w-full md:w-auto justify-center md:justify-start">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary/50 rounded-full"
                      aria-label={link.name}
                    >
                      <SocialIcon name={link.name} />
                    </a>
                  ))}
               </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
      {/* Decorative Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/10 dark:bg-blue-400/5 blur-[100px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
