import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Twitter } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | AI-SEO-PRO",
  description: "Get in touch with the AI-SEO-PRO team. Support, sales, and community inquiries.",
}

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Have questions about AI SEO? We're here to help you navigate the future of search.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Support
            </h3>
            <p className="text-muted-foreground mb-6">
              For technical issues, account help, or feature requests.
            </p>
            <Button variant="outline" className="w-full">
              Open Support Ticket
            </Button>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Sales
            </h3>
            <p className="text-muted-foreground mb-6">
              For enterprise inquiries, agency partnerships, or custom integrations.
            </p>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Twitter className="h-5 w-5 text-primary" />
              Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the conversation on X (Twitter) and get the latest AI SEO tips.
            </p>
            <Button variant="outline" className="w-full">
              Follow @AISEOPlugin
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <select
                id="subject"
                className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Partnership</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                placeholder="How can we help you?"
              />
            </div>

            <Button type="submit" variant="neon" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
