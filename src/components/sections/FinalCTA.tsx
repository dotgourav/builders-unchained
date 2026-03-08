import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight, Terminal } from "lucide-react"

const DISCORD_URL = "https://discord.gg/3n9nF9G3hZ"

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(99,102,241,0.12),transparent)]" />
      <div className="absolute inset-0 grid-bg" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Top label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Community is open
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Stop building in{" "}
            <br />
            <span className="gradient-text">isolation.</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            The best engineers building with AI are already in Builders Unchained. Come see what they're shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" className="group glow w-full sm:w-auto" asChild>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                Join Discord — it's free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="group w-full sm:w-auto"
              onClick={() => {
                document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Terminal className="w-5 h-5" />
              Subscribe Newsletter
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Engineers. Zero noise policy.
          </p>
        </div>
      </div>
    </section>
  )
}
