import BigCTA from "@/components/landing-page/Big-CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/landing-page/Features";
import GoogleReviews from "@/components/landing-page/Google-Reviews";
import HeroSection from "@/components/landing-page/HeroSection";
import LogoClouds from "@/components/SkillSection";
import Stats from "@/components/landing-page/Stats";
import Carousel from "@/components/landing-page/Swiper";
import WhoWeAre from "@/components/landing-page/Who-We-Are";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoClouds />
      <WhoWeAre />
      <Stats />
      <Features />
      <GoogleReviews />
      <Carousel />
      <BigCTA />
      <FAQ />
    </div>
  );
}
