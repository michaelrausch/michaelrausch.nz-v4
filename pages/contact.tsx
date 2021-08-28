import { NextSeo } from "next-seo";
import React from "react";
import ContactForm from "../components/ContactForm";
import { PageWithMapLayout } from "../layouts/PageWithMapLayout";

const Contact: React.FC = () => {

    return (
        <PageWithMapLayout title="Get In Touch">
            <NextSeo title="Contact"></NextSeo>

            <div className="flex space-x-0 md:space-x-20 flex-col md:flex-row pb-20">
                <ContactForm></ContactForm>

                <div className="flex-1 text-white font-futura-pt text-center pt-20 md:pt-0 md:text-right bg-au bg-contain bg-no-repeat bg-right-bottom bg-opacity-25">
                    <h2 className="text-white font-bold text-4xl mb-8 font-futura-pt-bold">Contact Details</h2>

                    <span className="font-futura-pt-bold text-lg ">email</span>
                    <p className="font- font-futura-pt text-xl mb-5 font-bold text-shadow-sm">michael@rausch.nz</p>

                    <span className="font-futura-pt-bold text-lg">phone</span>
                    <p className="font- font-futura-pt text-xl font-bold text-shadow-sm"> +64-27-952-9554</p>
                </div>
            </div>
        </PageWithMapLayout>
    )
}

export default Contact;