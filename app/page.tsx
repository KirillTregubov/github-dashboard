import Auth from '@/components/auth'

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Auth />
      <h1>GitHub Dashboard</h1>
    </main>
  )
}
