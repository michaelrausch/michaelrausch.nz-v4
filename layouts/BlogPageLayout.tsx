import { NextSeo } from "next-seo";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"

export const BlogPageLayout: React.FC = ({children}) => {
    return (
        <div className="bg-gray-800">
            <NextSeo
                title="Blog"
            />

            <Header/>

            <div className="max-w-7xl mx-auto mt-10 pb-40 px-4 sm:px-6 lg:px-8">
                <h1 className="font-black text-5xl md:text-7xl text-white">Blog</h1>

                <div>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container py-24 mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-700">
                                {children}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer
                name="Michael Rausch"
                instagramUrl="https://www.instagram.com/michaelnz_/"
                linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
            ></Footer>
    </div>
    )
}