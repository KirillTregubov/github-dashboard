import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    accessToken: string
    user: {
      id: number
      username: string
      company: string | null
      hireable: boolean
      createdAt: string
      updatedAt: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    id: number
    username: string
    company: string | null
    hireable: boolean
    userCreatedAt: string
    userUpdatedAt: string
  }
}
