import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

const DISCORD_URL = "https://discord.gg/3n9nF9G3hZ"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">BU</span>
            </div>
            <span className="font-semibold text-sm tracking-tight">Builders Unchained</span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {["Features", "Community", "Newsletter"].map((item) => (
              <button
                key={item}
                className="hover:text-foreground transition-colors cursor-pointer"
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <Button size="sm" asChild>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-4 h-4" />
              Join Discord
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
