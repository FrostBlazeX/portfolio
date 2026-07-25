import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/project";
import type { Metadata } from "next";

const title = "Projects | Evan Ohemi";
const description =
  "A collection of web applications and frontend projects built by Evan Ohemi using React, TypeScript, Next.js, and JavaScript.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

function ProjectsPage() {
  return (
    <Section>
      <Container>
        <div className="mb-8">
          <SectionHeading name="Projects" />

          <p className="text-muted-foreground">
            A collection of web applications and frontend projects built using
            modern technologies such as React, TypeScript, Next.js, and
            JavaScript.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default ProjectsPage;
