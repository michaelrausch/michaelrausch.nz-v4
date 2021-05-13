import React from "react";
import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <header className="text-gray-600 bg-gray-900 body-font">
            <div className="max-w-7xl mx-auto flex flex-wrap py-8 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="text-4xl font-black text-yellow-light">Michael Rausch</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {/* <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">Blog</a> */}
                </nav>
                <Link href="/">
                    <a className="inline-flex items-center bg-yellow-ultralight border-0 py-1 px-3 focus:outline-none hover:bg-yellow-light rounded text-base mt-4 md:mt-0">Home
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </Link>
            </div>
            </header>
    )
}