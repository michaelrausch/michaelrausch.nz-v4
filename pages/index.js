import Head from 'next/head'
import Banner from '../components/banner'
import ContactForm from '../components/contactform'
import DevCta from '../components/devcta'
import Jumbotron from '../components/jumbotron'
import Photography from '../components/photography'
import Section from '../components/section'
import SectionWithBg from '../components/sectionwithbg'
import Footer from '../components/footer'
import Dark from '../components/dark'
import GetLDJson from '../util/ldjson'

export default function Home() {
  return (
    <div className="bg-gray-100">
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
        body="Download Moment, a free event countdown app."
        smallBody="Download Moment, a free event countdown app."
        link="https://apps.apple.com/nz/app/moment-event-countdown/id1533376588?ign-itscg=30200&ign-itsct=apps_box#?platform=iphone"
        linkTitle="Download"></Banner>

      <Jumbotron></Jumbotron>

      <Dark>
        <Section>
          <section class="text-gray-600 body-font  z-100">
            <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="sm:text-5xl text-3xl mb-4 font-extrabold text-black dark:text-white text-gray-900">Barber & Co
                </h1>
                <p class="mb-8 leading-relaxed">Download the Barber & Co app to be eligible for their Loyalty Programme. Have your barber scan your code and work towards receiving 50% off your 5th cut, and your 10th cut FREE.</p>
                <div class="flex justify-center">
                  <a className="" href="https://apps.apple.com/nz/app/barber-co/id1541086997?itsct=apps_box_badge&amp;itscg=30200" target="_blank" >
                    <img className="h-16" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1619913600&h=fad42942225e4c7ac5392eceb723a72f" alt="Download on the App Store" />
                  </a>
                </div>
              </div>
              <div class="">
                <img class="w-72 right" alt="hero" src="/images/BarberCo_iPhone_65.png" />
              </div>
            </div>
          </section>

        </Section>

      </Dark>


      <Section>
        <Photography></Photography>
      </Section>


      <SectionWithBg title="Get In Touch" className="">
        <ContactForm></ContactForm>
      </SectionWithBg>

      <Footer></Footer>

    </div>
  )
}
