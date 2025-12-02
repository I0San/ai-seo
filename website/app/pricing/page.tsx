import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | AI-SEO-PRO",
  description: "Simple, transparent pricing for AI search optimization. Start your free trial today.",
}

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for personal blogs and small sites.",
    features: [
      "Basic Visibility Score",
      "1-Page Optimization",
      "Basic /llms.txt Generator",
      "Community Support"
    ],
    cta: "Get Started",
    variant: "outline" as const
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious content creators and businesses.",
    features: [
      "Unlimited Pages",
      "Chat Preview Simulator",
      "AI Content Rewrites",
      "Full Structured Data",
      "Priority Support"
    ],
    cta: "Start Free Trial",
    variant: "neon" as const,
    popular: true
  },
  {
    name: "Business",
    price: "$79",
    period: "/month",
    description: "For agencies and high-volume stores.",
    features: [
      "Multi-store Support",
      "Team Access",
      "Competitor Analysis",
      "White-label Reports",
      "API Access"
    ],
    cta: "Contact Sales",
    variant: "outline" as const
  }
]

export default function PricingPage() {
  return (
    <div className="py-20 md:py-32 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Simple, Transparent <span className="text-primary">Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Invest in the future of your search traffic. 14-day free trial on paid plans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 flex flex-col ${plan.popular
              ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
              : "border-white/10 bg-white/5"
              }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="text-muted-foreground text-sm">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant={plan.variant} className="w-full">
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
