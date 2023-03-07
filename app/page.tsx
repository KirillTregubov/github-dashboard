import Auth from '@/components/auth'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-lg">
      <h1>GitHub Dashboard</h1>
      {/* <a href="/api/auth">Dashboard</a> */}
      {/* @ts-expect-error Async Server Component */}
      <Auth />
    </main>
  )
}
