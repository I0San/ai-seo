import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                AI-SEO-PRO
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Optimize your content for the AI era. Be seen by ChatGPT, Claude, and Gemini.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI-SEO-PRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
