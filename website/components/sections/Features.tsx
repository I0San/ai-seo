import {
  Bot,
  FileText,
  LineChart,
  MessageSquare,
  Search,
  Sparkles
} from "lucide-react"

const features = [
  {
    title: "LLM-Optimized Content",
    description: "Automatically generate structured summaries, FAQs, and definitions that LLMs love to consume.",
    icon: FileText,
  },
  {
    title: "Auto /llms.txt",
    description: "Generate and maintain the new standard file for AI crawlers, ensuring your site is training-ready.",
    icon: Bot,
  },
  {
    title: "Chat Preview",
    description: "Simulate how ChatGPT, Claude, and Gemini answer questions about your products and brand.",
    icon: MessageSquare,
  },
  {
    title: "Visibility Score™",
    description: "Get a 0-100 score on how visible your content is to AI search engines with actionable tips.",
    icon: LineChart,
  },
  {
    title: "Schema Generation",
    description: "Create rich JSON-LD schemas for facts, products, and entities to feed knowledge graphs.",
    icon: Search,
  },
  {
    title: "AI Content Rewrites",
    description: "Automatically rewrite descriptions and blog posts to be more citation-friendly and unambiguous.",
    icon: Sparkles,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to Rank in <span className="text-primary">AI Search</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional SEO tools are for Google. We built the first toolkit designed specifically for Large Language Models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
