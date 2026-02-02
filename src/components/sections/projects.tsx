"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/config";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Helper to get image URL safely
  const getProjectImage = (id: string) => {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return null;
    return project.image;
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Subtle Background Parallax Element */}
      <motion.div style={{ y }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-secondary/5 to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight">
            Selected Works<span className="text-secondary">.</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px w-24 bg-secondary/50" 
          />
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest pl-1">
            // Focussed on Java & Scalable Systems
          </p>
        </motion.div>

        <div className="flex flex-col relative z-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={project.liveUrl || project.githubUrl || "#"}
                target="_blank"
                className="group relative block border-t border-border/40 py-16 transition-all hover:bg-muted/30 -mx-6 px-6 md:mx-0 md:px-4"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col md:grid md:grid-cols-12 gap-6 items-baseline relative z-10 text-left">
                  {/* Index Number */}
                  <span className="hidden md:block col-span-1 font-mono text-xs text-muted-foreground mt-2 group-hover:text-accent transition-colors">
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="text-3xl md:text-5xl font-serif font-light text-foreground group-hover:italic transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack & Link */}
                  <div className="col-span-12 md:col-span-2 flex flex-col justify-between items-end h-full gap-4 md:gap-0">
                    <div className="flex flex-wrap gap-2 justify-end w-full">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border/50 px-2 py-1 rounded-sm group-hover:border-accent/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-border/40" />
        </div>
      </div>

      {/* Floating Image Reveal - Desktop Only */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 5, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden lg:block fixed pointer-events-none z-10 w-[500px] h-[350px] shadow-2xl rounded-sm overflow-hidden border border-border/20 grayscale hover:grayscale-0 transition-all"
            style={{
              top: "20%",
              right: "10%",
              transform: "translate(-50%, -50%)" 
            }}
          >
             {getProjectImage(hoveredProject) ? (
                 <Image 
                    src={getProjectImage(hoveredProject) as string} 
                    alt="Project Preview" 
                    fill
                    className="object-cover"
                    sizes="500px"
                 />
             ) : (
                <div className="w-full h-full bg-linear-to-br from-secondary/10 to-transparent flex items-center justify-center">
                    <span className="font-mono text-xs text-muted-foreground">NO_PREVIEW</span>
                </div>
             )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
