import { NextSeo } from "next-seo";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"

interface Props {
    title: string;
}

export const PageLayout: React.FC<Props> = ({ children, title }) => {
    return (
        <div className="bg-no-repeat bg-center bg-cover p-0">
            <div className="bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-910">
                <Header />

                <div className="w-full align-middle">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 align-middle">
                        <h1 className="font-black text-5xl text-center md:text-left md:text-6xl text-white align-middle py-10 font-futura-pt-bold text-shadow-gray-800">{title}</h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-10 pb-40 px-4 sm:px-6 lg:px-8">
                    { children }
                </div>

                <Footer
                    name="Michael Rausch"
                    instagramUrl="https://www.instagram.com/michaelnz_/"
                    linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
                ></Footer>
            </div>
        </div>
    )
}