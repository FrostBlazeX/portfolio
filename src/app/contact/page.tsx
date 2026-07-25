import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

const title = "Contact | Evan Ohemi";
const description =
  "Get in touch with Evan Ohemi for frontend development opportunities, freelance projects, and collaborations.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

const contactLinks = [
  {
    name: "Email",
    value: "evanohemi33@gmail.com",
    href: "mailto:evanohemi33@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "GitHub",
    value: "FrostBlazeX",
    href: "https://github.com/FrostBlazeX",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    value: "Evan Ohemi",
    href: "https://linkedin.com/in/evan-ohemi-bb2620410",
    icon: FaLinkedin,
  },
];

function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading name="Contact" />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Let's work together</h2>

            <p className="max-w-2xl text-muted-foreground">
              I'm currently open to frontend development opportunities,
              freelance projects, and collaborations. Feel free to reach out.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.name !== "Email" ? "_blank" : undefined}
                  rel={
                    contact.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                >
                  <Card className="group transition-colors hover:border-primary">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="rounded-md bg-muted p-3">
                        <Icon className="size-5 text-foreground" />
                      </div>

                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactPage;
