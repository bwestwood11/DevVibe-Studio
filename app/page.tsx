import FAQ from "@/components/FAQ";
import Features from "@/components/landing-page/Features";
import GoogleReviews from "@/components/landing-page/Google-Reviews";
import HeroSection from "@/components/landing-page/HeroSection";
import LogoClouds from "@/components/landing-page/SkillSection";
import Carousel from "@/components/landing-page/Swiper";
import WhoWeAre from "@/components/landing-page/Who-We-Are";
import HowWeWork from "@/components/landing-page/How-We-Work";
import RecentWork from "@/components/landing-page/Recent-Work";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoClouds />
      <HowWeWork />
      <WhoWeAre />
      <GoogleReviews />
      <RecentWork />
      <Features />

      {/* <Carousel /> */}
      <FAQ />
    </div>
  );
}
