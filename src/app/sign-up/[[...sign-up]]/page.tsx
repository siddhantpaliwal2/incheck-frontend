'use client';
import React from 'react';
import { Check } from 'lucide-react';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <header className="flex items-center mb-12">
        <div className="bg-green-500 p-1 mr-2">
          <Check className="w-4 h-4 text-white" />
        </div>
        <span className="text-xl font-semibold text-gray-800">incheck</span>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center max-w-md mx-auto text-center">
        

        <div className="w-full mb-6">
          <SignUp />
        </div>

        
      </main>
    </div>
  );
} 