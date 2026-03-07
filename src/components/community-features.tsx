import { Card } from "@/components/ui/card";
import { Zap, Lightbulb, Code } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "AI Development Workflows",
    description:
      "Explore real-world AI coding workflows used by developers to ship faster.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Lightbulb,
    title: "AI Tech Explained",
    description:
      "Simple breakdowns of new AI technologies and tools that developers should actually care about.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Zap,
    title: "Build With AI",
    description:
      "Experiments with coding agents, new frameworks, and AI-native development stacks.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
];

export function CommunityFeatures() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What You'll Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a community focused on practical AI development and real-world
            applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`p-6 rounded-xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer group`}
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-background/50 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
