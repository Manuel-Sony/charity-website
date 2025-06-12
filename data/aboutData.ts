import { StaticImageData } from "next/image"

export const aboutMetadata = {
  title: "About Us - Charity Foundation",
  description: "Learn about our mission, vision, and the team behind Charity Foundation.",
}

export const heroSection = {
  title: "About Our Foundation",
  description: "We are dedicated to creating positive change and supporting communities in need around the world.",
}

export const storySection = {
  title: "Our Story",
  paragraphs: [
    "Founded in 2010, Charity Foundation began with a simple mission: to create positive change in communities facing challenges around the world. What started as a small group of dedicated volunteers has grown into a global organization with projects in over 50 countries.",
    "Our journey has been guided by the belief that everyone deserves access to basic necessities, education, and opportunities to thrive. Through the generosity of our donors and the dedication of our volunteers, we've been able to make a significant impact in the lives of thousands of people.",
    "Today, we continue to expand our reach and deepen our impact, always staying true to our core values of compassion, integrity, and sustainability.",
  ],
  image: "/placeholder.svg?height=800&width=600",
}

export const mvvSection = {
  title: "Our Mission, Vision & Values",
  description: "These guiding principles shape everything we do and help us create lasting positive change.",
  items: [
    {
    icon: "Target",
    title: "Our Mission",
    text: "To uplift the less privileged by offering economic, social, moral, and financial support, while developing impactful initiatives aimed at minimizing hunger to its lowest level.",
  },
    {
    icon: "Heart",
    title: "Our Vision",
    text: "To build a society where hunger is nearly eliminated, vulnerability is reduced, and every individual experiences love, happiness, and freedom from the consequences of poverty.",
  },

  {
    icon: "Award",
    title: "Our Values",
    text: "We believe in humanity—offering compassionate service and love to build a less vulnerable society—and in integrity, upholding sincerity, truth, and honest communication in all our actions.",
  },
  ],
}

export const teamSection = {
  title: "Our Leadership Team",
  description: "Meet the dedicated individuals who guide our organization and drive our mission forward.",
  members: [
    { name: "Sarah Johnson", role: "Executive Director", image: "/placeholder.svg?height=400&width=400" },
    { name: "Michael Chen", role: "Director of Operations", image: "/placeholder.svg?height=400&width=400" },
    { name: "Emily Rodriguez", role: "Director of Programs", image: "/placeholder.svg?height=400&width=400" },
    { name: "David Kim", role: "Director of Development", image: "/placeholder.svg?height=400&width=400" },
  ],
}

export const ctaSection = {
  title: "Join Us in Making a Difference",
  description:
    "There are many ways to get involved and support our mission. Whether you donate, volunteer, or spread the word, your contribution matters.",
  buttons: [
    { text: "Make a Donation", href: "/donate", variant: "secondary" },
    {
      text: "Become a Volunteer",
      href: "/volunteer",
      variant: "outline",
    },
  ],
}
