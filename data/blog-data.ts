export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
  featured?: boolean
}

export const blogPageData = {
  hero: {
    title: "Our Blog",
    description: "Stay updated with the latest news, stories, and insights from our work around the world.",
  },
  newsletter: {
    title: "Subscribe to Our Newsletter",
    description:
      "Stay updated with our latest news, stories, and upcoming events. We'll send you a monthly digest of our most important updates.",
  },
  posts: [
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
      excerpt:
        "How small loans are making a big difference in the lives of women entrepreneurs in developing countries.",
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
  ] as BlogPost[],
}

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "water", label: "Water" },
  { value: "education", label: "Education" },
  { value: "emergency-relief", label: "Emergency Relief" },
  { value: "empowerment", label: "Empowerment" },
  { value: "agriculture", label: "Agriculture" },
  { value: "volunteering", label: "Volunteering" },
]
