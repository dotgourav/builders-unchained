import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Community } from "@/components/sections/Community"
import { Newsletter } from "@/components/sections/Newsletter"
import { WhoIsItFor } from "@/components/sections/WhoIsItFor"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="community">
          <Community />
        </div>
        <div id="newsletter">
          <Newsletter />
        </div>
        <WhoIsItFor />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
