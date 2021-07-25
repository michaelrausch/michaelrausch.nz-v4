import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react'
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { pdfjs  } from 'react-pdf';
import { getSession, signin, signIn, signOut, useSession } from 'next-auth/client'
import dynamic from 'next/dynamic'
import { ContactCtaBlock } from '../components/blocks/ContactCtaBlock';
import { GetServerSideProps } from 'next';
import { JumbotronV2 } from '../components/home/JumbotronV2';

const PDFViewer = dynamic(() => import('../components/PDFViewer'), { ssr: false });
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const getServerSideProps: GetServerSideProps = async (context) => {
    var session

    try {
        session = await getSession(context);
    }
    catch (err) {
        return {
            props: {
                cvPdfUrl: null
            }
        }
    }
    
    if (session && session.cv && session.cv !== "") {
        return {
            props: {
                cvPdfUrl: session.cv
            }
        }
    }
    else if (session) {
        console.log(session)
        return {
            props: {
                cvPdfUrl: process.env.CV_PDF_URL
            }
        }
    }

    return {
        props: {
            cvPdfUrl: null
        }
    } 
}

interface Props {
    cvPdfUrl: string
}

const CV: React.FC<Props> = ({cvPdfUrl}) => {
    const [ session, loading ] = useSession()

    return (
        <div className="bg-gray-800">
            <NextSeo
                title="Web & App Development"
            />

            <Header />

            {!session && <>
                <JumbotronV2
                    name="Michael"
                    bio="I'm a Christchurch based freelance software engineer and photographer. I create mobile and web applications for small businesses throughout Australia and New Zealand."
                    secondaryLinkUrl="https://github.com/michaelrausch/"
                    secondaryLinkName="Github"
                    imageUrl="/images/16.jpg"
                />

                <Container>
                    <h2 className="text-white text-5xl font-black">Please Sign In</h2>
                    <p className="text-white font-medium pt-5">You'll need to sign in before you can view my CV</p>
                    <button onClick={() => signIn()} className="bg-white py-2 px-5 rounded-md font-bold mt-10 mb-20">Sign In</button>
                </Container>
                </>
            }

            {session && <>
                <div className="bg-jumbo bg-no-repeat bg-center bg-cover ">
                <div className="backdrop-filter backdrop-blur-md bg-opacity-70 bg-gray-900 ">
                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 pb-12 flex flex-col sm:flex-row sm:justify-between ">
                        <div className="pb-10 sm:pb-0">
                            <p className="text-white font-black text-4xl">Hi, {session.user.name}</p>
                        </div>
                        <div className="my-auto">
                            <a href={cvPdfUrl} target="_blank" className="bg-white px-5 py-3 rounded-md font-medium mr-3">Download PDF</a>
                        </div>
                    </div>
                </div>
            </div>

            
                <Container>
                    <h2 className="text-white text-5xl font-black"></h2>

                    <PDFViewer invoicePdf={cvPdfUrl}></PDFViewer>

                    <button onClick={() => signOut()} className="bg-white py-2 px-5 rounded-md font-bold mt-10 mb-20">Log Out</button>
                </Container>

                <ContactCtaBlock email="michael@rausch.nz" subject="Hello"></ContactCtaBlock>

                </>
            }

            <Footer
                name="Michael Rausch"
                instagramUrl="https://www.instagram.com/michaelnz_/"
                linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
            />
        </div>
    )
}

export default CV;