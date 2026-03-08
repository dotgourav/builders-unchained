import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MessageSquare, CheckCircle, ArrowRight, Hash, Users, Volume2 } from "lucide-react"

const DISCORD_URL = "https://discord.gg/3n9nF9G3hZ"

const benefits = [
  "Deep-dive discussions on AI tools, models, and architectures",
  "Real workflow walkthroughs — no fluff, just what actually works",
  "Live experiments with new AI capabilities, shared openly",
  "Practical setups: prompts, configs, codebases, and toolchains",
  "Peer review for your AI projects from engineers who ship",
  "Weekly threads on what's worth your attention in AI",
]

const channels = [
  { icon: Hash, name: "general", desc: "Open conversation", color: "text-green-400" },
  { icon: Hash, name: "ai-workflows", desc: "Share your stack", color: "text-indigo-400" },
  { icon: Hash, name: "build-logs", desc: "What you're shipping", color: "text-purple-400" },
  { icon: Hash, name: "tools-and-models", desc: "Breakdowns & reviews", color: "text-blue-400" },
  { icon: Volume2, name: "weekly-sync", desc: "Voice hangouts", color: "text-yellow-400" },
  { icon: Users, name: "intros", desc: "Say hello", color: "text-pink-400" },
]

export function Community() {
  return (
    <section className="py-24 lg:py-32 relative bg-card/30">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Benefits */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-muted-foreground">
                The community
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Built for builders,{" "}
                <span className="gradient-text">by builders</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Not a newsletter comment section. Not a Discord with 50k lurkers. A focused community of engineers who are actively building with AI.
              </p>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="group" asChild>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                Join the community
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>

          {/* Right: Discord-style channel list */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-3xl" />
            <Card className="relative overflow-hidden">
              {/* Discord header */}
              <div className="flex items-center gap-3 p-4 border-b border-border bg-muted/20">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">
                  BU
                </div>
                <div>
                  <div className="text-sm font-semibold">Builders Unchained</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    342 online
                  </div>
                </div>
              </div>

              {/* Channel category */}
              <div className="p-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  Channels
                </div>
                <ul className="space-y-0.5">
                  {channels.map((channel) => {
                    const Icon = channel.icon
                    return (
                      <li
                        key={channel.name}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/50 transition-colors group cursor-default"
                      >
                        <Icon className={`w-4 h-4 ${channel.color} opacity-70 group-hover:opacity-100`} />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {channel.name}
                        </span>
                        <span className="ml-auto text-xs text-muted-foreground/50">{channel.desc}</span>
                      </li>
                    )
                  })}
                </ul>

                {/* Recent message preview */}
                <div className="mt-4 p-3 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                    <span className="text-xs font-medium">alice.dev</span>
                    <span className="text-xs text-muted-foreground">just now</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Just shipped my first agent that can autonomously debug its own test failures. The eval loop is insane 🔥
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
