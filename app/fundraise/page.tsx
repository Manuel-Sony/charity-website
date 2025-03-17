import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Users, Target, Gift, Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Fundraise - Charity Foundation",
  description: "Start your own fundraising campaign to support our mission and make a difference.",
}

export default function FundraisePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-primary py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Fundraising Campaign</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Rally your friends, family, and community to support our mission and make a meaningful impact together.
          </p>
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
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Amplify Your Impact</h3>
              <p className="text-gray-600">
                By rallying your network, you can make a bigger difference than you could alone, multiplying your
                contribution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Engage Your Community</h3>
              <p className="text-gray-600">
                Bring together friends, family, and colleagues around a cause you care about, creating meaningful
                connections.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalize Your Cause</h3>
              <p className="text-gray-600">
                Choose a specific project or initiative that resonates with you and your network, making your campaign
                more meaningful.
              </p>
            </div>
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
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Birthday Fundraiser"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Gift className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Birthday Fundraiser</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Ask for donations instead of gifts for your birthday. It's a meaningful way to celebrate while making
                  a difference.
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• Easy to set up online</li>
                  <li>• Share with friends and family</li>
                  <li>• Makes your birthday more meaningful</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Charity Run or Walk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Charity Run or Walk</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Organize a run or walk event where participants collect pledges from sponsors for each mile completed.
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• Promotes health and fitness</li>
                  <li>• Creates a community event</li>
                  <li>• Can be scaled to any size</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Virtual Fundraiser"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Virtual Fundraiser</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Host an online event like a virtual concert, game night, or auction that people can join from
                  anywhere.
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• No geographical limitations</li>
                  <li>• Lower overhead costs</li>
                  <li>• Easily shareable on social media</li>
                </ul>
              </div>
            </div>
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
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sarah's Fundraiser"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sarah's Marathon Challenge</h3>
                  <p className="text-primary font-medium">Raised $5,200</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I decided to run my first marathon and use it as an opportunity to raise funds for clean water
                projects. The support I received was overwhelming, and knowing that my effort would help provide clean
                water to communities in need kept me going through the tough training days."
              </p>
              <p className="text-gray-600">
                Sarah's fundraiser provided clean water access to over 200 people in a rural village.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Michael's Fundraiser"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Michael's Birthday Campaign</h3>
                  <p className="text-primary font-medium">Raised $3,800</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "For my 30th birthday, I asked friends and family to donate to education programs instead of giving me
                gifts. It was the most meaningful birthday I've ever had, knowing that we were helping children get the
                education they deserve."
              </p>
              <p className="text-gray-600">
                Michael's fundraiser provided school supplies and resources for an entire classroom for a year.
              </p>
            </div>
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
                  <li>Fill out the form with your fundraising idea</li>
                  <li>Our team will contact you to discuss details</li>
                  <li>We'll set up your personalized fundraising page</li>
                  <li>You'll share your page with friends, family, and social networks</li>
                  <li>Watch your impact grow as donations come in</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Support</h3>
                <p className="text-gray-600 mb-4">
                  We're here to help you every step of the way. When you start a fundraiser with us, you'll receive:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• A personalized fundraising page</li>
                  <li>• Fundraising tips and resources</li>
                  <li>• Marketing materials and templates</li>
                  <li>• Dedicated support from our team</li>
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
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How much of the money raised goes to the cause?</h3>
              <p className="text-gray-600">
                At least 85% of all funds raised go directly to our programs and initiatives. The remaining amount
                covers essential administrative costs and fundraising expenses to ensure we can continue our work
                effectively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Can I fundraise for a specific project?</h3>
              <p className="text-gray-600">
                Yes! You can choose to direct your fundraising efforts toward a specific project or initiative that
                resonates with you, such as clean water, education, or emergency relief.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How long should my fundraiser run?</h3>
              <p className="text-gray-600">
                Most successful fundraisers run for 2-4 weeks. This gives you enough time to promote your campaign
                without losing momentum. However, you can adjust the timeline based on your specific fundraiser type.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Will donors receive tax receipts?</h3>
              <p className="text-gray-600">
                Yes, all donors who contribute to your fundraiser will automatically receive a tax receipt for their
                donation, as our organization is a registered nonprofit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

