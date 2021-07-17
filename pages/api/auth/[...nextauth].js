import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

console.log(process.env.GITHUB_ID)

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
})