"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

interface DonationCardProps {
  className?: string
}

export default function DonationCard({ className }: DonationCardProps) {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("5000")
  const [customAmount, setCustomAmount] = useState("")

  const handleAmountClick = (value: string) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount("custom")
  }

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Your support helps us continue our mission.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Donation Type</Label>
          <RadioGroup
            defaultValue="one-time"
            value={donationType}
            onValueChange={setDonationType}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <Label htmlFor="one-time" className="cursor-pointer">
                One-time
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly" className="cursor-pointer">
                Monthly
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="annually" id="annually" />
              <Label htmlFor="annually" className="cursor-pointer">
                Annually
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Amount</Label>
          <div className="grid grid-cols-3 gap-2">
            {["2000", "5000", "10000", "25000", "50000"].map((value) => (
              <Button
                key={value}
                type="button"
                variant={amount === value ? "default" : "outline"}
                onClick={() => handleAmountClick(value)}
                className="h-12"
              >
                ₦{value}
              </Button>
            ))}
            <Button
              type="button"
              variant={amount === "custom" ? "default" : "outline"}
              onClick={() => setAmount("custom")}
              className="h-12 col-span-3"
            >
              Custom Amount
            </Button>
          </div>

          {amount === "custom" && (
            <div className="mt-2">
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="h-12"
                min="1"
              />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Donate ₦{amount === "custom" ? customAmount || "0" : amount}
          {donationType !== "one-time" && ` ${donationType}`}
        </Button>
      </CardFooter>
    </Card>
  )
}

