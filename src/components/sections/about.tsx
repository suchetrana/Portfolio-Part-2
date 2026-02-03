"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT, SKILLS } from "@/data/config";
import { BookOpen, Code, GraduationCap, Award, Download, Cpu, Globe, Database } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return <Globe className="w-4 h-4" />;
      case 'backend': return <Database className="w-4 h-4" />;
      case 'tools': return <Cpu className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-background/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
           className="space-y-12 max-w-7xl mx-auto"
        >
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/40">
            <div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                About Me
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl">
                {ABOUT_TEXT.headline}
              </motion.p>
            </div>
            <motion.a 
              variants={itemVariants}
              href={ABOUT_TEXT.resumeDriveUrl || ABOUT_TEXT.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bio Card - Spans 2 cols */}
            <motion.div variants={itemVariants} className="md:col-span-2 bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-primary">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">My Journey</h3>
              </div>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                 <p className="text-lg text-foreground font-medium mb-4">
                   {ABOUT_TEXT.intro} {ABOUT_TEXT.description}
                 </p>
                 {ABOUT_TEXT.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                 ))}
              </div>
            </motion.div>

            {/* Education Card - Spans 1 col */}
            <motion.div variants={itemVariants} className="md:col-span-1 bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6 text-primary">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6 flex-1">
                {ABOUT_TEXT.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-primary/20 pb-2 last:pb-0">
                    <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <span className="text-xs font-mono text-primary font-bold tracking-wider uppercase mb-1 block">
                      {edu.year}
                    </span>
                    <h4 className="font-bold text-foreground leading-tight mb-1">{edu.school}</h4>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills - Spans full width */}
            <motion.div variants={itemVariants} className="md:col-span-3 bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8 text-primary">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Technical Arsenal</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {['frontend', 'backend', 'tools', 'other'].map((category) => {
                   const categorySkills = SKILLS.filter(s => s.category === category);
                   if (categorySkills.length === 0) return null;

                   return (
                    <div key={category} className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
                        {getCategoryIcon(category)}
                        {category}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                   );
                })}
              </div>
            </motion.div>

            {/* Certifications - Spans full width */}
            <motion.div variants={itemVariants} className="md:col-span-3 bg-linear-to-br from-card to-secondary/10 border border-border/50 rounded-3xl p-8 shadow-sm">
               <div className="flex items-center gap-3 mb-8 text-primary">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certifications & Achievements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {ABOUT_TEXT.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                       <Award className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                       <span className="font-medium text-foreground/90">{cert}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
