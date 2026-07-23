import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

function page() {
  return (
    <>
      <main>
        <Hero />
        <AboutPreview />
        <Skills />
        <Experience />
        <FeaturedProjects />
      </main>
    </>
  );
}
export default page;
