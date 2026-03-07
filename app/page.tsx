import { Hero } from "@/components/hero";
import { CommunityFeatures } from "@/components/community-features";
import { WhatsInside } from "@/components/whats-inside";
import { Newsletter } from "@/components/newsletter";
import { WhoThisIsFor } from "@/components/who-this-is-for";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Hero />
      <CommunityFeatures />
      <WhatsInside />
      <WhoThisIsFor />
      <Newsletter />
      <FinalCTA />
    </main>
  );
}
