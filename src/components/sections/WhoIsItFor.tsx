import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Layers, Lightbulb, Rocket, Users } from "lucide-react"

const personas = [
  {
    icon: Code2,
    title: "Full-stack Engineers",
    description: "Adding AI capabilities to existing products or building AI-first apps from scratch.",
    tags: ["React", "Node.js", "APIs"],
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Cpu,
    title: "ML/AI Engineers",
    description: "Working on model fine-tuning, evaluation, or deploying models into production systems.",
    tags: ["PyTorch", "HuggingFace", "MLOps"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Layers,
    title: "Platform Engineers",
    description: "Building the infrastructure that powers AI products — observability, scale, cost.",
    tags: ["DevOps", "Cloud", "Infra"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Lightbulb,
    title: "Technical Founders",
    description: "Shipping AI products fast. Need to know what works, what's a trap, and what's next.",
    tags: ["Product", "Startup", "Ship"],
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Rocket,
    title: "Indie Hackers",
    description: "Solo builders using AI as a force multiplier to ship projects they couldn't alone.",
    tags: ["Automation", "Tools", "Solo"],
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Engineering Leads",
    description: "Helping their team adopt AI tooling pragmatically — and staying sharp themselves.",
    tags: ["Teams", "Process", "Standards"],
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
]

export function WhoIsItFor() {
  return (
    <section className="py-24 lg:py-32 relative bg-card/20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-muted-foreground">
            Who's this for
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Made for{" "}
            <span className="gradient-text">engineers who ship</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you write code and want to build better things with AI — this is your community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <Card
                key={persona.title}
                className="group transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className={`w-10 h-10 rounded-lg ${persona.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${persona.color}`} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{persona.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {persona.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
