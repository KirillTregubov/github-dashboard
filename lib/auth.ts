import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export async function getSession() {
  return getServerSession(authOptions)
}

export async function getAccessToken() {
  const session = await getSession()
  return session?.accessToken || null
}
