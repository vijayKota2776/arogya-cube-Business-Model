import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/business');
}

// Force dynamic rendering for redirect to work properly
export const dynamic = 'force-dynamic';
