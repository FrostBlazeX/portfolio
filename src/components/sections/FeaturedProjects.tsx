import { projects } from "@/data/project";
import ProjectCard from "../projects/ProjectCard";
import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../shared/Reveal";

function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading name="Featured Projects" />
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
export default FeaturedProjects;
