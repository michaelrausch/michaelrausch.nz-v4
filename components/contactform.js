import { motion } from "framer-motion"

export default function ContactForm() {
    return (
        <div>
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.975 }}
                transition={{ duration: 0.2 }}

                class="rounded-md bg-gray-900 shadow-md " id="contact">
                <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span class="block text-white">
                            Contact Me
            </span>
                        <a href="mailto:michael@rausch.nz?subject=Hello!">
                            <span class="block text-dyellow-regular underline sm">
                                michael@rausch.nz
                    </span>
                        </a>

                    </h2>
                </div>

            </motion.div>
        </div>


    )
}