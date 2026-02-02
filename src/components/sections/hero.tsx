"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT, SITE_CONFIG } from "@/data/config";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // Sharp, mechanical ease
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-grid-pattern" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Primary Headline */}
            <div className="overflow-hidden">
              <motion.h1 
                variants={itemVariants}
                className="text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] tracking-tight"
              >
                {ABOUT_TEXT.intro} <br />
                <span className="italic text-muted-foreground font-serif">{SITE_CONFIG.name}</span>.
                <br /> 
                <span className="text-4xl md:text-6xl lg:text-7xl block mt-4 text-foreground/80">
                  {ABOUT_TEXT.headline}
                </span>
              </motion.h1>
            </div>

            {/* Technical Divider */}
            <motion.div 
              variants={{
                hidden: { scaleX: 0, originX: 0 },
                visible: { scaleX: 1, transition: { duration: 1, delay: 0.5, ease: "circOut" } }
              }}
              className="h-px bg-border w-full mt-8" 
            />

            {/* Sub-content */}
            <div className="flex flex-col md:flex-row items-end md:items-start justify-between gap-12 pt-8">
              <motion.div variants={itemVariants} className="max-w-md">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                  {ABOUT_TEXT.description}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                 <span className="w-2 h-2 bg-secondary rounded-none animate-pulse" /> {/* Square = Technical */}
                 Based in {SITE_CONFIG.location} <span className="hidden md:inline">•</span> <span className="hidden md:inline">Available Worldwide</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

       {/* Scroll Indicator - Mechanical Line */}
       <motion.div 
         initial={{ opacity: 0, height: 0 }}
         animate={{ opacity: 1, height: "6rem" }}
         transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
         className="absolute bottom-0 right-8 md:right-12 w-px bg-border hidden md:block"
       />
       
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.4, duration: 1 }}
         className="absolute bottom-12 right-12 md:right-16 hidden md:block"
       >
         <span className="font-mono text-[10px] tracking-widest uppercase -rotate-90 origin-bottom-right absolute bottom-0 right-0 text-muted-foreground/60">
            System_Scroll
         </span>
       </motion.div>
    </section>
  );
}
