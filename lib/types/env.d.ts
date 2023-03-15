namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    GITHUB_CLIENT_ID: string
    GITHUB_SECRET: string
  }
}
