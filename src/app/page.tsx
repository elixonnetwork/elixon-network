import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AgentRegistry from "@/components/AgentRegistry";
import NetworkStats from "@/components/NetworkStats";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AgentRegistry />
      <NetworkStats />
    </>
  );
}
