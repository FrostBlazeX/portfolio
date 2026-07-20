import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const techStack = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"];

function AboutPage() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeading name="About" />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get to know me</h2>

            <div className="max-w-3xl space-y-4 text-muted-foreground">
              <p>
                Hi, I'm Evan, a Frontend Developer based in Nigeria with a
                passion for building responsive, accessible, and user-focused
                web applications.
              </p>

              <p>
                I enjoy turning ideas into clean, functional, and engaging
                digital experiences. With a solid foundation in JavaScript and
                experience across its modern ecosystem, I can quickly adapt to
                different frameworks and technologies to deliver solutions that
                meet each project's unique needs.
              </p>

              <p>
                I'm someone who enjoys continuous learning, reading, and solving
                challenging problems. Whether I'm debugging a complex issue or
                learning a new technology, I find satisfaction in understanding
                how things work and creating solutions that make an impact.
              </p>

              <p>
                When I'm not coding, you'll probably find me watching football,
                reading, listening to music, or exploring new technologies and
                ideas on the web.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techStack.map((tech) => (
                <Card
                  key={tech}
                  className="transition-colors hover:border-primary"
                >
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="font-medium">{tech}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutPage;
