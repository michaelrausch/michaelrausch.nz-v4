import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion"

interface Props {
    category: string;
    date: string;
    title: string;
    description: string;
    postId: string;
}

export const BlogPostListing: React.FC<Props> = ({category, date, title, description, postId}) => {
    return (
        <motion.div className="py-8 flex flex-wrap md:flex-nowrap bg-gray-200 p-10 rounded-md mb-5">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col pr-10 md:pr-0">
                <span className="font-semibold title-font text-gray-700">{category.toUpperCase()}</span>
                <span className="mt-1 text-gray-500 text-sm">{date}</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                <p className="leading-relaxed">{description}</p>
                <Link href={"/blog/posts/" + postId }>
                    <a className="text-yellow inline-flex items-center mt-4">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </Link>
            </div>
        </motion.div>
    )
}