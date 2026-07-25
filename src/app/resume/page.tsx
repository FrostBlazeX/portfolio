import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { getProjectBySlug } from "@/data/project";

const title = "Resume | Evan Ohemi";
const description =
  "Frontend Developer resume showcasing experience, skills, projects, and certifications.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

// Hand-picked highlights matching the downloadable PDF resume, kept separate
// from the card-oriented copy in data/project.ts.
const selectedProjects = [
  {
    slug: "store-front",
    techStack: ["Next.js", "React", "TypeScript"],
    bullets: [
      "Built a responsive e-commerce platform with reusable React components and TypeScript-based logic.",
      "Optimized layouts and navigation across desktop and mobile devices.",
    ],
  },
  {
    slug: "forkify-project",
    techStack: ["JavaScript", "HTML", "CSS"],
    bullets: [
      "Built a recipe search application with dynamic data rendering and interactive UI.",
      "Delivered a fully responsive experience across screen sizes.",
    ],
  }
]
  .map(({ slug, ...rest }) => {
    const project = getProjectBySlug(slug);
    return project ? { ...rest, project } : null;
  })
  .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

function ResumePage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl space-y-10">
          <SectionHeading name="Resume" />

          {/* Header */}
          <div className="space-y-3 border-b pb-6">
            <h2 className="text-3xl font-bold">{profile.name}</h2>

            <p className="text-muted-foreground">
              {profile.title} • Lagos, Nigeria
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:evanohemi33@gmail.com"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <FaEnvelope className="h-4 w-4" />
                evanohemi33@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/evan-ohemi-bb2620410"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href="https://github.com/FrostBlazeX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <a
              href="/resume/Evan-Ohemi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="animated" className="mt-4">
                Download Resume PDF
              </Button>
            </a>
          </div>

          {/* Summary */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Professional Summary</h3>

            <p className="leading-relaxed text-muted-foreground">
              Frontend Developer with hands-on experience building responsive,
              high-performance web applications using React, TypeScript, and
              Next.js. Translates business and design requirements into
              scalable, component-based solutions while collaborating with
              cross-functional teams to deliver reliable, user-focused products.
            </p>
          </section>

          {/* Skills */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Skills</h3>

            <div className="space-y-3">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="flex flex-wrap items-baseline gap-2"
                >
                  <span className="shrink-0 text-sm font-semibold">
                    {group.category}:
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="rounded-md"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Experience</h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.company} className="space-y-3">
                  <div>
                    <h4 className="font-semibold">
                      {exp.role} — {exp.company}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {exp.location} • {exp.period}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    {exp.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Selected Projects</h3>

            <div className="space-y-5">
              {selectedProjects.map(({ project, techStack, bullets }) => (
                <div key={project.slug} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold">
                      {project.name} — {project.description}
                    </h4>

                    <div className="flex gap-3 text-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                        >
                          <FaGithub className="h-3.5 w-3.5" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>

            <div>
              <h4 className="font-semibold">B.Sc. Ed., Biology Education</h4>

              <p className="text-muted-foreground">
                University of Ilorin • 2021
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Certifications</h3>

            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Complete React, Next.js & TypeScript Projects (2025)</li>
              <li>The Complete JavaScript Course (2025)</li>
              <li>Understanding TypeScript</li>
              <li>Build Responsive Real-World Websites with HTML & CSS</li>
            </ul>
          </section>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default ResumePage;
