import FAQ from "@/components/FAQ";
import Features from "@/components/landing-page/Features";
import GoogleReviews from "@/components/landing-page/Google-Reviews";
import HeroSection from "@/components/landing-page/HeroSection";
import LogoClouds from "@/components/landing-page/SkillSection";
import WhoWeAre from "@/components/landing-page/Who-We-Are";
import HowWeWork from "@/components/landing-page/How-We-Work";
import RecentWork from "@/components/landing-page/Recent-Work";
import VideoTestimonial from "@/components/landing-page/Video-Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoClouds />
      <HowWeWork />
      <WhoWeAre />
      <GoogleReviews />
      <RecentWork />
      <VideoTestimonial />
      <Features />
      <FAQ />
    </div>
  );
}
