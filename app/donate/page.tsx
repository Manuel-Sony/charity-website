import DonationCard from "@/components/donation-card"
import { Heart, CreditCard, Lock, Award } from "lucide-react"
import { donationPageData } from "@/data/donation-data"

export const metadata = {
  title: "Donate - Charity Foundation Nigeria",
  description: "Support our mission by making a donation to help communities in need across Nigeria.",
}

const iconMap = {
  Heart,
  CreditCard,
  Lock,
  Award,
}

export default function DonatePage() {
  const { hero, content, benefits, impact } = donationPageData

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-primary py-20 px-4 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{hero.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{hero.description}</p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
              <p className="text-gray-600 mb-6">{content.description}</p>

              <div className="space-y-6 mt-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
                  return (
                    <div key={index} className="flex">
                      <div className="mr-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <DonationCard />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{impact.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{impact.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.examples.map((example, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">{example.amount}</h3>
                <p className="text-gray-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
