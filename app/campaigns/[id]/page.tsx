import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Heart, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"
import DonationCard from "@/components/donation-card"

// This would typically come from a database or API
const campaigns = [
  {
    id: "1",
    title: "Clean Water for Ikorodu",
    description: "Providing clean water to communities in need across Lagos State.",
    fullDescription: `
      <p>Access to clean water is a fundamental human right, yet thousands of residents in Ikorodu, Lagos State still lack this basic necessity. Many families, especially in rural areas, rely on contaminated water sources for drinking, cooking, and sanitation, leading to preventable waterborne diseases.</p>
      
      <p>Our Clean Water for Ikorodu campaign aims to address this critical issue by installing boreholes and water purification systems in 10 communities across Ikorodu Local Government Area. Each water system will provide clean, safe water to approximately 500 people, significantly improving health outcomes and quality of life.</p>
      
      <h3>The Impact of Clean Water</h3>
      
      <p>When communities gain access to clean water:</p>
      <ul>
        <li>Waterborne diseases like cholera, typhoid, and diarrhea decrease dramatically</li>
        <li>Children miss fewer school days due to illness</li>
        <li>Women and girls, who typically bear the responsibility of water collection, have more time for education and income-generating activities</li>
        <li>Overall community health and productivity improve</li>
      </ul>
      
      <h3>Our Approach</h3>
      
      <p>For each community, our project includes:</p>
      <ul>
        <li>A deep borehole with solar-powered pump</li>
        <li>Water storage tanks and distribution points</li>
        <li>Water quality testing and treatment systems</li>
        <li>Formation and training of a local water committee for maintenance</li>
        <li>Community education on water hygiene and conservation</li>
      </ul>
      
      <p>We work closely with community leaders and local government to ensure that the water systems meet community needs and will be sustainably managed for years to come.</p>
      
      <h3>Your Support Makes a Difference</h3>
      
      <p>Your donation to this campaign will directly fund the installation of clean water systems in Ikorodu communities. Here's what your contribution can provide:</p>
      <ul>
        <li>₦10,000: Water hygiene education for one community</li>
        <li>₦50,000: Water quality testing equipment</li>
        <li>₦100,000: Water storage tank</li>
        <li>₦500,000: Solar-powered pump system</li>
        <li>₦1,500,000: Complete borehole installation for one community</li>
      </ul>
      
      <p>Together, we can ensure that more families in Ikorodu have access to this essential resource, creating healthier communities and brighter futures.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    raised: 1500000,
    goal: 2500000,
    daysLeft: 45,
    donors: 120,
    category: "Water",
    location: "Ikorodu, Lagos State",
    startDate: "April 1, 2025",
    endDate: "May 15, 2025",
    updates: [
      {
        date: "April 10, 2025",
        title: "First Community Assessment Completed",
        content:
          "Our team has completed the initial assessment of the first three communities in Ikorodu. We've identified optimal locations for boreholes and met with community leaders to discuss implementation plans. Thank you to everyone who has donated so far - we're making progress!",
      },
      {
        date: "April 5, 2025",
        title: "Campaign Launch",
        content:
          "We're excited to launch our Clean Water for Ikorodu campaign! Our goal is to provide clean, safe water to 10 communities in Ikorodu Local Government Area. We appreciate your support in making this possible.",
      },
    ],
  },
  {
    id: "2",
    title: "Education for Osun Children",
    description: "Building schools and providing educational resources for children in rural Osun State.",
    fullDescription: `
      <p>Education is a powerful tool for breaking the cycle of poverty, yet many children in rural Osun State lack access to quality education. Schools are often overcrowded, under-resourced, or simply too far away for children to attend regularly.</p>
      
      <p>Our Education for Osun Children campaign focuses on improving educational infrastructure and resources in five rural communities across Osun State. We aim to build new classrooms, renovate existing structures, provide learning materials, and support teacher training to ensure quality education for approximately 1,000 children.</p>
      
      <h3>The Need</h3>
      
      <p>In the target communities:</p>
      <ul>
        <li>Many children study in dilapidated or overcrowded classrooms</li>
        <li>Some classes are held outdoors under trees, making learning impossible during rainy seasons</li>
        <li>Schools lack basic learning materials like textbooks, writing materials, and visual aids</li>
        <li>Teachers have limited access to training and professional development</li>
      </ul>
      
      <h3>Our Approach</h3>
      
      <p>This campaign will fund:</p>
      <ul>
        <li>Construction of 10 new classrooms across five communities</li>
        <li>Renovation of 15 existing classrooms</li>
        <li>Provision of desks, chairs, and blackboards</li>
        <li>Distribution of textbooks and learning materials for 1,000 students</li>
        <li>Training workshops for 50 teachers</li>
        <li>Establishment of five school libraries</li>
      </ul>
      
      <p>We work in partnership with the Osun State Ministry of Education, local school management committees, and community leaders to ensure that our interventions address the most pressing needs and are maintained for the long term.</p>
      
      <h3>Impact</h3>
      
      <p>With improved educational facilities and resources:</p>
      <ul>
        <li>More children will enroll in and complete primary education</li>
        <li>Learning outcomes will improve</li>
        <li>Teachers will be better equipped to provide quality education</li>
        <li>Communities will have a stronger foundation for development</li>
      </ul>
      
      <h3>Your Support</h3>
      
      <p>Your donation to this campaign will directly contribute to improving educational opportunities for children in Osun State. Here's what your contribution can provide:</p>
      <ul>
        <li>₦5,000: School supplies for one child for a year</li>
        <li>₦25,000: Teacher training for one educator</li>
        <li>₦50,000: Desks and chairs for one classroom</li>
        <li>₦100,000: Library books and resources</li>
        <li>₦500,000: Renovation of one classroom</li>
        <li>₦1,000,000: Construction of one new classroom</li>
      </ul>
      
      <p>Together, we can help children in Osun State access the quality education they deserve, opening doors to brighter futures.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    raised: 3200000,
    goal: 5000000,
    daysLeft: 30,
    donors: 215,
    category: "Education",
    location: "Multiple communities, Osun State",
    startDate: "March 15, 2025",
    endDate: "April 15, 2025",
    updates: [
      {
        date: "April 5, 2025",
        title: "First School Renovation Begins",
        content:
          "We're excited to announce that renovation work has begun on the first school in Ife East. The community has been incredibly supportive, with local volunteers helping to clear the site and prepare for construction. We expect this first renovation to be completed within three weeks.",
      },
      {
        date: "March 25, 2025",
        title: "Educational Materials Ordered",
        content:
          "Thanks to your generous donations, we've placed orders for textbooks, notebooks, and other learning materials for 500 students. These will be distributed to the first three schools in our project once renovations are complete.",
      },
      {
        date: "March 15, 2025",
        title: "Campaign Launch",
        content:
          "Today we launch our Education for Osun Children campaign! Our team has completed assessments of all five target communities and developed detailed plans for each school. We're grateful for your support as we work to improve educational opportunities for children in rural Osun State.",
      },
    ],
  },
  {
    id: "3",
    title: "Flood Relief in Ogun State",
    description: "Supporting communities affected by recent flooding in Ogun State.",
    fullDescription: `
      <p>Recent heavy rainfall has caused severe flooding in several communities across Ogun State, displacing thousands of families and destroying homes, crops, and infrastructure. The affected communities urgently need emergency relief and support to recover from this disaster.</p>
      
      <p>Our Flood Relief in Ogun State campaign aims to provide immediate assistance to 2,000 affected families (approximately 10,000 individuals) and support early recovery efforts to help communities rebuild their lives.</p>
      
      <h3>The Situation</h3>
      
      <p>The flooding has had devastating impacts:</p>
      <ul>
        <li>Over 5,000 homes damaged or destroyed</li>
        <li>Thousands of families displaced, many staying in temporary shelters</li>
        <li>Crops and livestock lost, threatening food security</li>
        <li>Water sources contaminated, increasing the risk of waterborne diseases</li>
        <li>Schools, health centers, and other infrastructure damaged</li>
      </ul>
      
      <h3>Our Response</h3>
      
      <p>This campaign will fund a comprehensive relief and early recovery package:</p>
      
      <h4>Immediate Relief (First 30 Days)</h4>
      <ul>
        <li>Emergency food packages for 2,000 families</li>
        <li>Clean water and water purification tablets</li>
        <li>Hygiene kits (soap, sanitary pads, toothbrushes, etc.)</li>
        <li>Emergency shelter kits for families whose homes were destroyed</li>
        <li>Medical supplies and support for mobile clinics</li>
      </ul>
      
      <h4>Early Recovery (30-90 Days)</h4>
      <ul>
        <li>Household item replacement (cooking utensils, bedding, etc.)</li>
        <li>Shelter repair kits for families whose homes were damaged</li>
        <li>Seeds and tools for farmers to replant crops</li>
        <li>School supply kits for affected children</li>
        <li>Support for community infrastructure repairs</li>
      </ul>
      
      <p>We are working in coordination with the Ogun State Emergency Management Agency, local governments, and other humanitarian organizations to ensure an effective and coordinated response.</p>
      
      <h3>Urgent Need</h3>
      
      <p>The situation is critical, and immediate action is needed. Families who have lost everything need support now to meet their basic needs and begin rebuilding their lives.</p>
      
      <h3>Your Support</h3>
      
      <p>Your donation to this campaign will directly help flood-affected families in Ogun State. Here's what your contribution can provide:</p>
      <ul>
        <li>₦10,000: Emergency food package for one family for two weeks</li>
        <li>₦25,000: Hygiene and water purification kit for one family</li>
        <li>₦50,000: Emergency shelter kit for a displaced family</li>
        <li>₦100,000: Household items replacement package</li>
        <li>₦250,000: Shelter repair kit and support for home reconstruction</li>
      </ul>
      
      <p>Together, we can help these communities survive this crisis and rebuild their lives. Every donation, no matter the size, makes a difference in this urgent situation.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    raised: 7500000,
    goal: 10000000,
    daysLeft: 60,
    donors: 430,
    category: "Emergency Relief",
    location: "Multiple communities, Ogun State",
    startDate: "February 10, 2025",
    endDate: "April 10, 2025",
    updates: [
      {
        date: "April 1, 2025",
        title: "Early Recovery Phase Begins",
        content:
          "As the floodwaters recede in most areas, we're transitioning to early recovery activities. This week, we began distributing shelter repair kits to 500 families whose homes were damaged but not destroyed. We're also providing seeds and tools to farmers to help them replant crops lost in the floods.",
      },
      {
        date: "March 15, 2025",
        title: "1,500 Families Reached with Emergency Aid",
        content:
          "Thanks to your generous support, we've now provided emergency food packages, clean water, and hygiene kits to 1,500 families across six communities in Ogun State. Our mobile medical teams have treated over 800 patients for flood-related illnesses and injuries.",
      },
      {
        date: "February 25, 2025",
        title: "First Relief Distributions Complete",
        content:
          "Our team has completed the first round of emergency relief distributions in three of the worst-affected communities. 500 families received food packages, water purification tablets, and hygiene kits. We've also set up temporary shelter for 200 families whose homes were completely destroyed.",
      },
      {
        date: "February 10, 2025",
        title: "Emergency Response Launched",
        content:
          "Our assessment team has completed rapid needs assessments in the flood-affected areas of Ogun State. We've identified the most urgent needs and are mobilizing resources for immediate response. Thank you for your quick support in this emergency situation.",
      },
    ],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const campaign = campaigns.find((campaign) => campaign.id === params.id)

  if (!campaign) {
    return {
      title: "Campaign Not Found - Charity Foundation Nigeria",
      description: "The requested campaign could not be found.",
    }
  }

  return {
    title: `${campaign.title} - Charity Foundation Nigeria`,
    description: campaign.description,
  }
}

export default function CampaignPage({ params }: { params: { id: string } }) {
  const campaign = campaigns.find((campaign) => campaign.id === params.id)

  if (!campaign) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Campaign Not Found</h1>
          <p className="text-gray-600 mb-6">The campaign you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/campaigns">View All Campaigns</Link>
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
          <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">{campaign.category}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{campaign.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{campaign.description}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{campaign.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Ends: {campaign.endDate}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{campaign.donors} Donors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Content */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">₦{campaign.raised.toLocaleString()} raised</span>
                      <span className="text-gray-500">of ₦{campaign.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">{campaign.daysLeft} days left</span>
                      <span className="text-sm font-medium">
                        {Math.round((campaign.raised / campaign.goal) * 100)}% funded
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4 mb-8">
                    <Button asChild className="flex-1">
                      <Link href="#donate">
                        <Heart className="mr-2 h-4 w-4" /> Donate Now
                      </Link>
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
                  <TabsTrigger value="about">About the Campaign</TabsTrigger>
                  <TabsTrigger value="updates">Updates ({campaign.updates.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: campaign.fullDescription }}
                    />

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {campaign.gallery.map((image, index) => (
                          <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${campaign.title} - image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="updates">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="space-y-8">
                      {campaign.updates.map((update, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm text-gray-500">{update.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                          <p className="text-gray-600">{update.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/campaigns">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Campaigns
                  </Link>
                </Button>
              </div>
            </div>

            {/* Donation Form */}
            <div id="donate">
              <div className="sticky top-24">
                <DonationCard className="mb-6" />

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Share This Campaign</h3>
                  <p className="text-gray-600 mb-4">Help us spread the word about this important cause.</p>
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

      {/* Other Campaigns */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Other Campaigns You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns
              .filter((c) => c.id !== campaign.id)
              .slice(0, 3)
              .map((otherCampaign) => (
                <div
                  key={otherCampaign.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={otherCampaign.image || "/placeholder.svg"}
                      alt={otherCampaign.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {otherCampaign.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{otherCampaign.title}</h3>
                    <p className="text-gray-600 mb-4">{otherCampaign.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">₦{otherCampaign.raised.toLocaleString()} raised</span>
                        <span className="text-gray-500">of ₦{otherCampaign.goal.toLocaleString()}</span>
                      </div>
                      <Progress value={(otherCampaign.raised / otherCampaign.goal) * 100} className="h-2" />
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/campaigns/${otherCampaign.id}`}>View Campaign</Link>
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

