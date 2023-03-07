import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  // TODO: implement cookies when setting them is supported
  const client_id = process.env.GITHUB_CLIENT_ID
  const state = process.env.NEXTAUTH_SECRET
  // const redirect_uri = 'http://localhost:3000/api/auth/github/redirect'
  // &redirect_uri=${redirect_uri}
  redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user:email&state=${state}`
  )
}
