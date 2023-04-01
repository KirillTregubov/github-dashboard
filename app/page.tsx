import Auth from '@/components/auth'
import RepoList from '@/components/repolist'
import { getSession } from '@/lib/auth'

export default async function Home() {
  const session = await getSession()

  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Auth />
      {session ? (
        <div>
          {/* @ts-expect-error Async Server Component */}
          <RepoList />
        </div>
      ) : (
        <div>
          <p>Welcome to dashboard! Please authenticate to continue.</p>
        </div>
      )}
    </main>
  )
}
