"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const experience = experiences[activeExperience];

  return (
    <Section>
      <Container>
        <SectionHeading name="Professional Experience" />

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          {/* Left */}
          <div className="flex overflow-x-auto gap-1 md:min-w-45 md:flex-col">
            <div
              role="tablist"
              aria-label="Professional Experience"
              className="w-full shrink-0 md:min-w-50"
            >
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  role="tab"
                  id={`tab-${index}`}
                  aria-controls={`panel-${index}`}
                  aria-selected={activeExperience === index}
                  onClick={() => {
                    if (activeExperience !== index) {
                      setActiveExperience(index);
                    }
                  }}
                  className={cn(
                    "w-full py-3.5 pl-4 text-left transition-colors",
                    activeExperience === index
                      ? "border-l-2 border-foreground bg-muted/50 font-semibold text-foreground"
                      : "border-l-2 border-transparent text-muted-foreground",
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            role="tabpanel"
            id={`panel-${activeExperience}`}
            aria-labelledby={`tab-${activeExperience}`}
            className="max-w-4xl space-y-10"
          >
            <h3 className="text-3xl font-semibold tracking-tight">
              {experience.role}
            </h3>

            <p className="text-lg text-muted-foreground">
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

            <ul className="space-y-6">
              {experience.achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-lg leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Experience;
