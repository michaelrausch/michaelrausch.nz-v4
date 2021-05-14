import { motion } from "framer-motion"
import React from "react"

interface Props {
  name: string;
  bio: string;
  secondaryLinkUrl: string;
  secondaryLinkName: string;
  imageUrl: string;
}

export const Jumbotron: React.FC<Props> = ({name, bio, secondaryLinkUrl, imageUrl, secondaryLinkName}) => {
  return (
    <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-52">
        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2 " fill="#fff" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div className="relative pt-1 px-4 sm:px-6 lg:px-8">
     
        </div>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-48">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hi, I'm </span>
              <span className="block text-yellow xl:inline">{name} 👋</span>
            </h1>
            <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {bio}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <motion.div 
                initial={{scale: 1}}
                animate={{scale: 1}}
                whileHover={{scale: 0.95}}
                transition={{duration: 0.2}}                    
                className="rounded-md shadow">
                <motion.a 
                  href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-light hover:bg-yellow-dark md:py-4 md:text-lg md:px-10 yellow-regular-shadow">
                  Contact Me
                </motion.a>
              </motion.div>

              <motion.div 
                initial={{scale: 1}}
                animate={{scale: 1}}
                whileHover={{scale: 0.95}}
                transition={{duration: 0.2}}                                      
                className="mt-3 sm:mt-0 sm:ml-3">
                <a href={secondaryLinkUrl} rel="noreferrer" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-light hover:bg-yellow-dark md:py-4 md:text-lg md:px-10 ">
                  {secondaryLinkName}
                </a>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img className="h-70 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={imageUrl} alt=""></img>
    </div>
  </div>

  
)
}