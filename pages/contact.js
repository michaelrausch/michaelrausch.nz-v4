import Head from 'next/head'
import Footer from '../components/footer'
import GetLDJson from '../util/ldjson'
import PageHeader from '../components/pageheader'

export default function Contact() {
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

        <PageHeader title="Contact Me"></PageHeader>


     


      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCE951" fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,250.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <Footer></Footer>

    </div>
  )
}
