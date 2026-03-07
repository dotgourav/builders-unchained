import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-12 sm:p-16 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </div>

          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-lg bg-background mb-4">
              <Mail className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Builders Unchained Newsletter
            </h2>
            <p className="text-muted-foreground text-lg">
              Short, practical insights about AI tools, workflows, and
              experiments delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full border-border bg-background/50 px-6 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-0 focus:ring-accent/20"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 rounded-full font-semibold whitespace-nowrap"
            >
              {submitted ? "Subscribed!" : "Subscribe"}
              {!submitted && <ArrowRight className="ml-2 w-5 h-5" />}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
