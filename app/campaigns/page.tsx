import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Search, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata = {
  title: "Campaigns - Charity Foundation",
  description: "Browse and support our ongoing campaigns to help communities in need.",
}

interface Campaign {
  id: string
  title: string
  description: string
  image: string
  raised: number
  goal: number
  daysLeft: number
  category: string
}

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Clean Water Initiative",
    description: "Providing clean water to communities in need across Africa.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 15000,
    goal: 25000,
    daysLeft: 45,
    category: "Water",
  },
  {
    id: "2",
    title: "Education for All",
    description: "Building schools and providing educational resources for children.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 32000,
    goal: 50000,
    daysLeft: 30,
    category: "Education",
  },
  {
    id: "3",
    title: "Emergency Relief Fund",
    description: "Supporting communities affected by natural disasters and conflicts.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 75000,
    goal: 100000,
    daysLeft: 60,
    category: "Emergency",
  },
  {
    id: "4",
    title: "Healthcare Access Program",
    description: "Providing medical care and supplies to underserved communities.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 45000,
    goal: 80000,
    daysLeft: 75,
    category: "Health",
  },
  {
    id: "5",
    title: "Sustainable Agriculture",
    description: "Teaching sustainable farming practices to rural communities.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 28000,
    goal: 40000,
    daysLeft: 20,
    category: "Food",
  },
  {
    id: "6",
    title: "Women Empowerment Initiative",
    description: "Supporting women entrepreneurs with training and microloans.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 62000,
    goal: 75000,
    daysLeft: 15,
    category: "Empowerment",
  },
]

export default function CampaignsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Campaigns</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Browse our ongoing initiatives and help us make a lasting impact in communities around the world.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 px-4 bg-white shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search campaigns..." className="pl-10 h-12 rounded-full" />
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-[180px] h-12 rounded-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="empowerment">Empowerment</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px] h-12 rounded-full">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="most-funded">Most Funded</SelectItem>
                  <SelectItem value="least-funded">Least Funded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {campaign.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">${campaign.raised.toLocaleString()} raised</span>
                      <span className="text-gray-500">of ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{campaign.daysLeft} days left</span>
                    <span className="text-sm font-medium">
                      {Math.round((campaign.raised / campaign.goal) * 100)}% funded
                    </span>
                  </div>

                  <Button asChild className="w-full rounded-full">
                    <Link href={`/campaigns/${campaign.id}`}>Donate Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Own Campaign */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Start Your Own Campaign</h2>
                <p className="mb-6">
                  Have a cause you're passionate about? Start your own fundraising campaign and rally your network to
                  support it.
                </p>
                <Button asChild variant="secondary" className="rounded-full">
                  <Link href="/fundraise">
                    Start a Campaign <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Start a campaign"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

