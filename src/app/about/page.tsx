import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { flatSkills } from "@/data/skills";

function AboutPage() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeading name="About" />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get to know me</h2>

            <div className="max-w-3xl text-lg space-y-4 text-muted-foreground">
              <p>
                Hi, I’m Evan — a Frontend Developer based in Nigeria, passionate
                about building responsive, accessible, and user-focused web
                applications.
              </p>

              <p>
                I enjoy turning ideas into clean, functional, engaging digital
                experiences. With a solid foundation in JavaScript and
                experience across its modern ecosystem, I adapt quickly to new
                frameworks and technologies to deliver solutions tailored to
                each project’s needs.
              </p>

              <p>
                I’m driven by continuous learning and a love for solving hard
                problems — whether that’s debugging a tricky issue or picking up
                a new technology, I find real satisfaction in understanding how
                things work and building solutions that make an impact.
              </p>

              <p>
                Outside of code, you’ll find me watching football, reading,
                listening to music, or exploring new ideas and technologies
                online.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {flatSkills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <Card
                    key={skill.name}
                    className="transition-colors hover:border-primary"
                  >
                    <CardContent className="flex items-center justify-center gap-3 p-6">
                      <Icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutPage;
