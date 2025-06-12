import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Users, Target, Gift, Calendar, ArrowRight } from "lucide-react"
import { fundraisePageData } from "@/data/fundraise-data"

export const metadata = {
  title: "Fundraise - Charity Foundation",
  description: "Start your own fundraising campaign to support our mission and make a difference.",
}

const iconMap = {
  Heart,
  Users,
  Target,
  Gift,
  Calendar,
}

export default function FundraisePage() {
  const { hero, benefits, ideas, successStories, howItWorks, support, faq } = fundraisePageData

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-primary py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{hero.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{hero.description}</p>
          <Button asChild className="mt-8 rounded-lg px-8 py-6 text-lg font-semibold">
            <Link href="#start-fundraiser">Start Fundraising Now</Link>
          </Button>
        </div>
      </section>

      {/* Why Fundraise Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Fundraise With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Starting your own fundraising campaign is a powerful way to support our cause and engage your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fundraising Ideas */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Fundraising Ideas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are countless ways to raise funds for our cause. Here are some popular ideas to get you started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideas.map((idea, index) => {
              const IconComponent = iconMap[idea.icon as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image src={idea.image || "/placeholder.svg"} alt={idea.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">{idea.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{idea.description}</p>
                    <ul className="space-y-2 mb-6 text-gray-600">
                      {idea.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-lg">
              <Link href="#more-ideas">
                View More Fundraising Ideas <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be inspired by these amazing fundraisers who made a significant impact on our cause.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                    <p className="text-primary font-medium">{story.amount}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{story.quote}"</p>
                <p className="text-gray-600">{story.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Fundraising Form */}
      <section id="start-fundraiser" className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your Fundraiser</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form to get started with your fundraising campaign. Our team will reach out to provide
                support and resources to help make your fundraiser a success.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">How It Works</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  {howItWorks.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Support</h3>
                <p className="text-gray-600 mb-4">
                  We're here to help you every step of the way. When you start a fundraiser with us, you'll receive:
                </p>
                <ul className="space-y-2 text-gray-600">
                  {support.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" className="rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" className="rounded-lg" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-lg" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="rounded-lg" required />
                </div>

                <div className="space-y-2">
                  <Label>Fundraiser Type</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select fundraiser type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday Fundraiser</SelectItem>
                      <SelectItem value="event">Event (Run, Walk, etc.)</SelectItem>
                      <SelectItem value="virtual">Virtual Fundraiser</SelectItem>
                      <SelectItem value="memorial">In Memory/Honor Of</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fundraising-goal">Fundraising Goal ($)</Label>
                  <Input
                    id="fundraising-goal"
                    type="number"
                    placeholder="Enter your fundraising goal"
                    className="rounded-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Tell Us About Your Fundraiser</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your fundraising idea and why you're passionate about our cause"
                    className="rounded-lg min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-lg">
                  Submit Fundraiser Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about fundraising for our organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
