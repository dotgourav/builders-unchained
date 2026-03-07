"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  Users,
  Lightbulb,
  Wrench,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: MessageCircle,
    title: "Discussions about AI developer tools",
  },
  {
    icon: Users,
    title: "Real workflows from engineers using AI daily",
  },
  {
    icon: Lightbulb,
    title: "Early experiments with coding agents",
  },
  {
    icon: Wrench,
    title: "Practical setups for AI-assisted development",
  },
  {
    icon: BookOpen,
    title: "Learning from other builders",
  },
];

export function WhatsInside() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              What You'll Find Inside
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get direct access to discussions, workflows, and experiments from
              developers actively building with AI.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-foreground group-hover:text-accent transition-colors">
                      {highlight.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 rounded-full font-semibold"
            >
              Join Builders Unchained on Discord
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <Card className="p-6 rounded-xl border border-border bg-muted/30 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="font-semibold text-sm">Alex Chen</div>
                    <div className="text-xs text-muted-foreground">AI Dev</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-foreground">
                    Just shipped a new AI agent for code review using Claude.
                    Cut our review time by 40%!
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Card className="p-2 bg-background/50 rounded-lg border-border text-xs">
                      <div className="font-mono text-primary">claude-opus</div>
                    </Card>
                    <Card className="p-2 bg-background/50 rounded-lg border-border text-xs">
                      <div className="font-mono text-secondary">LangChain</div>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button className="text-xs text-muted-foreground hover:text-secondary transition-colors">
                    ❤️ 24
                  </button>
                  <button className="text-xs text-muted-foreground hover:text-secondary transition-colors">
                    💬 8
                  </button>
                </div>
              </div>
            </Card>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
