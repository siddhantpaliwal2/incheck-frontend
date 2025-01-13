'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

export default function Home() {
  const router = useRouter();

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

      

        <p className="text-gray-600">
          Get helpful reminders texted to you throughout the day, like:
        </p>
        <ul className="text-gray-600 mt-2 mb-5">
          <li>💧 Drink water</li>
          <li>🏋️‍♀️ Exercise</li>
          <li>👨‍💻 Get work done</li>
        </ul>
        <button 
          onClick={() => router.push('/sign-up')}
          className="bg-green-500 text-white px-6 py-3 rounded-lg mb-6 hover:bg-green-600 transition-colors"
        >
          Text me
        </button>
      </main>
    </div>
  );
}

