import { Hero } from "@/components/hero";
import { CommunityFeatures } from "@/components/community-features";
import { WhatsInside } from "@/components/whats-inside";
import { Newsletter } from "@/components/newsletter";
import { WhoThisIsFor } from "@/components/who-this-is-for";
import { FinalCTA } from "@/components/final-cta";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>
      <Hero />
      <CommunityFeatures />
      <WhatsInside />
      <WhoThisIsFor />
      <Newsletter />
      <FinalCTA />
    </main>
  );
}

export default App;
