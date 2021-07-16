import React from 'react'
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';

const Custom404: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Not Found"
            />

            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-earth bg-no-repeat bg-center bg-cover ">
                <div className="bg-gray-900 backdrop-filter backdrop-blur-sm bg-opacity-40 h-screen">
                    <Header />

                    <Container>
                        <div className="">
                            <h1 className="text-6xl text-center font-black text-gray-100 md:text-9xl md:text-left">404</h1>
                            <p className="text-3xl text-center text-gray-200 font-bold md:text-5xl md:text-left">Page Not Found</p>
                        </div>
                    </Container>

                </div>                
            </div>

            
        </>
    )
}

export default Custom404;