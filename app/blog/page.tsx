import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata = {
  title: "Blog - Charity Foundation",
  description: "Read the latest news, stories, and updates from our charity foundation.",
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Impact of Clean Water on Community Health",
    excerpt: "Discover how access to clean water is transforming health outcomes in rural communities across Africa.",
    image: "/placeholder.svg?height=600&width=800",
    date: "May 15, 2025",
    author: "Sarah Johnson",
    category: "Water",
    featured: true,
  },
  {
    id: "2",
    title: "Education: The Key to Breaking the Cycle of Poverty",
    excerpt:
      "How our education initiatives are helping children build a brighter future for themselves and their communities.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 28, 2025",
    author: "Michael Chen",
    category: "Education",
  },
  {
    id: "3",
    title: "Responding to Natural Disasters: Our Emergency Relief Efforts",
    excerpt: "Learn about our rapid response approach to providing aid in the aftermath of natural disasters.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 10, 2025",
    author: "Emily Rodriguez",
    category: "Emergency Relief",
  },
  {
    id: "4",
    title: "Empowering Women Through Microfinance",
    excerpt: "How small loans are making a big difference in the lives of women entrepreneurs in developing countries.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 22, 2025",
    author: "David Kim",
    category: "Empowerment",
    featured: true,
  },
  {
    id: "5",
    title: "Sustainable Agriculture: Feeding Communities for Generations",
    excerpt:
      "Our approach to teaching sustainable farming practices that improve food security and protect the environment.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 5, 2025",
    author: "Lisa Patel",
    category: "Agriculture",
  },
  {
    id: "6",
    title: "The Power of Volunteerism: Stories from the Field",
    excerpt: "Volunteers share their experiences and the profound impact of giving their time to help others.",
    image: "/placeholder.svg?height=600&width=800",
    date: "February 18, 2025",
    author: "James Wilson",
    category: "Volunteering",
  },
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Stay updated with the latest news, stories, and insights from our work around the world.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 px-4 bg-white shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search articles..." className="pl-10 h-12 rounded-full" />
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
                  <SelectItem value="emergency-relief">Emergency Relief</SelectItem>
                  <SelectItem value="empowerment">Empowerment</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="volunteering">Volunteering</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px] h-12 rounded-full">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <Button asChild variant="outline" className="rounded-full">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <Button asChild variant="outline" className="rounded-full">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">
              Stay updated with our latest news, stories, and upcoming events. We'll send you a monthly digest of our
              most important updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button type="submit" variant="secondary" className="rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

