import { AppContext } from 'next/app'
import { redirect } from 'next/navigation'

export async function GET(request: Request, context: AppContext) {
  // TODO: implement cookies when setting them is supported

  const url = new URL(request.url)
  console.log('redirect')
  console.log(url.searchParams?.get('code'))
  console.log(url.searchParams?.get('state'))

  const client_id = process.env.GITHUB_CLIENT_ID
  const client_secret = process.env.GITHUB_SECRET
  const code = url.searchParams?.get('code')

  if (url.searchParams?.get('state') !== process.env.NEXTAUTH_SECRET) {
    return new Response('Invalid state', { status: 400 })
  }

  const res = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )

  if (!res.ok) {
    return new Response('Error', { status: 400 })
  }

  const data = await res.json()
  console.log(data)

  // redirect('https://github.com/login/oauth/access_token')
  redirect('/')

  // const url = new URL(request.url)
  // console.log(url.searchParams?.get('code'))
  // console.log(url.searchParams?.get('state'))
  // return new Response('Callback')
}
