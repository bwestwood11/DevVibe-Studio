import BigCTA from "@/components/Big-CTA";
import ClientReviews from "@/components/ClientReviews";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import GoogleReviews from "@/components/Google-Reviews";
import Hero2 from "@/components/Hero2";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import LogoClouds from "@/components/SkillSection";
import Stats from "@/components/Stats";
import Carousel from "@/components/Swiper";
import WhoWeAre from "@/components/Who-We-Are";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoClouds />
      <WhoWeAre />
      <Stats />
      <Features />
      <Carousel />
      <GoogleReviews />
      <BigCTA />
      <FAQ />
    </div>
  );
}
