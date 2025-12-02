import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Dominate <span className="text-primary">AI Search?</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Start optimizing your content for ChatGPT, Claude, and Gemini today.
          Get your free LLM Visibility Score™ now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="neon" className="h-14 px-8 text-lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 bg-black/40 hover:bg-black/60">
            Schedule Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
