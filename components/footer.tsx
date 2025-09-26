import Link from "next/link"
import { Sparkles, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  services: [
    { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
    { name: "Anti-Aging Therapy", href: "/services/anti-aging" },
    { name: "Sunspot Removal", href: "/services/sunspot-removal" },
    { name: "Skin Resurfacing", href: "/services/skin-resurfacing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Before & After", href: "/results" },
    { name: "Pricing", href: "/pricing" },
    { name: "Skin Care Tips", href: "/blog" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Live Chat", href: "/chat" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
}

const socialLinks = [
  { icon: MapPin, href: "https://maps.google.com", label: "Location" },
  { icon: Twitter, href: "https://twitter.com/radiantskin", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/radiantskin", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/radiantskin", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RadiantSkin</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Advanced skin care clinic in Brooklyn providing laser treatments, anti-aging therapy,
              and cosmetic procedures with 20+ years of professional experience.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@radiantskin.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">(718) 555-SKIN (7546)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Treatments</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 RadiantSkin. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Made with ❤️ for beautiful skin</span>
            <Separator orientation="vertical" className="h-4" />
            <span>✨ Trusted by 1000+ clients</span>
          </div>
        </div>
      </div>
    </footer>
  )
}