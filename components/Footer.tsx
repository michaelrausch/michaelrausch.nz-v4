import React from "react"
import { signIn, signOut, useSession } from 'next-auth/client'

interface Props {
  name: string;
  instagramUrl: string;
  linkedinUrl: string;
}

export const Footer: React.FC<Props> = ({name, instagramUrl, linkedinUrl}) => {
  return (
    <footer className="text-gray-600  body-font bg-gray-800 ">
      <div className=" px-5 py-8 mx-auto flex items-center sm:flex-row flex-col max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
          <span className="ml-3 text-xl font-semibold text-gray-100 " >Michael Rausch</span>
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-500" href={instagramUrl} target="_blank">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href={linkedinUrl} target="_blank">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}