import Reveal from "../shared/Reveal";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

function AboutPreview() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading name="About Me" />

          <div className=" flex max-w-4xl flex-col gap-6 md:gap-8">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              I'm Evan, a detail-oriented Frontend Developer presently located
              in Nigeria.
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey into frontend development started with a curiosity for
              how websites are built and a desire to create meaningful digital
              experiences. Over time, that curiosity grew into a passion for
              building responsive and accessible web applications.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Over the years, I've built responsive web applications, CMS-driven
              websites, and API-powered experiences using React, Next.js,
              TypeScript, and Tailwind CSS.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I enjoy transforming ideas and designs into accessible, performant
              user experiences while continuously learning and improving my
              skills with modern technologies.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default AboutPreview;
