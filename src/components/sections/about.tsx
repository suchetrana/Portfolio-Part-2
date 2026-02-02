"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/data/config";

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Narrative - 7 Columns */}
          <motion.div 
            className="lg:col-span-7 space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-none">
              Behind the <span className="italic text-secondary">Code</span>.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
               <p className="text-foreground text-2xl md:text-3xl font-serif italic mb-8 text-balance">
                 "{ABOUT_TEXT.headline}"
               </p>
               
               <p>{ABOUT_TEXT.intro} {ABOUT_TEXT.description}</p>
               
               <div className="space-y-6 pt-2">
                  {ABOUT_TEXT.bio.map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg text-muted-foreground/80">
                      {paragraph}
                    </p>
                  ))}
               </div>
            </div>
            
            <div className="pt-8">
               <a 
                 href={ABOUT_TEXT.resumeDriveUrl || ABOUT_TEXT.resumeUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest border border-foreground/20 px-8 py-4 rounded-sm hover:bg-secondary hover:border-secondary hover:text-background transition-all"
               >
                 [ Download_Resume ]
                 <span className="group-hover:translate-x-1 transition-transform">{"->"}</span>
               </a>
            </div>
          </motion.div>

          {/* Sidebar Info - 5 Columns */}
          <motion.div 
            className="lg:col-span-5 space-y-16 lg:pt-8 bg-muted/20 p-8 border-l-2 border-secondary/20 h-fit relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             {/* Tech Decoration */}
             <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-secondary" />
             <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-secondary" />

             {/* Education */}
             <div className="space-y-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-secondary flex items-center gap-2">
                  <span className="text-secondary text-base">#</span>
                  Education_History
                </h3>
                <div className="space-y-8 pl-4 border-l border-dashed border-border/50">
                  {ABOUT_TEXT.education.map((edu, idx) => (
                    <div key={idx} className="group relative">
                      <span className="absolute -left-[21px] top-2 w-2 h-2 rounded-none bg-background border border-secondary group-hover:bg-secondary transition-colors" />
                      <span className="font-mono text-xs text-muted-foreground block mb-1">{edu.year}</span>
                      <h4 className="font-serif text-lg text-foreground">{edu.school}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{edu.degree}</p>
                    </div>
                  ))}
                </div>
             </div>

             {/* Certifications */}
             <div className="space-y-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Certifications
                </h3>
                <ul className="space-y-4">
                  {ABOUT_TEXT.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-muted-foreground/80 group">
                      <span className="font-mono text-xs text-secondary/40 pt-1">0{idx + 1}</span>
                      <span className="group-hover:text-foreground transition-colors leading-relaxed border-b border-transparent group-hover:border-border">{cert}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
