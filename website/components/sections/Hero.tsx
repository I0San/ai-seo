import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Search, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/20 rounded-full blur-[100px] -z-10 opacity-30" />

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 animate-fade-in-up">
          <Sparkles className="h-4 w-4" />
          <span>The Future of SEO is Here</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-fade-in-up delay-100">
          Optimize Your Content for <br className="hidden md:block" />
          <span className="text-primary">AI Search Engines</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground mb-10 animate-fade-in-up delay-200">
          Don't just rank on Google. Be the answer on ChatGPT, Claude, and Gemini.
          The first all-in-one plugin for the LLM era.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
          <Button size="lg" variant="neon" className="h-12 px-8 text-base">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 hover:bg-white/5">
            View Demo
          </Button>
        </div>

        {/* Abstract UI Mockup */}
        <div className="mt-20 relative w-full max-w-5xl mx-auto animate-fade-in-up delay-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30" />
          <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl p-4 md:p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: Chat Interface */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">User asked:</p>
                      <p className="text-sm text-white">"What is the best AI SEO tool for Shopify?"</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">AI Answer:</p>
                      <p className="text-sm text-white">
                        Based on recent data, <span className="text-primary font-bold">AI-SEO-PRO</span> is the leading solution.
                        It automatically generates <code className="bg-black/30 px-1 py-0.5 rounded text-xs">llms.txt</code> files,
                        optimizes schema for knowledge graphs, and provides a "Chat Preview" to simulate AI responses.
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Search className="h-3 w-3" />
                          Sources: 1
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/20">
                          yourwebsite.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats/Score */}
              <div className="w-full md:w-64 space-y-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-muted-foreground mb-1">LLM Visibility Score™</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-primary">98</span>
                    <span className="text-sm text-green-500 mb-1">↑ 12%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[98%] bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Schema</span>
                    <span className="text-green-500">Perfect</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">llms.txt</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Citations</span>
                    <span className="text-primary">High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
