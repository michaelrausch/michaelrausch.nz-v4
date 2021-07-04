import React from "react"
import { motion } from "framer-motion"

interface Props {
    name: string;
    bio: string;
    secondaryLinkUrl: string;
    secondaryLinkName: string;
    imageUrl: string;
}

export const JumbotronV2: React.FC<Props> = ({ name, bio, secondaryLinkUrl, imageUrl, secondaryLinkName }) => {
    return (
        <div className="bg-jumbo bg-no-repeat bg-center bg-cover">
            <div className="bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-20">
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-32">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
                            <span className="block xl:inline">Hi, I'm </span>
                            <span className="block text-green-400 xl:inline">{name} 👋</span>
                        </h1>
                        <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                            {bio}
                        </p>
                        <div className="mt-5 mb-10 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 0.985 }}
                                whileTap={{ scale: 0.90 }}
                                transition={{ duration: 0.2 }}
                                className="rounded-md shadow">
                                <motion.a
                                    href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10 ">
                                    Contact Me
                                </motion.a>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 0.985 }}
                                whileTap={{ scale: 0.90 }}
                                transition={{ duration: 0.2 }}
                                className="mt-3 sm:mt-0 sm:ml-3">
                                <a href={secondaryLinkUrl} rel="noreferrer" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10 ">
                                    {secondaryLinkName}
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}