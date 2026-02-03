"use client";

import { SKILLS } from "@/data/config";
import { motion } from "framer-motion";

export function Skills() {
  const categories = ["frontend", "backend", "tools", "other"] as const;
  
  // Custom headers for distinctive look
  const categoryHeaders = {
    frontend: "Frontend_Interface",
    backend: "Backend_Architecture",
    tools: "DevOps_&_Tooling",
    other: "Languages_&_Core"
  };

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
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
           {/* Section Title - Left Column */}
          <div className="lg:col-span-3">
             <div className="sticky top-32">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <h2 className="text-6xl font-serif font-light mb-4">
                   Tech<br />
                   <span className="italic text-foreground/80">Stack</span>
                 </h2>
                 <p className="font-mono text-xs uppercase tracking-widest text-primary font-medium mt-2">
                   // CURRENT_PROFICIENCY
                 </p>
               </motion.div>
             </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:col-span-9 grid gap-20">
            {categories.map((category, idx) => {
              const categorySkills = SKILLS.filter((s) => s.category === category);
              if (!categorySkills.length) return null;

              return (
                <motion.div 
                  key={category} 
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="flex items-baseline gap-4 mb-8 border-b border-border pb-4">
                     <span className="font-mono text-sm text-primary font-bold">0{categories.indexOf(category) + 1}</span>
                     <h3 className="text-2xl font-serif text-foreground font-medium">
                       {categoryHeaders[category]}
                     </h3>
                  </div>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                  >
                    {categorySkills.map((skill) => (
                      <motion.div 
                        key={skill.name}
                        variants={itemVariants}
                        className="
                          relative pl-3 pr-4 py-2.5 
                          border border-border rounded-md
                          bg-card text-foreground font-medium
                          hover:border-primary hover:shadow-sm
                          transition-all duration-300
                          cursor-default flex items-center gap-2
                        "
                      >
                         <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                           {skill.name}
                         </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
