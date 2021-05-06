import { motion } from "framer-motion"

export default function Photography() {
    return (
        <div class="overflow-hidden relative lg:flex lg:items-center px-5">
            <div class="w-full px-0 sm:px-20 md:px-0">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-5xl text-center md:text-left">
                    <span class="block">
                        Photography
                    </span>
                </h2>
                <p class="text-md mt-4 text-gray-900 text-center md:text-left">
                    I am currently shooting for Metropol Magazine, and am available to take on a limited amount of photography work. I have a wide range of experience, so feel free to take a look at my portfolio and get in touch.
                </p>
                <div class="lg:mt-0 lg:flex-shrink-0 mb-10 ">
                    <motion.div 
                                        initial={{scale: 1}}
                                        animate={{scale: 1}}
                                        whileHover={{scale: 0.95}}
                                        transition={{duration: 0.2}}                                    
                    
                    class="mt-12 inline-flex rounded-md shadow w-full md:w-auto">
                        <a href="https://photography.michaelrausch.nz" rel="noreferrer" target="_blank" class="py-3 px-7 yellow-regular-shadow hover:bg-dyellow-dark text-black w-full transition ease-in duration-200 text-center text-base font-semibold rounded-md">
                            Portfolio
                         </a>
                    </motion.div>
                </div>
            </div>
            <div class="flex items-center gap-10 pl-8 lg:pl-40 hidden lg:flex ">
                <motion.img 
                    initial={{scale: 1}}
                    animate={{scale: 1}}
                    whileHover={{scale: 0.95}}
                    transition={{duration: 0.2}}                                    
                    src="/images/12.jpg" 
                    class="rounded-lg w-1/2 shadow-xl" 
                    alt="Tree" />

                <div>
                    <motion.img 
                        initial={{scale: 1}}
                        animate={{scale: 1}}
                        whileHover={{scale: 0.95}}
                        transition={{duration: 0.2}}                                     
                        src="/images/6.jpg" class="rounded-lg mb-8 shadow-xl" alt="Tree" />
                    <motion.img 
                        initial={{scale: 1}}
                        animate={{scale: 1}}
                        whileHover={{scale: 0.95}}
                        transition={{duration: 0.2}}                                    
                        src="/images/4.jpg" class="rounded-lg shadow-xl" alt="Tree" />
                </div>
            </div>
        </div>
    )
}