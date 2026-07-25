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
            <h2 className="text-lg font-medium tracking-tight md:text-xl">
              I’m Evan — a Frontend Developer in Nigeria who turns curiosity
              about how the web works into responsive, accessible applications
              people actually enjoy using.
            </h2>

            <p className="text-lg leading-relaxed">
              I build with React, Next.js, TypeScript, and Tailwind CSS — from
              CMS-driven websites to API-powered products, always aiming for
              performance and accessibility.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond the code, I’m continuously learning — staying close to
              modern tools and pushing my craft forward.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default AboutPreview;
