import { NextSeo } from "next-seo";

import Head from "next/head";
import React from "react";
import GetLDJson from "../lib/ldjson";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banner } from "../components/home/Banner";
import { JumbotronV2 } from "../components/home/JumbotronV2";

interface Props {
    strings: any;
}

export const HomePageLayout: React.FC<Props> = ({children, strings}) => {
    return (
        <div className="bg-gray-800">
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

            {/* <Banner
                body="Download Moment, a free event countdown app."
                smallBody="Download Moment, a free event countdown app."
                link="https://apps.apple.com/nz/app/moment-event-countdown/id1533376588?ign-itscg=30200&ign-itsct=apps_box#?platform=iphone"
                linkTitle="Download"/> */}

            <Header/>

            <JumbotronV2
                name={strings.jumbo_name}
                bio={strings.jumbo_bio}
                secondaryLinkUrl="https://github.com/michaelrausch/"
                secondaryLinkName="Github"
                imageUrl="/images/16.jpg"
            />

            {children}

            <Footer
                name="Michael Rausch"
                instagramUrl="https://www.instagram.com/michaelnz_/"
                linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
            />
        </div>
    )
}