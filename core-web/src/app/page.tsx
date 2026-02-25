import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Vision from "@/components/home/Vision";
import Brands from "@/components/home/Brands";
import FeaturedWork from "@/components/home/FeaturedWork";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Marquee />
      <Vision />
      <Brands />
      <FeaturedWork />
      <Team />
    </div>
  );
}
