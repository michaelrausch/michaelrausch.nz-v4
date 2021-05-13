import Head from 'next/head'
import React from 'react'

import { Banner } from '../components/home/Banner'
import { Jumbotron } from '../components/home/Jumbotron'
import { PhotographyBlock } from '../components/blocks/PhotographyBlock'
import { AppFeatureBlock } from '../components/blocks/AppFeatureBlock'
import { ContactCtaBlock } from '../components/blocks/ContactCtaBlock'
import { Footer } from '../components/Footer'

import GetLDJson from '../util/ldjson'
import { NextSeo } from 'next-seo'

const Home: React.FC = () => {
  return (
      <div className="bg-gray-100">
        <NextSeo
          title="Web & App Development"
        />
        
        <Head>
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(GetLDJson()) }}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner
          body="Download Moment, a free event countdown app."
          smallBody="Download Moment, a free event countdown app."
          link="https://apps.apple.com/nz/app/moment-event-countdown/id1533376588?ign-itscg=30200&ign-itsct=apps_box#?platform=iphone"
          linkTitle="Download"></Banner>

        <Jumbotron
          name="Michael"
          bio="I'm a Christchurch based freelance software engineer and photographer. I create mobile and web applications for small businesses throughout Australia and New Zealand."
          secondaryLinkUrl="https://y.at/%F0%9F%8D%8D%F0%9F%98%9C%F0%9F%98%82%F0%9F%8C%B5%F0%9F%8E%B8"
          secondaryLinkName="Social Links"
          imageUrl="/images/15.jpg"
        ></Jumbotron>

        <AppFeatureBlock
          appName="Barber & Co"
          appDescription="Download the Barber & Co app to be eligible for their Loyalty Programme. Have your barber scan your code and work towards receiving 50% off your 5th cut, and your 10th cut FREE."
          appStoreUrl="https://apps.apple.com/nz/app/barber-co/id1541086997?itsct=apps_box_badge&amp;itscg=30200"
          imageUrl="/images/BarberCo_iPhone_65.png"
        ></AppFeatureBlock>
  
        <PhotographyBlock
          bio="I am currently shooting for Metropol Magazine, and am available to take on a limited amount of photography work. I have a wide range of experience, so feel free to take a look at my portfolio and get in touch."
          portfolioUrl="https://photography.michaelrausch.nz"

          mainImage={{ url: "/images/12.jpg", alt: "Oxford Terrace"}}
          secondaryImage={{ url: "/images/6.jpg", alt: "Saint's of Tai Tapu Wedding"}}
          tertiaryImage={{ url: "/images/4.jpg", alt: "Industria"}}
        ></PhotographyBlock>

        <ContactCtaBlock
          email="michael@rausch.nz"
          subject="hello!"
        ></ContactCtaBlock>

        <Footer
          name="Michael Rausch"
          instagramUrl="https://www.instagram.com/michaelnz_/"
          linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
        ></Footer>
      </div>
    )
}

export default Home;