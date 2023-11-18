import FAQ from "@/components/FAQ";
import Features from "@/components/landing-page/Features";
import GoogleReviews from "@/components/landing-page/Google-Reviews";
import HeroSection from "@/components/landing-page/HeroSection";
import LogoClouds from "@/components/SkillSection";
import Carousel from "@/components/landing-page/Swiper";
import WhoWeAre from "@/components/landing-page/Who-We-Are";
import HowWeWork from "@/components/How-We-Work";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoClouds />
      <HowWeWork />
      <WhoWeAre />
    <GoogleReviews />
      <Features />
      
      <Carousel />
      <FAQ />
    </div>
  );
}
