import React from 'react'
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Custom404: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Not Found"
            />

            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-gray-800 h-screen">
                <Header />

                <h1 className="text-9xl font-black text-white text-center pt-32">404</h1>
                <p className="text-5xl text-white font-bold text-center pb-96">Not Found</p>

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