import { Card } from "@/components/ui/card";
import {
  Brain,
  Code2,
  Zap,
  TrendingUp,
} from "lucide-react";

const audiences = [
  {
    icon: Brain,
    title: "AI-Native Engineers",
    description: "Building the next generation of AI-powered applications",
  },
  {
    icon: Code2,
    title: "Developers Exploring Agents",
    description: "Experimenting with coding agents and autonomous systems",
  },
  {
    icon: Zap,
    title: "AI Workflow Experimenters",
    description: "Testing new AI development techniques and methodologies",
  },
  {
    icon: TrendingUp,
    title: "Future-Focused Builders",
    description: "Curious about the next evolution of software development",
  },
];

export function WhoThisIsFor() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Who This Community Is For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're building AI products or just getting started with
            agents, there's a place for you here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card
                key={index}
                className="p-8 rounded-xl border border-border bg-gradient-to-br from-muted/40 to-muted/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
              >
                <div className="inline-block p-3 rounded-lg bg-background mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
