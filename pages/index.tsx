import React from 'react'

import { PhotographyBlock } from '../components/blocks/PhotographyBlock'
import { AppFeatureBlock } from '../components/blocks/AppFeatureBlock'
import { ContactCtaBlock } from '../components/blocks/ContactCtaBlock'
import { HomePageLayout } from '../layouts/HomePageLayout'

const Home: React.FC = () => {
  return (
     <HomePageLayout>
       <AppFeatureBlock
          appName="Barber & Co"
          appDescription="Download the Barber & Co app to be eligible for their Loyalty Programme. Have your barber scan your code and work towards receiving 50% off your 5th cut, and your 10th cut FREE."
          appStoreUrl="https://apps.apple.com/nz/app/barber-co/id1541086997?itsct=apps_box_badge&amp;itscg=30200"
          playStoreUrl="https://play.google.com/store/apps/details?id=com.barbercoandroid&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          imageUrl="/images/BarberCo_iPhone_Vertical.png"
        />
  
        <PhotographyBlock
          bio="I am currently shooting for Metropol Magazine, and am available to take on a limited amount of photography work. I have a wide range of experience, so feel free to take a look at my portfolio and get in touch."
          portfolioUrl="https://photography.michaelrausch.nz"

          mainImage={{ url: "/images/12.jpg", alt: "Oxford Terrace"}}
          secondaryImage={{ url: "/images/6.jpg", alt: "Saint's of Tai Tapu Wedding"}}
          tertiaryImage={{ url: "/images/4.jpg", alt: "Industria"}}
        />

        <ContactCtaBlock
          email="michael@rausch.nz"
          subject="hello!"
        />
     </HomePageLayout>
    )
}

export default Home;