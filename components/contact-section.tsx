"use client"

import { useState } from "react"
import {Send, Calendar, Clock, Award, MessageCircle, Shield} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
    setIsSubmitting(false)

    // In a real app, you'd send the data to your backend
    alert("Thank you! We'll contact you within 24 hours to schedule your consultation.")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your free consultation at our Brooklyn clinic. Let's discuss your skin goals
            and create a personalized treatment plan just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Schedule Your Free Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you within 24 hours to schedule your personalized skin assessment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(718) 555-7546"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your skin concerns</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are your skin goals? Do you have any specific concerns or areas you'd like to address?"
                    className="mt-1 w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Schedule Consultation
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Choose RadiantSkin?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Consultation</h4>
                    <p className="text-muted-foreground">
                      Get personalized advice from licensed cosmetologists with 20+ years of experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Quick Response</h4>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24 hours and schedule convenient appointment times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Licensed & Certified</h4>
                    <p className="text-muted-foreground">
                      All treatments are performed by licensed professionals using FDA-approved equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-xl mb-4">Visit Our Brooklyn Clinic</h4>
                <div className="space-y-2">
                  <p>📧 info@radiantskin.com</p>
                  <p>📱 (718) 555-SKIN (7546)</p>
                  <p>📍 Benson/Midwood, Brooklyn NY</p>
                </div>
                <p className="text-sm mt-4 opacity-90">
                  Walk-ins welcome • Evening appointments available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}