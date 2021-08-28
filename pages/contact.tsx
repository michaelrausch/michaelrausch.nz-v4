import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React from "react";
import ContactForm from "../components/ContactForm";
import { PageWithMapLayout } from "../layouts/PageWithMapLayout";

const Contact: React.FC = () => {
    const Model = dynamic(
        () => import('../components/Model'),
        { ssr: false }
    )

    return (
        <PageWithMapLayout title="Get In Touch">
            <NextSeo title="Contact"></NextSeo>
            <div className="flex space-x-0 md:space-x-20 flex-col md:flex-row">
                <ContactForm></ContactForm>

                <div className="flex-1 text-white font-futura-pt text-center pt-20 md:pt-0 md:text-right relative">
                    <h2 className="text-white font-bold text-4xl mb-8 font-futura-pt-bold">Contact Details</h2>

                    <span className="font-futura-pt-bold text-lg ">email</span>
                    <a className="font- font-futura-pt text-xl mb-5 font-bold text-shadow-sm block cursor-pointer" href="mailto:michael@rausch.nz">michael@rausch.nz</a>

                    <span className="font-futura-pt-bold text-lg">phone</span>
                    <a className="font- font-futura-pt text-xl font-bold text-shadow-sm block cursor-pointer" href="phone:+64279529554"> +64-27-952-9554</a>

                    <div className="absolute bottom-0 right-0 -z-10"><Model></Model></div>
                </div>
            </div>
        </PageWithMapLayout>
    )
}

export default Contact;