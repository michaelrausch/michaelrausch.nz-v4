import React from "react";
import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <header className="text-gray-100 bg-gray-900 body-font sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-70">
            <div className="max-w-7xl mx-auto flex flex-wrap py-6 flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
                <Link href="/">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="text-3xl text-white  font-futura-pt-bold">Michael Rausch</span>
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center font-futura-pt">
                    <Link href="/">
                        <a className="mx-5 font-bold text-center border-b-2 border-transparent hover:border-green-500">Home</a>
                    </Link>
                    <Link href="/projects">
                        <a className="mx-5 font-bold text-center border-b-2 border-transparent outline-none hover:border-green-500 ">Work</a>
                    </Link>      
                    {/* <a href="https://github.com/michaelrausch"className="mr-5 hover:text-gray-300">Github</a> */}
                </nav>
                {/* <Link href="/">
                    <a className="inline-flex items-center bg-yellow border-0 py-1 px-3 focus:outline-none hover:bg-yellow-light rounded text-base mt-4 md:mt-0 text-black">Home
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </Link> */}
            </div>
            </header>
    )
}