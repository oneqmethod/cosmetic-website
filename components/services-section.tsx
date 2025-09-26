import Link from "next/link"
import { Zap, Sparkles, Sun, Waves, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: Zap,
    title: "Laser Hair Removal",
    description: "Advanced laser technology for permanent hair reduction with guaranteed results and minimal discomfort.",
    features: [
      "FDA-approved equipment",
      "All skin types welcome",
      "Permanent hair reduction",
      "Minimal discomfort"
    ],
    href: "/services/laser-hair-removal"
  },
  {
    icon: Sparkles,
    title: "Anti-Aging Therapy",
    description: "Rejuvenating treatments to restore youthful skin and reduce visible signs of aging effectively.",
    features: [
      "Skin resurfacing",
      "Wrinkle reduction",
      "Collagen stimulation",
      "Natural-looking results"
    ],
    href: "/services/anti-aging"
  },
  {
    icon: Sun,
    title: "Sunspot Removal",
    description: "Professional laser treatments to eliminate sunspots, age spots, and pigmentation issues.",
    features: [
      "Precise laser targeting",
      "Minimal downtime",
      "Even skin tone",
      "Long-lasting results"
    ],
    href: "/services/sunspot-removal"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Our Advanced Skin Care Treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience cutting-edge cosmetic treatments designed to enhance your natural beauty
            and restore your skin's youthful radiance with 20+ years of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    <Link href={service.href} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Looking for a personalized treatment plan? We offer custom consultations tailored to your unique skin needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              <Users className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}