import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
          titleTemplate="Michael Rausch | %s"
          description="A Christchurch based software engineer who specializes in creating websites and apps for small and medium-sized businesses"
          canonical="https://michaelrausch.nz"
          openGraph={{
            type: 'website',
            locale: 'en_NZ',
            url: 'https://michaelrausch.nz',
            site_name: 'Michael Rausch | Web and App Development',
          }}

        />

      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
