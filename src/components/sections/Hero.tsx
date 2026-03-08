import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageSquare, Terminal, Zap } from "lucide-react"

const DISCORD_URL = "https://discord.gg/3n9nF9G3hZ"

function CodeBlock() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-3xl" />
      <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">builders-unchained.sh</span>
        </div>
        {/* Code content */}
        <div className="p-6 font-mono text-sm space-y-2">
          <div>
            <span className="text-muted-foreground">$ </span>
            <span className="text-indigo-400">join</span>
            <span className="text-foreground"> builders-unchained</span>
          </div>
          <div className="text-green-400">✓ Community joined</div>
          <div className="text-muted-foreground">→ Loading AI workflows...</div>
          <div className="text-muted-foreground">→ Connecting to builders...</div>
          <div className="text-purple-400">✓ You're unchained.</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-muted-foreground">$ </span>
            <span className="w-2 h-4 bg-indigo-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="gap-1.5 text-indigo-400 border-indigo-500/30 bg-indigo-500/5">
                <Zap className="w-3 h-3" />
                AI-native developer community
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Learn Together.
                <br />
                <span className="gradient-text">Build With AI.</span>
                <br />
                Iterate Faster.
              </h1>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                The community for engineers building with AI — real workflows, honest breakdowns, and builders who ship.
              </p>
            </div>



            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="xl" className="group" asChild>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5" />
                  Join Discord
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="group" onClick={() => {
                document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })
              }}>
                <Terminal className="w-5 h-5" />
                Subscribe Newsletter
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Free to join. No spam. Just signal.
            </p>
          </div>

          {/* Right: Code block visual */}
          <div className="lg:block">
            <CodeBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
