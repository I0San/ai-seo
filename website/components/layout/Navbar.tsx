import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            AI-SEO-PRO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Login
          </Link>
          <Button variant="neon" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
