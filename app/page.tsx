import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import About from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <PortfolioSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}
