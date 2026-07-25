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

          <div className="space-y-10">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  {group.category}
                </h3>

                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <li key={skill.name}>
                        <div className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 text-sm font-medium ring-1 ring-foreground/10 transition-colors hover:ring-primary/40">
                          <Icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                          <span>{skill.name}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Skills;
