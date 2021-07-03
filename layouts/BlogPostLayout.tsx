import { NextSeo } from "next-seo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

interface Props {
    title: string;
    hero?: string;
}

export const BlogPostLayout: React.FC<Props> = ({children, title, hero}) => {
    return (
        <div className="bg-gray-900">
            <NextSeo
                title={title}
            />

                <Header />

                <div className="max-w-7xl mx-auto mt-10 pb-40 px-4 sm:px-6 lg:px-8 ">
                    <h1 className="font-black text-7xl pb-10 text-white">{title}</h1>
                    {/* <img src={hero} className="w-full rounded-md"></img> */}

                    {children}
                </div>

                <Footer
            name="Michael Rausch"
            instagramUrl="https://www.instagram.com/michaelnz_/"
            linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
            ></Footer>       
        </div>
    )
}