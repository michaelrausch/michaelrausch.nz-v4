import React from 'react'
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import ChromeDinoGame from 'react-chrome-dino';

const Custom404: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Not Found"
            />

            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-gray-100 h-screen">
                <Header />

                <h1 className="text-9xl font-black text-gray-900 text-center pt-32">404</h1>
                <p className="text-5xl text-gray-700 font-bold text-center pb-20">Not Found</p>

                <ChromeDinoGame />

                <div className="py-20"></div>

                <Footer
                    name="Michael Rausch"
                    instagramUrl="https://www.instagram.com/michaelnz_/"
                    linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
                />
            </div>

            
        </>
    )
}

export default Custom404;