"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import Reveal from "../shared/Reveal";

function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const experience = experiences[activeExperience];
  return (
    <div>
      <Section>
        <Container>
          <Reveal>
            <SectionHeading name="Professional Experience" />
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
              <div className="flex overflow-x-auto md:flex-col md:min-w-45 gap-1 ">
                <div
                  key={activeExperience}
                  className="w-full md:min-w-50 shrink-0"
                >
                  {experiences.map((exp, index) => (
                    <button
                      key={exp.company}
                      onClick={() => setActiveExperience(index)}
                      aria-selected={activeExperience === index}
                      className={cn(
                        "w-full text-left py-3.5 transition-colors animate-in fade-in duration-300",
                        activeExperience === index
                          ? "border-l-2 border-foreground bg-muted/50 font-semibold text-foreground pl-4 transition-all duration-200"
                          : "border-l-2 border-transparent text-muted-foreground pl-4",
                      )}
                    >
                      {exp.company}
                    </button>
                  ))}
                </div>
              </div>
              <div className="max-w-4xl">
                <div
                  key={activeExperience}
                  className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <h3 className="text-3xl font-semibold tracking-tight">
                    {experience.role}
                  </h3>

                  <p className="text-muted-foreground text-lg">
                    {experience.company} • {experience.period}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 text-lg"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-5">
                    {experience.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-muted-foreground leading-relaxed text-lg"
                      >
                        <span className="mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
export default Experience;
