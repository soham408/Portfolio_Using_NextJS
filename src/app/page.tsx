import HeroSection from "@/components/HeroSection";
import { ProjectsShowcase } from "@/components/project-card";
import TechStackShowcase from "@/components/TechstackShowcase"

export default function Home() {
  return (
    <>
    <HeroSection />
    <ProjectsShowcase />
    <TechStackShowcase />
    </>
  );
}
