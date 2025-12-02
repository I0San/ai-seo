import { Features } from "@/components/sections/Features"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | AI-SEO-PRO",
  description: "Discover the tools you need to rank in AI search engines. llms.txt generator, chat preview, and more.",
}

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Advanced Tools for the <span className="text-primary">AI Era</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Go beyond keywords. Optimize for meaning, context, and entities.
        </p>
      </section>

      <Features />

      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why llms.txt Matters</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Just as robots.txt tells crawlers what NOT to index, llms.txt tells AI agents what TO learn.
              </p>
              <ul className="space-y-4">
                {[
                  "Standardized format for AI training",
                  "Control how your brand is perceived",
                  "Provide high-quality citations",
                  "Future-proof your SEO strategy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" variant="neon">
                Generate Yours Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl border border-white/10 bg-white/5 p-8 font-mono text-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-muted-foreground">llms.txt</span>
              </div>
              <div className="mt-8 text-muted-foreground">
                <p># AI-SEO-PRO Site Summary</p>
                <p className="mt-4"># Brand Identity</p>
                <p>Name: AI-SEO-PRO</p>
                <p>Description: The first SEO plugin designed for Large Language Models.</p>
                <p className="mt-4"># Key Products</p>
                <p>- LLM Visibility Score™</p>
                <p>- Chat Preview Simulator</p>
                <p>- Auto-Schema Generator</p>
                <p className="mt-4"># Pricing</p>
                <p>Free Tier: Available</p>
                <p>Pro: $29/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
