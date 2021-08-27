import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

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
            <div className="bg-gray-900 backdrop-filter backdrop-blur-sm bg-opacity-60">
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-48 lg:py-48">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-5xl tracking-tight text-white sm:text-6xl md:text-7xl font-futura-pt-bold">
                            <span className="block xl:inline">Hi, I'm </span>
                            <span className="block text-green-400 xl:inline">{name} 👋</span>
                        </h1>
                        <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 font-futura-pt">
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
                                <Link href="/contact">
                                    <motion.a
                                        className="w-full flex items-center justify-center px-8 py-3  text-base font-bold rounded-md text-black bg-green-500  md:py-4 md:text-lg md:px-10 font-futura-pt shadow-offset-black hover:shadow-offset-black-lg cursor-pointer">
                                        Contact Me
                                    </motion.a>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 0.985 }}
                                whileTap={{ scale: 0.90 }}
                                transition={{ duration: 0.2 }}
                                className="mt-3 sm:mt-0 sm:ml-3">
                                <Link href="/repos">
                                    <a 
                                        rel="noreferrer" 
                                        className="w-full flex items-center justify-center px-8 py-3  text-base font-bold rounded-md text-black bg-green-500  md:py-4 md:text-lg md:px-10 font-futura-pt shadow-offset-black hover:shadow-offset-black-lg cursor-pointer">
                                        Git Repositories
                                    </a>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}