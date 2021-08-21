import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion"

interface Props {
    category: string;
    date: string;
    title: string;
    description: string;
    postId: string;
    tags: string;
}

export const BlogPostListing: React.FC<Props> = ({category, date, title, description, postId, tags}) => {
    return (
        <div className="flex flex-wrap md:flex-nowrap py-10">
            <div className="md:flex-grow">
                <Link href={"/blog/posts/" + postId }>
                    <h2 className="text-3xl font-black text-green-400 title-font mb-2 font-sourcecode cursor-pointer">{title}</h2>
                </Link>
                <span className="mt-1 text-gray-100 text-md font-sourcecode">{date} :: Michael Rausch</span> <br></br>

                <p className="leading-relaxed text-gray-100 font-sourcecode pt-3 text-lg">{description}</p>

                <Link href={"/blog/posts/" + postId }>
                    <a className="text-yellow inline-flex items-center mt-4 font-sourcecode">Read More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </Link>

                <p className="pt-5 text-gray-400 text-md font-sourcecode">{tags}</p>
            </div>
        </div>
    )
}