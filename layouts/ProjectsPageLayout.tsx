import { NextSeo } from "next-seo";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"

export const ProjectsPageLayout: React.FC = ({ children }) => {
    return (
        <div className="bg-jumbo bg-no-repeat bg-center bg-cover p-0">

            <div className="bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-000">
                <NextSeo
                    title="Projects"
                />

                <Header />

                <div className="w-full align-middle">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 align-middle">
                        <h1 className="font-black text-5xl md:text-7xl text-white align-middle py-10">Projects</h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-10 pb-40 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {children}
                    </div>
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