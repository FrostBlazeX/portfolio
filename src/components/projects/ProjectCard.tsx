import { Project } from "@/data/project";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="space-y-4">
        <div className=" relative overflow-hidden rounded-md">
          <Link href={`/projects/${project.slug}`}>
            <Image
              src={project.image}
              alt={project.name}
              width={1200}
              height={800}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <div
            className="
      absolute inset-0
      bg-black/0
      transition-colors duration-300
      group-hover:bg-black/5
    "
          />
        </div>

        <Badge
          variant="animated"
          className="w-fit transition-transform duration-300 group-hover:translate-x-1"
        >
          {project.category}
        </Badge>

        <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-5">
        <p className="text-sm text-muted-foreground">{project.description}</p>

        {/* Project metrics */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className=" flex-1 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 rounded-md px-3 py-2 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-md">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative z-20 mt-auto gap-4">
        {project.liveUrl && (
          <Button variant="animated">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}

        {project.githubUrl && (
          <Button variant="animated">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
