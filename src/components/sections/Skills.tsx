import { skills } from "@/data/skills";
import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../shared/Reveal";

function Skills() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading name="Skills" />

          <ul className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2 text-lg">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Skills;
