import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Target, Award } from "lucide-react"

import {
  aboutMetadata,
  heroSection,
  storySection,
  mvvSection,
  teamSection,
  ctaSection,
} from "@/data/aboutData"

export const metadata = aboutMetadata

const iconComponents = {
  Target: <Target className="h-8 w-8 text-primary" />,
  Heart: <Heart className="h-8 w-8 text-secondary" />,
  Award: <Award className="h-8 w-8 text-accent" />,
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroSection.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{heroSection.description}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src={storySection.image} alt="Our story" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{storySection.title}</h2>
              {storySection.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 mb-6">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{mvvSection.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{mvvSection.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mvvSection.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {iconComponents[item.icon as keyof typeof iconComponents]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{teamSection.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{teamSection.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamSection.members.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 rounded-10 bg-primary flex items-center justify-center text-white mb-5">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaSection.title}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">{ctaSection.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaSection.buttons.map((btn, index) => (
              <Button
                key={index}
                asChild
                variant={btn.variant as "secondary" | "outline"}
                className="rounded-full px-8 py-6 text-lg font-semibold"
              >
                <Link href={btn.href}>{btn.text}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
