import { motion } from "framer-motion"

interface Props {
    email: string;
    subject: string;
}

export const ContactCtaBlock: React.FC<Props> = ({email, subject}) => {
    let mailToUrl = "mailto:" + email + "?subject=" + subject;

    return (
        <div className="bg-wave bg-no-repeat bg-center bg-cover mt-10 md:mt-40 py-10 sm:py-20 px-5 sm:px-0 mb-0">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20">
                <a href={mailToUrl}>
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 0.985 }}
                        whileTap={{ scale: 0.90 }}
                        transition={{ duration: 0.2 }}

                        className="rounded-md bg-gray-900 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-80" id="contact">
                        <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                            <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
                                <span className="block text-white font-futura-pt-bold">
                                    Contact Me
                                </span>
                                <span className="block text-green-400 underline sm font-futura-pt-bold">
                                    {email}
                                </span>
                            </h2>
                        </div>
                    </motion.div>
                </a>
            </div>
        </div>
    )
}
