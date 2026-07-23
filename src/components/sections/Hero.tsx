import { Button } from "../ui/button";
import Container from "../ui/Container";
import Image from "next/image";
import { ProfileCard } from "./ProfileCard";
import Link from "next/link";

function Hero() {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="space-y-8">
            <ProfileCard />

            <Link href="/contact">
              <Button variant="animated" size="lg">
                Say Hello
              </Button>
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/profile.jpeg"
              alt="Evan Ohemi"
              width={384}
              height={384}
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="h-72 w-72 rounded-2xl object-cover shadow-sm md:h-96 md:w-96"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Hero;
