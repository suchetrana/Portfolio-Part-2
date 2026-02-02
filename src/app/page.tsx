"use client";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { StaggerWrapper, Reveal } from "@/components/ui/motion-wrapper";

export default function Home() {
  return (
    <StaggerWrapper className="w-full">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </StaggerWrapper>
  );
}
