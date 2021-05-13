import Head from 'next/head'
import { Footer } from '../components/Footer'
import GetLDJson from '../util/ldjson'
import { Header } from '../components/Header'
import { Container } from '../components/Container'

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Michael Rausch | Contact</title>
        <meta name="description"
          content="A Christchurch based software engineer who specializes in creating websites and apps for small and medium-sized businesses" />
        <meta name="robots" content="index, follow" />
        <meta lang="en" />
        <link rel="canonical" href="https://michaelrausch.nz" />
        
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GetLDJson()) }}
        />
        
        <meta property="og:title" content="Michael Rausch | Web and App Development" />
        <meta property="og:description"
          content="A Christchurch based software engineer who specializes in creating websites and apps for small and medium-sized businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://michaelrausch.nz/" />
        <meta property="og:image" content="https://michaelrausch.nz/images/profilephoto.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <Container>
      <h1>Contact</h1>

      </Container>

      <Footer
          name="Michael Rausch"
          instagramUrl="https://www.instagram.com/michaelnz_/"
          linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
        ></Footer>
    </div>
  )
}

export default Contact
