import { Button } from "../ui/button";
import Container from "../ui/Container";
import Image from "next/image";
import { ProfileCard } from "./ProfileCard";
import Link from "next/link";

function Hero() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="grid gap-16 items-center lg:grid-cols-2">
          <div className="space-y-8">
            <ProfileCard />

            <Link href="/contact">
              <Button variant="animated" size="lg">
                Say Hello
              </Button>
            </Link>
          </div>

          <div className="flex justify-center">
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
