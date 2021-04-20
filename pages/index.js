import Head from 'next/head'
import Banner from '../components/banner'
import ContactForm from '../components/contactform'
import DevCta from '../components/devcta'
import Jumbotron from '../components/jumbotron'
import Photography from '../components/photography'
import Section from '../components/section'
import Footer from '../components/footer'
import GetLDJson from '../util/ldjson'

export default function Home() {
  return (
    <div className="bg-gray-900 ">
      <Head>
        <title>Michael Rausch | Web and App Development</title>
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

      <Banner
        body="I just launched Moment, A free event countdown app."
        smallBody="I just launched Moment, A free event countdown app."
        link="https://apps.apple.com/nz/app/moment-event-countdown/id1533376588?ign-itscg=30200&ign-itsct=apps_box#?platform=iphone"
        linkTitle="Download"></Banner>

      <Jumbotron></Jumbotron>

      <Section>
        <DevCta></DevCta>
      </Section>

      <Section>
        <Photography></Photography>
      </Section>



      <Section title="Get In Touch">
        <ContactForm></ContactForm>
      </Section>


      <Footer></Footer>



    </div>
  )
}
