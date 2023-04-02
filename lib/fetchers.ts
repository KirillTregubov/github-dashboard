import { cookies } from 'next/headers'
import { getAccessToken, getSession } from './auth'

const GITHUB_API_VERSION = '2022-11-28'

export async function fetchUserRepositories() {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    throw new Error('You are not authenticated with GitHub')
  }

  const res = await fetch('https://api.github.com/user/repos', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${accessToken}`
      // 'X-GitHub-Api-Version': GITHUB_API_VERSION
    }
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
