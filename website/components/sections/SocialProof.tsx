import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Since installing AI-SEO-PRO, our traffic from Perplexity and SearchGPT has tripled. It's like unlocking a new traffic channel.",
    author: "Sarah Jenkins",
    role: "Marketing Director, TechFlow",
    avatar: "SJ"
  },
  {
    quote: "The Chat Preview feature is a game changer. We realized ChatGPT was hallucinating our pricing. Fixed it in minutes.",
    author: "Michael Chen",
    role: "Founder, EcoStore",
    avatar: "MC"
  },
  {
    quote: "Finally, a plugin that understands the future of search. The llms.txt generator alone is worth the subscription.",
    author: "David Miller",
    role: "SEO Consultant",
    avatar: "DM"
  }
]

export function SocialProof() {
  return (
    <section className="py-24 border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Forward-Thinking Brands</h2>
          <p className="text-muted-foreground">Join 2,000+ websites preparing for the AI search revolution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
          {/* Placeholder Logos */}
          <div className="h-8 w-32 bg-white/20 rounded" />
          <div className="h-8 w-32 bg-white/20 rounded" />
          <div className="h-8 w-32 bg-white/20 rounded" />
          <div className="h-8 w-32 bg-white/20 rounded" />
          <div className="h-8 w-32 bg-white/20 rounded" />
        </div>
      </div>
    </section>
  )
}
