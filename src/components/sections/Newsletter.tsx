import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

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

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-foreground font-medium">You're in. Check your inbox.</p>
              <p className="text-muted-foreground text-sm">Next issue drops this week.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base flex-1"
              />
              <Button type="submit" size="lg" disabled={loading} className="group shrink-0">
                {loading ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. Read by 1,000+ engineers.
          </p>
        </div>
      </div>
    </section>
  )
}
