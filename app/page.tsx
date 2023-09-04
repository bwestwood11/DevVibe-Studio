import ClientReviews from "@/components/ClientReviews";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import SkillSection from "@/components/SkillSection";
import Carousel from "@/components/Swiper";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillSection />
      <ClientReviews />
      <Carousel />
      <Features />
      <Portfolio />
      <FAQ />
    </div>
  );
}
