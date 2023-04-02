import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET
      // authorization: { params: { scope: 'public_repo' } },
    })
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log('user', user)
    //   console.log('account', account)
    //   console.log('profile', profile)
    //   console.log('email', email)
    //   console.log('credentials', credentials)
    //   return true
    // },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.user.id = token.id
      session.user.username = token.username
      session.user.company = token.company
      session.user.hireable = token.hireable
      session.user.createdAt = token.userCreatedAt
      session.user.updatedAt = token.userUpdatedAt
      return session
    },
    async jwt({ token, account, profile }) {
      if (profile) {
        // NOTE: Add additional GitHub user data here
        token.id = profile.id
        token.username = profile.login
        token.company = profile.company
        token.hireable = profile.hireable || false
        token.userCreatedAt = profile.created_at
        token.userUpdatedAt = profile.updated_at
      }
      if (account?.access_token) {
        token.accessToken = account.access_token
      }
      return token
    }
  }
}

export default NextAuth(authOptions)
