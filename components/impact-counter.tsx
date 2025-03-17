"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Heart, Users, Home, BookOpen } from "lucide-react"

interface CounterProps {
  end: number
  label: string
  icon: React.ReactNode
  prefix?: string
  suffix?: string
}

function Counter({ end, label, icon, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(end * progress)

      setCount(currentCount)

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [end])

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}

export default function ImpactCounter() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Through the generosity of our donors and the dedication of our volunteers, we've made a significant impact
          across Nigeria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Counter end={250000000} label="Naira Raised" icon={<Heart className="h-8 w-8 text-primary" />} prefix="₦" />
        <Counter end={75000} label="People Helped" icon={<Users className="h-8 w-8 text-primary" />} />
        <Counter end={120} label="Projects Completed" icon={<Home className="h-8 w-8 text-primary" />} />
        <Counter end={15} label="States Reached" icon={<BookOpen className="h-8 w-8 text-primary" />} suffix="+" />
      </div>
    </div>
  )
}

