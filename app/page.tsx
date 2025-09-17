import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import About from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <PortfolioSection />
    </>
  );
}
