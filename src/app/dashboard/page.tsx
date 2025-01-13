'use client';
import { useUser, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome, {user.firstName}!</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      {/* Add your dashboard content here */}
    </div>
  );
} 