"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 mb-8 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-secondary" />
          <span className="text-sm text-muted-foreground">
            AI is reshaping how we build
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
          <span className="gradient-text">AI is Unchaining Builders</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Builders Unchained is the community for AI-native engineers exploring
          coding agents, AI development workflows, and the future of software
          development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 rounded-full font-semibold"
          >
            Join the Discord Community
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

        <div className="relative mt-16 pt-16 border-t border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">
                Developers Joined
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Weekly Discussions
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground mb-2">30%</div>
              <div className="text-sm text-muted-foreground">
                Shipping AI Products
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
