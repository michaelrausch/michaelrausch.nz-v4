import React from "react";

interface Props {
    smallBody: string;
    body: string;
    link: string;
    linkTitle: string;
}

export const Banner: React.FC<Props> = ({body, smallBody, link, linkTitle}) => {
    return(
        <div className="bg-yellow-light">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-yellow-dark">
                            <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                        </span>
                        <p className="ml-3 font-medium text-black truncate">
                            <span className="md:hidden">
                                {smallBody}
                            </span>
                            <span className="hidden md:inline">
                                {body} 
                                
                            </span>
                            &nbsp;&nbsp;

                            <a href={link} target="_blank" className="text-gray-900 font-bold">{linkTitle}</a> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
