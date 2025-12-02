import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { SocialProof } from "@/components/sections/SocialProof"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <SocialProof />
      <CTA />
    </div>
  )
}
