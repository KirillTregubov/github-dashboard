import { cookies } from 'next/headers'

export async function fetchRepositories() {
  console.log('fetched repositories')
  const cookieStore = cookies()
  const jwt = cookieStore.get('next-auth.session-token')
  console.log(jwt?.value)

  if (!jwt?.value) {
    throw new Error('You are not authenticated with GitHub')
  }

  return 'demo'
  // const res = await fetch('https://api.github.com/users/USERNAME/repos')
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
  // return res.json()
}
