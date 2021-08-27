import { motion } from "framer-motion"
import React from "react"
import { Container } from "../Container"

interface ImageDescriptor {
    url: string;
    alt: string;
}

interface Props {
    bio: string;
    portfolioUrl: string;

    mainImage: ImageDescriptor;
    secondaryImage: ImageDescriptor;
    tertiaryImage: ImageDescriptor;
}

export const PhotographyBlock: React.FC<Props> = ({bio, portfolioUrl, mainImage, secondaryImage, tertiaryImage}) => {
    return (
        <Container>
            <div className="overflow-hidden relative lg:flex lg:items-center px-5 py-20">
                <div className="w-full px-0 sm:px-20 md:px-0">
                    <h2 className="text-3xl font-extrabold text-white dark:text-white sm:text-5xl text-center md:text-left font-futura-pt-bold">
                        <span className="block" >
                            Photography
                        </span>
                    </h2>
                    <p className="text-md mt-4 text-gray-100 text-center md:text-left z-50">
                        {bio}
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0 mb-10 ">
                        <motion.div 
                            initial={{scale: 1}} animate={{scale: 1}}
                            whileHover={{scale: 0.95}}
                            transition={{duration: 0.2}}                                    
                            className="mt-12 inline-flex rounded-md shadow w-full md:w-auto">

                            <a href={portfolioUrl} rel="noreferrer" target="_blank" className="py-3 px-7 yellow-regular-shadow bg-yellow-light text-black w-full transition ease-in duration-200 text-center text-lg font-bold rounded-md">
                                Portfolio
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className="flex items-center gap-10 pl-8 lg:pl-40 hidden lg:flex ">
                    <motion.img 
                        initial={{scale: 1}}
                        animate={{scale: 1}}
                        whileHover={{scale: 0.95}}
                        transition={{duration: 0.2}}                                    
                        src={mainImage.url} 
                        className="rounded-lg w-1/2 shadow-xl" 
                        alt={mainImage.alt} />
                    <div>
                        <motion.img 
                            initial={{scale: 1}}
                            animate={{scale: 1}}
                            whileHover={{scale: 0.95}}
                            transition={{duration: 0.2}}                                     
                            src={secondaryImage.url} className="rounded-lg mb-8 shadow-xl" alt={secondaryImage.alt} />
                        <motion.img 
                            initial={{scale: 1}}
                            animate={{scale: 1}}
                            whileHover={{scale: 0.95}}
                            transition={{duration: 0.2}}                                    
                            src={tertiaryImage.url} className="rounded-lg shadow-xl" alt={tertiaryImage.alt} />
                    </div>
                </div>
            </div>
        </Container>
    )
}