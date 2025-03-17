import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, Mail, Phone, Facebook, Twitter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would typically come from a database or API
const events = [
  {
    id: "1",
    title: "Annual Charity Gala",
    description: "Join us for an evening of celebration and fundraising for our initiatives across Nigeria.",
    fullDescription: `
      <p>Join us for an elegant evening of celebration, inspiration, and fundraising at our Annual Charity Gala. This signature event brings together supporters, partners, and beneficiaries to reflect on our impact over the past year and raise funds for our programs across Nigeria.</p>
      
      <h3>Event Highlights</h3>
      
      <ul>
        <li><strong>Keynote Address:</strong> Distinguished speaker Dr. Ngozi Okonjo-Iweala will share insights on sustainable development in Nigeria</li>
        <li><strong>Impact Showcase:</strong> Interactive displays highlighting our work in clean water, education, and healthcare</li>
        <li><strong>Beneficiary Stories:</strong> Hear directly from individuals whose lives have been transformed by our programs</li>
        <li><strong>Silent Auction:</strong> Bid on unique items and experiences donated by our generous sponsors</li>
        <li><strong>Live Entertainment:</strong> Performances by renowned Nigerian artists</li>
        <li><strong>Gourmet Dinner:</strong> A delicious multi-course meal featuring local and international cuisine</li>
      </ul>
      
      <h3>Your Participation Makes a Difference</h3>
      
      <p>All proceeds from the Gala will support our programs across Nigeria, with a special focus on our Clean Water Initiative in Lagos State. By attending, you'll directly contribute to providing clean water to communities in need, improving health outcomes, and creating opportunities for thousands of Nigerians.</p>
      
      <h3>Dress Code</h3>
      
      <p>Formal attire (Black tie optional)</p>
      
      <h3>Sponsorship Opportunities</h3>
      
      <p>Various sponsorship packages are available for companies and individuals who wish to increase their impact and visibility at the event. Please contact our events team at events@charityfoundation.org.ng for more information.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    date: "June 15, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Eko Hotel & Suites, Victoria Island, Lagos",
    type: "in-person",
    category: "Fundraiser",
    capacity: 300,
    registered: 185,
    organizer: "Charity Foundation Nigeria",
    contactEmail: "events@charityfoundation.org.ng",
    contactPhone: "+234 801 234 5678",
    ticketPrice: "₦50,000 per person / ₦450,000 for a table of 10",
    schedule: [
      { time: "7:00 PM", activity: "Arrival and Welcome Drinks" },
      { time: "7:30 PM", activity: "Interactive Impact Showcase" },
      { time: "8:00 PM", activity: "Dinner Service Begins" },
      { time: "8:30 PM", activity: "Welcome Address and Keynote Speech" },
      { time: "9:15 PM", activity: "Beneficiary Stories" },
      { time: "9:45 PM", activity: "Live Entertainment and Silent Auction" },
      { time: "10:30 PM", activity: "Closing Remarks and Call to Action" },
      { time: "11:00 PM", activity: "Event Concludes" },
    ],
  },
  {
    id: "2",
    title: "Volunteer Training Workshop",
    description: "Learn how you can make a difference as a volunteer in your community.",
    fullDescription: `
      <p>Are you passionate about making a difference in your community? Join us for a comprehensive Volunteer Training Workshop where you'll gain the knowledge, skills, and connections needed to become an effective volunteer with Charity Foundation Nigeria.</p>
      
      <p>This interactive workshop is designed for both new and experienced volunteers who want to contribute their time and talents to our programs across Lagos and beyond.</p>
      
      <h3>Workshop Content</h3>
      
      <ul>
        <li><strong>Organization Overview:</strong> Learn about our mission, vision, programs, and impact</li>
        <li><strong>Volunteer Opportunities:</strong> Explore the various ways you can get involved based on your interests and skills</li>
        <li><strong>Effective Volunteering:</strong> Best practices for making a meaningful contribution</li>
        <li><strong>Cultural Sensitivity:</strong> Understanding community dynamics and respectful engagement</li>
        <li><strong>Safety and Security:</strong> Guidelines for ensuring your wellbeing while volunteering</li>
        <li><strong>Team Building:</strong> Connect with other volunteers and our staff</li>
      </ul>
      
      <h3>Who Should Attend</h3>
      
      <p>This workshop is ideal for:</p>
      <ul>
        <li>New volunteers who want to join our organization</li>
        <li>Existing volunteers seeking to enhance their skills</li>
        <li>Individuals exploring volunteer opportunities</li>
        <li>Corporate groups interested in employee volunteering</li>
        <li>Students looking for community service opportunities</li>
      </ul>
      
      <h3>What to Bring</h3>
      
      <ul>
        <li>Notebook and pen</li>
        <li>Government-issued ID</li>
        <li>Enthusiasm and questions!</li>
      </ul>
      
      <p>Lunch and refreshments will be provided. Registration is required as space is limited to ensure an interactive and engaging experience for all participants.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    date: "July 8, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Charity Foundation HQ, Lekki, Lagos",
    type: "in-person",
    category: "Workshop",
    capacity: 50,
    registered: 32,
    organizer: "Charity Foundation Nigeria - Volunteer Department",
    contactEmail: "volunteer@charityfoundation.org.ng",
    contactPhone: "+234 802 345 6789",
    ticketPrice: "Free (Registration Required)",
    schedule: [
      { time: "9:30 AM", activity: "Registration and Networking" },
      { time: "10:00 AM", activity: "Welcome and Organization Overview" },
      { time: "10:45 AM", activity: "Volunteer Opportunities and Requirements" },
      { time: "11:30 AM", activity: "Break and Refreshments" },
      { time: "11:45 AM", activity: "Effective Volunteering and Cultural Sensitivity" },
      { time: "12:30 PM", activity: "Lunch" },
      { time: "1:00 PM", activity: "Team Building Activities" },
      { time: "1:45 PM", activity: "Q&A and Next Steps" },
      { time: "2:00 PM", activity: "Workshop Concludes" },
    ],
  },
  {
    id: "3",
    title: "Charity Run for Clean Water",
    description: "Participate in our 5K run to raise funds for clean water projects in Ogun State.",
    fullDescription: `
      <p>Lace up your running shoes and join us for the Charity Run for Clean Water! This fun and energetic 5K run/walk event brings together fitness enthusiasts, families, and supporters to raise funds for our clean water projects in Ogun State.</p>
      
      <p>Whether you're a seasoned runner or prefer a leisurely walk, this event is for everyone who wants to make a difference while enjoying a beautiful morning at the Lekki Conservation Centre.</p>
      
      <h3>Event Details</h3>
      
      <ul>
        <li><strong>Distance:</strong> 5 kilometers (3.1 miles)</li>
        <li><strong>Route:</strong> Scenic path through Lekki Conservation Centre</li>
        <li><strong>Difficulty:</strong> Suitable for all fitness levels</li>
        <li><strong>Age Requirement:</strong> Open to all ages (children under 12 must be accompanied by an adult)</li>
      </ul>
      
      <h3>What's Included</h3>
      
      <ul>
        <li>Official event t-shirt</li>
        <li>Race bib with timing chip</li>
        <li>Finisher's medal</li>
        <li>Post-race refreshments</li>
        <li>Access to water stations along the route</li>
        <li>Entertainment and activities at the finish line</li>
      </ul>
      
      <h3>Registration Options</h3>
      
      <ul>
        <li><strong>Individual Runner:</strong> ₦5,000</li>
        <li><strong>Family Package (2 adults + 2 children):</strong> ₦15,000</li>
        <li><strong>Corporate Team (10 runners):</strong> ₦40,000</li>
      </ul>
      
      <h3>Fundraising</h3>
      
      <p>While registration fees help cover event costs, we encourage participants to raise additional funds for our clean water projects. Each registered participant will receive a personal fundraising page to share with friends and family. Prizes will be awarded to top fundraisers!</p>
      
      <h3>Your Impact</h3>
      
      <p>All proceeds from this event will support our Clean Water Initiative in Ogun State, providing boreholes, water purification systems, and hygiene education to communities in need. Each participant's contribution helps bring clean, safe water to families who currently lack this basic necessity.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    date: "August 22, 2025",
    time: "8:00 AM - 12:00 PM",
    location: "Lekki Conservation Centre, Lagos",
    type: "in-person",
    category: "Fundraiser",
    capacity: 500,
    registered: 215,
    organizer: "Charity Foundation Nigeria - Events Team",
    contactEmail: "events@charityfoundation.org.ng",
    contactPhone: "+234 803 456 7890",
    ticketPrice: "₦5,000 - ₦40,000 (varies by registration type)",
    schedule: [
      { time: "7:00 AM", activity: "Registration and Check-in Opens" },
      { time: "7:45 AM", activity: "Warm-up Session" },
      { time: "8:00 AM", activity: "Race Starts" },
      { time: "9:30 AM", activity: "Entertainment and Refreshments at Finish Line" },
      { time: "10:30 AM", activity: "Awards Ceremony" },
      { time: "11:00 AM", activity: "Clean Water Project Presentation" },
      { time: "12:00 PM", activity: "Event Concludes" },
    ],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const event = events.find((event) => event.id === params.id)

  if (!event) {
    return {
      title: "Event Not Found - Charity Foundation Nigeria",
      description: "The requested event could not be found.",
    }
  }

  return {
    title: `${event.title} - Charity Foundation Nigeria`,
    description: event.description,
  }
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find((event) => event.id === params.id)

  if (!event) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">{event.category}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{event.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{event.description}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{event.registered} Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="relative h-[400px] w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <div className="flex space-x-4 mb-8">
                    <Button asChild className="flex-1">
                      <Link href="#register">Register Now</Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="about">About the Event</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                    />

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Event Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-5 w-5 mr-2 text-primary" />
                            <span className="font-medium">Date</span>
                          </div>
                          <p className="text-gray-600 ml-7">{event.date}</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Clock className="h-5 w-5 mr-2 text-primary" />
                            <span className="font-medium">Time</span>
                          </div>
                          <p className="text-gray-600 ml-7">{event.time}</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <MapPin className="h-5 w-5 mr-2 text-primary" />
                            <span className="font-medium">Location</span>
                          </div>
                          <p className="text-gray-600 ml-7">{event.location}</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Users className="h-5 w-5 mr-2 text-primary" />
                            <span className="font-medium">Capacity</span>
                          </div>
                          <p className="text-gray-600 ml-7">
                            {event.registered} / {event.capacity} Registered
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {event.gallery.map((image, index) => (
                          <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${event.title} - image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Organizer</h3>
                      <p className="text-gray-600 mb-2">{event.organizer}</p>
                      <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <p className="flex items-center text-primary">
                          <Mail className="h-4 w-4 mr-2" />
                          <a href={`mailto:${event.contactEmail}`}>{event.contactEmail}</a>
                        </p>
                        <p className="flex items-center text-primary">
                          <Phone className="h-4 w-4 mr-2" />
                          <a href={`tel:${event.contactPhone}`}>{event.contactPhone}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="schedule">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-6">Event Schedule</h3>
                    <div className="space-y-4">
                      {event.schedule.map((item, index) => (
                        <div key={index} className="flex border-l-4 border-primary pl-4 py-2">
                          <div className="w-24 font-bold text-primary">{item.time}</div>
                          <div>{item.activity}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/events">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Events
                  </Link>
                </Button>
              </div>
            </div>

            {/* Registration Form */}
            <div id="register">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Register for This Event</h3>
                  <p className="text-gray-600 mb-6">
                    {event.ticketPrice === "Free (Registration Required)"
                      ? "This event is free, but registration is required to secure your spot."
                      : `Ticket Price: ${event.ticketPrice}`}
                  </p>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>

                    {event.id === "3" && (
                      <div className="space-y-2">
                        <Label htmlFor="registration-type">Registration Type</Label>
                        <Select>
                          <SelectTrigger id="registration-type">
                            <SelectValue placeholder="Select registration type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual Runner (₦5,000)</SelectItem>
                            <SelectItem value="family">Family Package (₦15,000)</SelectItem>
                            <SelectItem value="corporate">Corporate Team (₦40,000)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="special-requests">Special Requests (Optional)</Label>
                      <Textarea id="special-requests" placeholder="Any special requirements or questions?" />
                    </div>

                    <Button type="submit" className="w-full">
                      Complete Registration
                    </Button>
                  </form>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Share This Event</h3>
                  <p className="text-gray-600 mb-4">Invite your friends and family to join you at this event.</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Facebook className="mr-2 h-4 w-4" /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Twitter className="mr-2 h-4 w-4" /> Tweet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Events */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Other Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events
              .filter((e) => e.id !== event.id)
              .slice(0, 3)
              .map((otherEvent) => (
                <div
                  key={otherEvent.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={otherEvent.image || "/placeholder.svg"}
                      alt={otherEvent.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {otherEvent.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{otherEvent.title}</h3>
                    <p className="text-gray-600 mb-4">{otherEvent.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{otherEvent.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{otherEvent.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{otherEvent.location}</span>
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/events/${otherEvent.id}`}>View Event</Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

