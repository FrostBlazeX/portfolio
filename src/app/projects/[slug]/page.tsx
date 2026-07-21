import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProjectBySlug } from "@/data/project";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] pb-6">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionHeading name={project.name} />

              <Badge variant="outline" className="w-fit">
                {project.category}
              </Badge>
            </div>

            <Image
              src={project.image}
              alt={project.name}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 400px"
              className="w-full rounded-lg border object-cover shadow-sm"
            />

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Overview</h2>

              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <Card className="sticky top-24 self-start">
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 font-medium">Technology Stack</h3>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 font-medium">Key Features</h3>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-medium">Challenges</h3>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>• {challenge}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Live Demo</Button>
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      GitHub
                    </Button>
                  </a>
                )}
              </div>
              <Link
                href="/projects"
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                ← Back to Projects
              </Link>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export default SlugPage;
