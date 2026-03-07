"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Join the Builders Unchained Community
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Connect with developers building the next generation of AI-powered
          software. Share ideas, learn from experienced builders, and shape the
          future of AI development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 rounded-full font-semibold"
          >
            Join Discord
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-muted/50 px-8 rounded-full font-semibold"
          >
            Subscribe to Newsletter
          </Button>
        </div>

        <div className="pt-12 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by developers at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-sm font-semibold">OpenAI</div>
            <div className="text-sm font-semibold">Anthropic</div>
            <div className="text-sm font-semibold">Google DeepMind</div>
            <div className="text-sm font-semibold">Stripe</div>
            <div className="text-sm font-semibold">Vercel</div>
          </div>
        </div>
      </div>
    </section>
  );
}
