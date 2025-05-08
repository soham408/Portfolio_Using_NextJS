import HeroSection from "@/components/HeroSection";
import { ProjectsShowcase } from "@/components/project-card";
import TechStackShowcase from "@/components/TechstackShowcase"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <HeroSection />
    <ProjectsShowcase />
    <TechStackShowcase />
    <Footer />
    </>
  );
}
