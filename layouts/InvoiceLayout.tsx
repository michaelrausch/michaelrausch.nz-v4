import { NextSeo } from "next-seo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Document, Page, pdfjs  } from 'react-pdf';
import { useEffect, useState } from "react";
import { IoIosCloudDownload } from "react-icons/io";
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic'

//@ts-ignore
const PDFViewer = dynamic(() => import('../components/PDFViewer'), { ssr: false });

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


interface Props {
    invoiceAmount: string;
    invoicePdf: string;
    notification: string;
    status: string;
}

export const InvoiceLayout: React.FC<Props> = ({ children, invoiceAmount, invoicePdf, notification, status}) => {
    useEffect(() => {
        if (notification && notification !== "") {
            toast(notification);
        }
    }, []);

    return (
        <div className="bg-gray-900">
            <NextSeo
                title="Invoice"
            />

            <Header />
            <div className="bg-jumbo bg-no-repeat bg-center bg-cover ">
                <div className="backdrop-filter backdrop-blur-md bg-opacity-70 bg-gray-900 ">
                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 pb-12 flex flex-col sm:flex-row sm:justify-between ">
                        <div className="pb-10 sm:pb-0">
                            <p className="text-white font-medium text-2xl">{status}</p>
                            <p className="text-green-400 font-black text-5xl">${invoiceAmount}</p>
                        </div>
                        <div className="my-auto">
                            <a href={invoicePdf} target="_blank" className="bg-white px-5 py-3 rounded-md font-medium mr-3">Download PDF</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-10 pb-40 px-4  ">
                <PDFViewer invoicePdf={invoicePdf}></PDFViewer>
            </div>

            <Footer
                name="Michael Rausch"
                instagramUrl="https://www.instagram.com/michaelnz_/"
                linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
            ></Footer>
        </div>
    )
}