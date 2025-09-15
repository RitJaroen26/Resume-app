import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import About from "@/components/AboutSection";
import Skills from "@/components/SkillsSection";
import Portfolio from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <Skills />
      <Portfolio />
    </>
  );
}
