import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Evan Ohemi",
  description:
    "Frontend Developer resume showcasing experience, skills, projects, and certifications.",
};

function ResumePage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl space-y-10">
          <SectionHeading name="Resume" />

          {/* Header */}
          <div className="space-y-2 border-b pb-6">
            <h2 className="text-3xl font-bold">Ohemi Evan</h2>

            <p className="text-muted-foreground">
              Frontend Developer • Lagos, Nigeria
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:ethaanfroost@gmail.com"
                className="hover:text-foreground"
              >
                ethaanfroost@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/evan-ohemi-bb2620410"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/FrostBlazeX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
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

            <div className="space-y-2">
              <p>
                <strong>Languages & Frameworks:</strong> JavaScript (ES6+),
                TypeScript, HTML5, CSS3, React.js, Next.js
              </p>

              <p>
                <strong>Practices & Tools:</strong> Responsive Design,
                Component-Based Architecture, Accessibility, Performance
                Optimization, Git, Vercel
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Experience</h3>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Frontend Developer — Numro</h4>

                <p className="text-sm text-muted-foreground">
                  Oxford, United Kingdom • March 2026 – Present
                </p>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  Collaborate remotely with the Lead Engineer and UI/UX Designer
                  to deliver a complete marketing site revamp, translating Figma
                  designs into responsive Next.js interfaces using Tailwind CSS.
                </li>

                <li>
                  Partner with product managers and designers to convert
                  business requirements into scalable, maintainable frontend
                  solutions.
                </li>

                <li>
                  Develop and optimize responsive, public-facing pages while
                  implementing a shared design system across desktop and mobile.
                </li>

                <li>
                  Build reusable UI components adopted across multiple pages,
                  improving design consistency and reducing duplicated code.
                </li>

                <li>
                  Contribute through a Git-based development workflow,
                  participating in pull requests and code reviews before
                  deployment.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Selected Projects</h3>

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold">
                  Storefront — Furniture E-Commerce Platform
                </h4>

                <p className="text-sm text-muted-foreground">
                  Next.js • React • TypeScript
                </p>

                <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                  <li>
                    Built a responsive e-commerce platform with reusable React
                    components and TypeScript-based logic.
                  </li>

                  <li>
                    Optimized layouts and navigation across desktop and mobile
                    devices.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  Forkify — Recipe Discovery Application
                </h4>

                <p className="text-sm text-muted-foreground">
                  JavaScript • HTML • CSS
                </p>

                <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                  <li>
                    Built a recipe search application with dynamic data
                    rendering and interactive UI.
                  </li>

                  <li>
                    Delivered a fully responsive experience across screen sizes.
                  </li>
                </ul>
              </div>
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
