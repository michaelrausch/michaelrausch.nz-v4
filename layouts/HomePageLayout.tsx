import { NextSeo } from "next-seo";

import Head from "next/head";
import React from "react";
import GetLDJson from "../lib/ldjson";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banner } from "../components/home/Banner";
import { Jumbotron } from "../components/home/Jumbotron";

export const HomePageLayout: React.FC = ({children}) => {
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
                linkTitle="Download"/>

            <Header/>

            <Jumbotron
                name="Michael"
                bio="I'm a Christchurch based freelance software engineer and photographer. I create mobile and web applications for small businesses throughout Australia and New Zealand."
                secondaryLinkUrl="https://y.at/%F0%9F%8D%8D%F0%9F%98%9C%F0%9F%98%82%F0%9F%8C%B5%F0%9F%8E%B8"
                secondaryLinkName="Social Links"
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