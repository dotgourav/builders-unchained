import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight } from "lucide-react"

export function Newsletter() {

  return (
    <section id="newsletter" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(99,102,241,0.06),transparent)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-muted-foreground">
              <Mail className="w-3 h-3 mr-1" />
              Newsletter
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Stay ahead of the{" "}
              <span className="gradient-text">AI curve</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Weekly digest: what's worth knowing, what's overhyped, and what engineers are actually shipping. No fluff. Straight to your inbox.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 py-8">
            <Button
              size="lg"
              asChild
              className="group"
            >
              <a href="https://open.substack.com/pub/buildersunchained" target="_blank" rel="noopener noreferrer">
                Subscribe on Substack
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <p className="text-muted-foreground text-sm">Join the signal. No spam, just builders.</p>
          </div>

          <p className="text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. Just signal.
          </p>
        </div>
      </div>
    </section>
  )
}
