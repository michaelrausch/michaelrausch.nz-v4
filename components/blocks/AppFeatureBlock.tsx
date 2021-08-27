import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { Container } from "../Container"
import { useInView } from 'react-intersection-observer';

interface Props {
    appName: string;
    appDescription: string;
    appStoreUrl: string;
    imageUrl: string;
    playStoreUrl: string;
}

export const AppFeatureBlock: React.FC<Props> = ({ appName, appDescription, appStoreUrl, imageUrl, playStoreUrl }) => {
    const pillControls = useAnimation();
    const [ pillRef, pillInView ] = useInView();

    const pillAnimationVariants = {
        hidden: { scale: 0.8 },
        visible: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 0.6
            }
        }
    }

    useEffect(() => {
        if (pillInView) {
            pillControls.start('visible');
        }
        
    }, [pillControls, pillInView]);

    return (
        <>
            <div className="bg-gray-900 pb-5">
                <Container>
                    <section className="text-gray-300 body-font z-100">
                        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                                <motion.span
                                    ref={pillRef} 
                                    animate={pillControls}
                                    initial="hidden"
                                    variants={pillAnimationVariants}
                                    className="rounded-xl bg-green-500 px-4 py-1 mb-5 text-black font-futura-pt-bold shadow-offset-black">Latest Release</motion.span>


                                <h1 className="sm:text-5xl text-3xl mb-4 font-extrabold dark:text-white text-white font-futura-pt-bold ">{appName}</h1>
                                <p className="mb-8 leading-relaxed text-md">{appDescription}</p>
                                <div className="flex justify-center flex-col sm:flex-row">
                                    <a href={appStoreUrl} target="_blank">
                                        <img className="h-16 mx-auto" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1619913600&h=fad42942225e4c7ac5392eceb723a72f" alt="Download on the App Store" />
                                    </a>
                                    <a href={playStoreUrl} target="_blank" className=" ml-0 mt-5 sm:ml-5 sm:mt-0">
                                        <img className="h-16 mx-auto" alt='Get it on Google Play' src='/google-play-badge.png' />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img className="w-72 right" alt="hero" src={imageUrl} />
                            </div>
                        </div>
                    </section>
                </Container>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="-mt-5"><path fill="#0D0D0D" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </>
    )
}