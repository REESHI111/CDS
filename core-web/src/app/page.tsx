import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Vision from "@/components/home/Vision";
import Brands from "@/components/home/Brands";
import FeaturedWork from "@/components/home/FeaturedWork";
import Team from "@/components/home/Team";
import {
  getBrands,
  getCapabilities,
  getFeaturedProjects,
  getLeadershipVisible,
  getTeamMembers,
} from "@/lib/content";

export default async function Home() {
  const [capabilities, brands, projects, leadershipVisible, teamMembers] = await Promise.all([
    getCapabilities(),
    getBrands(),
    getFeaturedProjects(),
    getLeadershipVisible(),
    getTeamMembers(),
  ]);

  return (
    <div className="w-full">
      <Hero />
      {capabilities.length > 0 ? <Marquee capabilities={capabilities} /> : null}
      <Vision />
      {brands.length > 0 ? <Brands brands={brands} /> : null}
      {projects.length > 0 ? <FeaturedWork projects={projects} /> : null}
      {leadershipVisible && teamMembers.length > 0 ? <Team members={teamMembers} /> : null}
    </div>
  );
}
