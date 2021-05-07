import { motion } from "framer-motion"

export default function Jumbotron() {
    return (
        <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2 " fill="#fff" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-1 px-4 sm:px-6 lg:px-8">
         
            </div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Hi, I'm </span>
                  <span class="block text-dyellow xl:inline">Michael 👋</span>
                </h1>
                <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  I'm a Christchurch based freelance software engineer and photographer. I create mobile and web applications for small businesses throughout Australia and New Zealand.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <motion.div 
                    initial={{scale: 1}}
                    animate={{scale: 1}}
                    whileHover={{scale: 0.95}}
                    transition={{duration: 0.2}}                    
                    class="rounded-md shadow">
                    <motion.a 
                      href="#contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-dyellow hover:bg-dyellow-dark md:py-4 md:text-lg md:px-10 yellow-regular-shadow">
                      Contact Me
                    </motion.a>
                  </motion.div>

                  <motion.div 
                    initial={{scale: 1}}
                    animate={{scale: 1}}
                    whileHover={{scale: 0.95}}
                    transition={{duration: 0.2}}                                      
                  class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="https://y.at/%F0%9F%8D%8D%F0%9F%98%9C%F0%9F%98%82%F0%9F%8C%B5%F0%9F%8E%B8" rel="noreferrer" target="_blank" disabled class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-dyellow-light hover:bg-dyellow-dark md:py-4 md:text-lg md:px-10 ">
                      Social Links
                    </a>
                  </motion.div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/15.jpg" alt=""></img>
        </div>
      </div>

      
    )
}