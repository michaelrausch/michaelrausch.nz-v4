import Head from 'next/head'
import { Footer } from '../components/Footer'
import GetLDJson from '../util/ldjson'
import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { NextSeo } from 'next-seo'

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <NextSeo
        title="Contact"
        />
        
      <Head>        
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GetLDJson()) }}
        />
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
