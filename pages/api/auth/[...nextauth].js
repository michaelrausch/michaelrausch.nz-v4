import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS
});

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: "Access Token",
      credentials: {
        token: {label: 'Access Token', type: "text"}
      },
      async authorize(credentials, req) {
        var entries

        try {
          entries = await client
            .getEntries({
              'content_type': 'cvUser',
              'fields.accessKey': credentials.token
            })
        }
        catch(error) {
          return null;
        }

        if (entries && entries.total >= 1) {
          let result = entries.items[0]

          return {
            id: 0,
            name: result.fields.profileName,
            email: credentials.token + '-tempuser@rausch.nz',
            cv: result.fields.cv.fields.file.url
          }
        }

        return null;
      }
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_SECRET,
      domain: process.env.AUTH0_DOMAIN
    })
  ],
})