import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, BookOpen, Hammer } from "lucide-react"

const features = [
  {
    icon: GitBranch,
    badge: "Workflows",
    title: "AI Development Workflows",
    description:
      "Battle-tested pipelines for real products. From prompt engineering to agentic systems — see how engineers actually structure their AI projects.",
    highlights: ["Prompt design patterns", "Agent orchestration", "Evaluation frameworks"],
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: BookOpen,
    badge: "Deep Dives",
    title: "AI Tech Explained",
    description:
      "No hype, no fluff. Clear explanations of models, architectures, APIs, and tools — with the context you need to actually use them.",
    highlights: ["Model comparisons", "Architecture breakdowns", "API best practices"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Hammer,
    badge: "Building",
    title: "Build With AI",
    description:
      "End-to-end build guides. Products, tools, automations — made by community members who shipped something real and documented the journey.",
    highlights: ["Project walkthroughs", "Open source builds", "Stack recommendations"],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
]

export function Features() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.05),transparent)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-muted-foreground">
            What we cover
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to build{" "}
            <span className="gradient-text">with AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three pillars that keep the community focused and useful — not another firehose of AI news.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className={`relative overflow-hidden transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group`}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <Badge variant="muted" className="w-fit text-xs mb-2">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${feature.bg} ring-1 ${feature.border.replace("border-", "ring-")} flex-shrink-0`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
