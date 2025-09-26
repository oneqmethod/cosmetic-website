import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Teacher",
    company: "Age 42",
    image: "/testimonials/sarah.jpg",
    fallback: "SW",
    quote: "After years of struggling with unwanted hair, RadiantSkin's laser hair removal changed my life. The results are permanent and the staff is incredibly professional!",
    result: "Hair-Free Results",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    role: "Business Owner",
    company: "Age 38",
    image: "/testimonials/maria.jpg",
    fallback: "MR",
    quote: "The anti-aging treatments have given me back my confidence. My skin looks 10 years younger and friends keep asking what I've been doing!",
    result: "10 Years Younger",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    role: "Nurse",
    company: "Age 45",
    image: "/testimonials/jennifer.jpg",
    fallback: "JC",
    quote: "The sunspot removal treatment was a game-changer. My skin tone is now even and I feel comfortable going makeup-free again.",
    result: "Even Skin Tone",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Real Estate Agent",
    company: "Age 35",
    image: "/testimonials/lisa.jpg",
    fallback: "LT",
    quote: "Professional, caring, and results-driven. The skin resurfacing treatment gave me the smooth, glowing skin I've always wanted.",
    result: "Glowing Skin",
    rating: 5
  },
  {
    name: "Diana Foster",
    role: "Mom of Three",
    company: "Age 41",
    image: "/testimonials/diana.jpg",
    fallback: "DF",
    quote: "I've been coming here for 3 years and the staff treats me like family. Every treatment is personalized and the results speak for themselves.",
    result: "3 Years of Trust",
    rating: 5
  },
  {
    name: "Rebecca Torres",
    role: "Administrative Assistant",
    company: "Age 39",
    image: "/testimonials/rebecca.jpg",
    fallback: "RT",
    quote: "The acne treatment program completely transformed my skin. At 39, I finally have the clear, confident complexion I dreamed of.",
    result: "Clear Complexion",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped hundreds of women in Brooklyn achieve beautiful, healthy skin with our expert treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Result Badge */}
                <Badge variant="secondary" className="mb-4">
                  {testimonial.result}
                </Badge>
              </CardContent>

              <CardFooter className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    {testimonial.fallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center bg-gradient-to-r from-muted/30 to-accent/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Join 1000+ Satisfied Clients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-muted-foreground">Successful Treatments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">20+ Years</div>
              <div className="text-muted-foreground">Professional Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}