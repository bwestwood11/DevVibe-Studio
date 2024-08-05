import FAQ from "@/components/landing-page/FAQ";
import Features from "@/components/landing-page/Features";
import { MarqueeReviews } from "@/components/landing-page/Google-Reviews";
import HeroSection from "@/components/landing-page/HeroSection";
import LogoClouds from "@/components/landing-page/SkillSection";
import WhoWeAre from "@/components/landing-page/Who-We-Are";
import HowWeWork from "@/components/landing-page/How-We-Work";
import RecentWork from "@/components/landing-page/Recent-Work";
import VideoTestimonial from "@/components/landing-page/Video-Testimonial";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <LogoClouds />
      <HowWeWork />
      <WhoWeAre />
      <RecentWork /> 
      <MarqueeReviews />
      <VideoTestimonial />
      <Features />
      <FAQ />
    </div>
  );
}
