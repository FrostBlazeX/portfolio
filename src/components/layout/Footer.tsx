import Link from "next/link";
import SocialLinks from "../sections/SocialLinks";
import Container from "../ui/Container";
import Logo from "../sections/Logo";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer>
      <Container>
        <div className=" border-t py-14">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-4">
              <Logo />

              <p className="max-w-xs text-muted-foreground leading-relaxed">
                Frontend Developer building responsive, accessible, and
                performant web experiences.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold tracking-wide">Quick Links</h3>

              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group relative w-fit link-underline"
                  >
                    {link.name}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold tracking-wide">Connect</h3>

              <SocialLinks />

              <div className="space-y-2 text-muted-foreground">
                <a
                  href="mailto:ethaanfroost@gmail.com"
                  className="group relative w-fit"
                >
                  ethaanfroost@gmail.com
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full link-underline" />
                </a>

                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Evan Ohemi • All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
