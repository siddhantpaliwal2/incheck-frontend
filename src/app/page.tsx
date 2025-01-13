'use client';
import React from 'react';
import { Check } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <header className="flex items-center mb-12">
        <div className="bg-green-500 p-1 mr-2">
          <Check className="w-4 h-4 text-white" />
        </div>
        <span className="text-xl font-semibold text-gray-800">incheck</span>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          AI Mommy in your iMessage
        </h1>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full flex space-x-2 mb-6">
            <Input 
              type="tel" 
              placeholder="Enter your phone number" 
              className="flex-grow"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
              Text me
            </Button>
          </div>
        </form>

        <p className="text-gray-600">
          Get helpful reminders texted to you throughout the day, like:
        </p>
        <ul className="text-gray-600 mt-2">
          <li>💧 Drink water</li>
          <li>🏋️‍♀️ Exercise</li>
          <li>👨‍💻 Get work done</li>
        </ul>
      </main>
    </div>
  )
}

